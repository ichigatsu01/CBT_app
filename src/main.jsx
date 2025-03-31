import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HeaderProvider from './context/HeaderProvider.jsx'
import WorkSpaceProvider from './context/WorkSpaceProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderProvider>
      <WorkSpaceProvider>
        <App />
      </WorkSpaceProvider>
    </HeaderProvider>
  </StrictMode>,
)
