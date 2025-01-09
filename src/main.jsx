import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PrivyProvider} from '@privy-io/react-auth';
import { BrowserRouter as Router } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_APP_PRIVY_APP_ID}
      
      config={{
        appearance: {
          theme: 'dark',
        },
      }}
    >
      <Router>
      <App />
      </Router>
    </PrivyProvider>
  </StrictMode>,
)
