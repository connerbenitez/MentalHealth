import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './TemplateIndex.css';
import App from './App.jsx'; // Correctly import the App component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
