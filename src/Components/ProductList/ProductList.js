import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';
import './ProductList.css'

const ProductList = (props) => {
    const { _id, name, price, quantity, imgURL } = props.product;
    const history = useHistory()
    const handleCheckout = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className="col-md-4 mr-5">
            <div className="d-flex justify-content-center">
                <div class="card" style={{width: '18rem'}}>
                    <img width="400" height="200" class="card-img-top" src={imgURL} alt="Card image cap" />
                    <div class="card-body">
                        <h1>{name}</h1>
                        <p class="card-text">Price: {price}</p>
                        <p class="card-text">{quantity}</p>
                    </div>
                    
                        <button className="btn btn-primary btn-block">BOOK NOW!</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductList;