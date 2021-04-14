import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://secure-hollows-18485.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="text-center">
            <h1 className="text-center display-1">Welcome to Daily Grocery Shopping</h1>
            {
                products.length === 0 && <Spinner size="lg" animation="border" role="status">
                    
                </Spinner>
            }
            {
                products.map(product => <ProductList key={product._id} product={product}></ProductList>)
            }
        </div>
    );
};

export default Products;