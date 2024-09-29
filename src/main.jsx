import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontex.jsx';
import { FilterContextProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>,
)
