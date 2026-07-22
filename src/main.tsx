import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

