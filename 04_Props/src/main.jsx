import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // ✅ Ensure correct file path

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
);

