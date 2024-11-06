import { PlantsProvider, TokenProvider } from '@/contexts';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TokenProvider>
      <PlantsProvider>
        <App />
      </PlantsProvider>
    </TokenProvider>
  </StrictMode>
);
