import React from 'react';

const Admin = () => {
    return (
        <div className="container text-center">
            <h1 className="display-2">Welcome to Admin Panel</h1>
            <a className="btn btn-success btn-lg btn-block" href="https://secure-hollows-18485.herokuapp.com" target="_blank">Add Product</a>
            <br/>
            <br/>
            <a className="btn btn-primary btn-lg btn-block" href="https://secure-hollows-18485.herokuapp.com" target="_blank">Manage Product</a>
            <br/>
            <br/>
            <a className="btn btn-danger btn-lg btn-block" href="https://secure-hollows-18485.herokuapp.com" target="_blank">Delete Product</a>
        </div>
    );
};

export default Admin;