import React from 'react';
import { BrowserRouter as Routers } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { SingleProduct } from "./components/SingleProduct";
import { Cart } from "./components/Cart";
import { Error } from "./components/Error";
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';

const App = () => {
    return (
        <Routers>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Routers>
    );
}

export default App;