import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route,HashRouter } from 'react-router'
import App from './App.jsx'
import Project from './screens/Projects/Project.jsx'
import About from './screens/About/About.jsx'
import Contact from './screens/Contact/Contact.jsx'
import Portfolio from './screens/Portfolio/Portfolio.jsx'
import Service from './screens/Services/Service.jsx'

createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/services' element={<Service/>}/>
    </Routes>
  </HashRouter>
);

