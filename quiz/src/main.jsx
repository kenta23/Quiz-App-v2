import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
  <BrowserRouter>
      <App />
  </BrowserRouter>
 </> 
)
