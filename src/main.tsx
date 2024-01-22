import React from 'react'
import ReactDOM from 'react-dom/client'
import Switch from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
    </BrowserRouter>
  </React.StrictMode>,
)