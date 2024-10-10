import React from 'react';
import Header from '../base/header/Header';
import Breadcrumbs from '../base/Breadcrumbs';
import RegFormSection from './RegFormSection';
import Subscribe from '../base/subscribe/Subscribe';
import Footer from '../base/footer/Footer';

const RegistrationPage = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs title={'REGISTRATION'} />
            <RegFormSection />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default RegistrationPage;
