import React, { useContext } from 'react';
import { ProductDataContext } from '../../contexts/ProductDataContext';
import Products from '../catalog/Products';

const PAGE_SIZE = 3;

const ProductsForProductsPage = () => {
    const { products } = useContext(ProductDataContext);

    return (
        <section className="products center">
            <div className="products__items-wrap">
                <Products productsData={products} pageSize={PAGE_SIZE} />
            </div>
        </section>
    )
}

export default ProductsForProductsPage;
