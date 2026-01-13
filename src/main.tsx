import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import {BrowserRouter} from 'react-router'
import './index.css'
//import App from './App.tsx'
import ContactForm from './components/ContactForm.tsx'
//import ProfileForm from './components/Class-Example/ProfileForm.tsx'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>,
)
