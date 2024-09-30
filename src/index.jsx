import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontex.jsx';
import { FilterContextProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const myDomain = process.env.REACT_APP_AUTH_DOMAIN;
const myClientId = process.env.REACT_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={myDomain}
        clientId={myClientId}
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
