import React from 'react';
import brand from '../../img/brand.svg';


const Top = () => {
    return (
        <section className="top">
            <div className="top__wrap center">
                <img src={brand} alt="for men" className="top__img display_none_768" />
                <h1 className="top__title">
                    THE BRAND <br />
                    <span className="top__title-small">
                        OF LUXERIOUS
                        <span className="top__title-small-pink">FASHION</span>
                    </span>
                </h1>
            </div>
        </section>
    );
}

export default Top;
