import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.slice(0, -1)}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
