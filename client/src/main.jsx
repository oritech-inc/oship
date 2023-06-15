import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './layouts/components/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <NavBar />
      <App />
    </>
  </React.StrictMode>,
)
