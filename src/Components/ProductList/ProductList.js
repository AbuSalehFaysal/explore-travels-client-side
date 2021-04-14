import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

const ProductList = (props) => {
    const { _id, name, price, quantity, imgURL } = props.product;
    const history = useHistory()
    const handleCheckout = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className="text-center">
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "#FCF6F5FF" }} xs={12} md={6}><Image width="200" height="200" src={imgURL} fluid /></Col>
                    <Col style={{ backgroundColor: "#89ABE3FF" }} xs={12} md={6}>
                        <br/>
                        <br/>
                        <h6>Product Name: {name}</h6>
                        <h6>Product Price: {price}</h6>
                        <h6>Product Quantity/Weight: {quantity}</h6>
                        <br/>
                        <Button onClick={() => handleCheckout(_id)} variant="primary" size="lg">BUY NOW!</Button>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <br />
            </Container>
            {/* <h1>Product Name: {name}</h1>
            
            <img src={imgURL} alt="" />
            
            <hr /> */}
        </div>
    );
};

export default ProductList;