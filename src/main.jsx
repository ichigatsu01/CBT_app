import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HeaderProvider } from './context/HeaderContext.jsx'
import { WorkSpaceProvider } from './context/WorkSpaceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderProvider>
      <WorkSpaceProvider>
        <App />
      </WorkSpaceProvider>
    </HeaderProvider>
  </StrictMode>,
)
