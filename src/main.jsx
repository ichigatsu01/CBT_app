import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DisplayProvider } from './context/DisplayContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayProvider>
      <App />
    </DisplayProvider>
  </StrictMode>,
)
