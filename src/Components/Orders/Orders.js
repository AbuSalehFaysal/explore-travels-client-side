import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch("http://localhost:5000/orders?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div className="conatiner text-center">
            <h1 className="display-3">You have {orders.length} Booking</h1>
            {
                orders.map(order => <li>{order.name} -- {order.price} -- {order.quantity} -- {(new Date(order.orderDate).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Orders;