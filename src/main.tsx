import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import App from './App';
import './index.css';
import { EmployeeProvider } from './shared/context/EmployeeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeeProvider>
      <Toaster
        position="top-right"
        richColors
        expand={false}
        closeButton
        duration={4000}
      />
      <App />
    </EmployeeProvider>
  </StrictMode>,
);
