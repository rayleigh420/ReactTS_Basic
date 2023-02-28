import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import InfoContextProvider from './context/InfoContextProvider'
import ThemeContextProvider from './context/ThemeContextProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <InfoContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InfoContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
