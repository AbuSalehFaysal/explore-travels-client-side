import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <section className="d-flex justify-content-center text-center">
            <div className="text-center w-100 row">
                <h1 className="text-center display-1">Our Services</h1>
                {
                    products.length === 0 && <Spinner className="text-center" size="lg" animation="border" role="status">

                    </Spinner>
                }
                {
                    products.map(product => <ProductList key={product._id} product={product}></ProductList>)
                }
            </div>
        </section>
    );
};

export default Products;