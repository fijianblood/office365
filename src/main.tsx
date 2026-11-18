import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ActivationHelpPage from './pages/ActivationHelpPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ActivationHelpPage />
  </StrictMode>,
)
