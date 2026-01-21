import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n.ts'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
      ></script>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
