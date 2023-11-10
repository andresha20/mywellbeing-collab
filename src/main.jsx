import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ReducersProvider } from './context/connectionsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReducersProvider>
      <App/>
    </ReducersProvider>
  </React.StrictMode>,
)
