import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/cartContext.jsx'
import { CartClickedProvider } from './context/setCartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <CartClickedProvider>
      <App />
    </CartClickedProvider>
  </CartProvider>
)
