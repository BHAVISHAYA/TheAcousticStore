import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureProducts } from './FeatureProducts';
import { Features } from './Features';
import { Characteristics } from './Characteristics';

export const Home = () => {
    return (
        <>
            {/* <Nav /> */}
            <HeroSection />
            <FeatureProducts />
            <Features />
            <Characteristics />
            {/* <Footer /> */}
        </>
    )
}