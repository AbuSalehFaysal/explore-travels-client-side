import React, { useContext, useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';



const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const { id } = useParams();
    // console.log(id);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const {name, price, quantity} = product;

    const [selectedDate, setSelectedDate] = React.useState({
        orderDate: new Date()
    });

    const handleOrderDate = (date) => {
        const newDates = {...selectedDate}
        newDates.orderDate = date;
        setSelectedDate(newDates);
    };

    const handleOrder = () => {
        const newOrder = {...loggedInUser, ...product, ...selectedDate}
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="container text-center">
            <h1>This is Checkout Route</h1>
            <h1>{name} -- {price} BDT -- {quantity}</h1>
            
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Order Date"
                        value={selectedDate.orderDate}
                        onChange={handleOrderDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
                <Button onClick={handleOrder} variant="contained" color="primary">Confirm Booking</Button>
            </MuiPickersUtilsProvider>
            
        </div>
    );
};

export default Checkout;