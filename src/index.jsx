import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontex.jsx';
import { FilterContextProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clientId = process.env.RDACT_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-u4635ba44bcf6cii.us.auth0.com"
        clientId="lvkvWiJsxUJAFkclHcE0ZVrVmjpDmA7G"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
    >
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    </Auth0Provider>,
)
