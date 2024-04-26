import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'
import { QueryProvider } from './lib/react-query/QueryProvider.jsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RecoilRoot>
      <QueryProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryProvider>
    </RecoilRoot>
  </BrowserRouter>
)
