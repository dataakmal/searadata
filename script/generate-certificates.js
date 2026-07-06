const fs = require('fs');
const path = require('path');

// This script automates the extraction of certificate metadata from local PDF files
// and generates the `src/data/certificates.json` file.
//
// To use this script:
// 1. Install pdf-parse: npm install pdf-parse
// 2. Put all your 37 certificate PDF files inside the `public/certificate/` folder.
// 3. Run: node scripts/generate-certificates.js

async function main() {
  let pdf;
  try {
    pdf = require('pdf-parse');
  } catch (err) {
    console.error('\n❌ ERROR: Package "pdf-parse" is not installed.');
    console.log('Silakan jalankan perintah berikut terlebih dahulu:\n');
    console.log('   npm install pdf-parse\n');
    console.log('Setelah itu, jalankan kembali script ini dengan:\n');
    console.log('   node scripts/generate-certificates.js\n');
    process.exit(1);
  }

  const pdfDirectory = path.join(__dirname, '../public/certificate');
  const outputJsonPath = path.join(__dirname, '../src/data/certificates.json');

  if (!fs.existsSync(pdfDirectory)) {
    console.error(`❌ Folder certificate tidak ditemukan di: ${pdfDirectory}`);
    process.exit(1);
  }

  const files = fs.readdirSync(pdfDirectory).filter(file => file.toLowerCase().endsWith('.pdf'));

  if (files.length === 0) {
    console.log('⚠️ Tidak ada file PDF yang ditemukan di folder public/certificate/.');
    console.log('Silakan taruh file PDF sertifikat Anda di sana.');
    process.exit(0);
  }

  console.log(`🔍 Menemukan ${files.length} sertifikat PDF. Memulai proses ekstraksi...`);

  let currentData = {};
  if (fs.existsSync(outputJsonPath)) {
    try {
      currentData = JSON.parse(fs.readFileSync(outputJsonPath, 'utf8'));
    } catch (e) {
      currentData = {};
    }
  }

  const results = { ...currentData };

  for (const file of files) {
    const filePath = path.join(pdfDirectory, file);
    const certificateId = path.basename(file, '.pdf').toUpperCase();

    try {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdf(dataBuffer);
      const text = data.text;

      // Split text into lines and clean them up
      const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

      // Find indices to extract information
      let name = '';
      let program = 'Data Analyst Bootcamp';
      let completionDate = '3-20 Juni 2026';
      let duration = '15 Jam';
      let technologies = ['Microsoft Excel', 'SQL', 'Power BI', 'Python'];

      // 1. Extract Name (Line after "THIS CERTIFICATE IS PROUDLY PRESENTED TO:")
      const presenterIndex = lines.findIndex(l => l.toUpperCase().includes('PROUDLY PRESENTED TO'));
      if (presenterIndex !== -1 && presenterIndex + 1 < lines.length) {
        name = lines[presenterIndex + 1];
      }

      // 2. Extract Program Name
      const completedIndex = lines.findIndex(l => l.toUpperCase().includes('SUCCESSFULLY COMPLETED THE'));
      if (completedIndex !== -1 && completedIndex + 1 < lines.length) {
        program = lines[completedIndex + 1];
      } else if (lines.some(l => l.toUpperCase().includes('DATA ANALYST BOOTCAMP'))) {
        program = 'Data Analyst Bootcamp';
      }

      // 3. Extract Technologies
      const techIndex = lines.findIndex(l => l.toUpperCase().includes('CORE TECHNOLOGIES'));
      if (techIndex !== -1 && techIndex + 1 < lines.length) {
        const techLine = lines[techIndex + 1];
        technologies = techLine.split(/[•|&,]/).map(t => t.trim()).filter(Boolean);
      }

      // 4. Extract Date of Completion and Duration
      const dateLine = lines.find(l => l.toUpperCase().includes('DATE OF COMPLETION'));
      if (dateLine) {
        // Example: "Date of Completion : 3-20 June 2026 | 6 + 1 Live Sessions | Duration : 15 hours"
        const parts = dateLine.split('|');
        if (parts[0]) {
          const dateMatch = parts[0].match(/Date of Completion\s*:\s*(.*)/i);
          if (dateMatch && dateMatch[1]) {
            completionDate = dateMatch[1].trim();
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
            hours = durationMatch[1].trim();
          }
        }

        if (hours && sessions) {
          duration = `${hours} (${sessions})`;
        } else if (hours) {
          duration = hours;
        }
      }

      // Store back to json structure
      results[certificateId] = {
        certificateId,
        name: name || 'Penerima Sertifikat',
        program,
        completionDate,
        duration,
        technologies,
        founder: 'Akmal Fauzan',
        pdfUrl: `/certificate/${file}` // Point to public URL directly!
      };

      console.log(`✅ Sukses memproses [${certificateId}]: ${name}`);
    } catch (err) {
      console.error(`❌ Gagal memproses ${file}:`, err.message);
    }
  }

  // Save outputs back to json
  fs.writeFileSync(outputJsonPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`\n🎉 SELESAI! File JSON berhasil diperbarui di: ${outputJsonPath}\n`);
}

main();
