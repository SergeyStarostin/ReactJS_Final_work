import React from 'react';
import Header from '../base/header/Header';
import Breadcrumbs from '../base/Breadcrumbs';
import ProductsForCatalog from './ProductsForCatalog';
import Features from '../base/features/Features';
import Subscribe from '../base/subscribe/Subscribe';
import Footer from '../base/footer/Footer';

const CatalogPage = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs title={'NEW ARRIVALS'} />
            <ProductsForCatalog />
            <Features />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default CatalogPage;
