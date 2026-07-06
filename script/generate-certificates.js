import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to translate months from English to Indonesian
function translateMonths(str) {
  const months = {
    'January': 'Januari',
    'February': 'Februari',
    'March': 'Maret',
    'April': 'April',
    'May': 'Mei',
    'June': 'Juni',
    'July': 'Juli',
    'August': 'Agustus',
    'September': 'September',
    'October': 'Oktober',
    'November': 'November',
    'December': 'Desember'
  };
  let result = str;
  for (const [en, id] of Object.entries(months)) {
    result = result.replace(new RegExp(en, 'gi'), id);
  }
  return result;
}

async function main() {
  const pdfDirectory = path.join(__dirname, '../public/certificate');
  const outputJsonPath = path.join(__dirname, '../src/data/certificates.json');

  if (!fs.existsSync(pdfDirectory)) {
    console.log(`📁 Membuat folder certificate di: ${pdfDirectory}`);
    fs.mkdirSync(pdfDirectory, { recursive: true });
  }

  const files = fs.readdirSync(pdfDirectory).filter(file => file.toLowerCase().endsWith('.pdf'));

  if (files.length === 0) {
    console.log('⚠️ Tidak ada file PDF yang ditemukan di folder public/certificate/.');
    console.log('Silakan letakkan file PDF sertifikat Anda di sana.');
    process.exit(0);
  }

  console.log(`🔍 Menemukan ${files.length} sertifikat PDF. Memulai proses ekstraksi...`);

  const results = {};

  for (const file of files) {
    const filePath = path.join(pdfDirectory, file);
    const certificateId = path.basename(file, '.pdf').toUpperCase();

    try {
      const dataBuffer = fs.readFileSync(filePath);
      const parser = new PDFParse({ data: dataBuffer });
      const data = await parser.getText();
      const text = data.text;
      await parser.destroy();

      // Pecah teks berdasarkan baris dan bersihkan whitespace
      const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

      let name = '';
      let program = 'Data Analyst Bootcamp';
      let completionDate = '3-20 Juni 2026';
      let duration = '15 Jam';
      let technologies = ['Microsoft Excel', 'SQL', 'Power BI', 'Python'];

      // 1. Ekstrak Nama (Baris setelah kalimat "THIS CERTIFICATE IS PROUDLY PRESENTED TO:")
      const presenterIndex = lines.findIndex(l => l.toUpperCase().includes('PROUDLY PRESENTED TO'));
      if (presenterIndex !== -1 && presenterIndex + 1 < lines.length) {
        name = lines[presenterIndex + 1];
      } else {
        // Pola fallback untuk mock PDF: "This is a verified certificate of [Nama] for [Program]"
        const verifiedLine = lines.find(l => l.includes('verified certificate of'));
        if (verifiedLine) {
          const match = verifiedLine.match(/verified certificate of\s+(.*?)\s+for/i);
          if (match && match[1]) {
            name = match[1].trim();
          }
        }
      }

      // 2. Ekstrak Nama Program
      const completedIndex = lines.findIndex(l => l.toUpperCase().includes('SUCCESSFULLY COMPLETED THE'));
      if (completedIndex !== -1 && completedIndex + 1 < lines.length) {
        program = lines[completedIndex + 1];
      } else if (lines.some(l => l.toUpperCase().includes('DATA ANALYST BOOTCAMP'))) {
        program = 'Data Analyst Bootcamp';
      }

      // 3. Ekstrak Core Technologies
      const techIndex = lines.findIndex(l => l.toUpperCase().includes('CORE TECHNOLOGIES'));
      if (techIndex !== -1 && techIndex + 1 < lines.length) {
        const techLine = lines[techIndex + 1];
        technologies = techLine.split(/[•|&,]/).map(t => t.trim()).filter(Boolean);
      }

      // 4. Ekstrak Tanggal Kelulusan dan Durasi
      const dateLine = lines.find(l => l.toUpperCase().includes('DATE OF COMPLETION'));
      if (dateLine) {
        // Contoh: "Date of Completion : 3-20 June 2026 | 6 + 1 Live Sessions | Duration : 15 hours"
        const parts = dateLine.split('|');
        if (parts[0]) {
          const dateMatch = parts[0].match(/Date of Completion\s*:\s*(.*)/i);
          if (dateMatch && dateMatch[1]) {
            completionDate = translateMonths(dateMatch[1].trim());
          }
        }
        
        let sessions = '';
        if (parts[1]) {
          sessions = parts[1].trim();
        }
        
        let hours = '';
        if (parts[2]) {
          const durationMatch = parts[2].match(/Duration\s*:\s*(.*)/i);
          if (durationMatch && durationMatch[1]) {
            hours = durationMatch[1].replace(/hours/gi, 'Jam').trim();
          }
        }

        if (hours && sessions) {
          duration = `${hours} (${sessions})`;
        } else if (hours) {
          duration = hours;
        }
      }

      // Simpan ke struktur data
      results[certificateId] = {
        certificateId,
        name: name || 'Penerima Sertifikat',
        program,
        completionDate,
        duration,
        technologies,
        founder: 'Akmal Fauzan',
        pdfUrl: `/certificate/${file}` // Link publik ke file PDF asli
      };

      console.log(`✅ Berhasil mengekstrak [${certificateId}]: ${name}`);
    } catch (err) {
      console.error(`❌ Gagal memproses ${file}:`, err.message);
    }
  }

  // Tulis kembali ke file JSON
  fs.writeFileSync(outputJsonPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n🎉 SUKSES! File metadata sertifikat diperbarui di: ${outputJsonPath}\n`);
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
