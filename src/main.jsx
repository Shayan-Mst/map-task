import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css';
import { SWRProvider } from './config/swrConfig.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SWRProvider>
    <App />
    </SWRProvider>
  </StrictMode>,
)
