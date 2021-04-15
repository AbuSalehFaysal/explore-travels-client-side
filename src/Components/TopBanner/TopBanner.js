import React from 'react';

const TopBanner = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="display-1 mt-5">Explore <br/> The World</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptates architecto perspiciatis cum ut. Quia.</p>
                    <button className="btn btn-primary btn-lg">Travel Now!</button>
                    <br/>
                </div>
                <div className="col-md-6 p-3">
                    <img src="banner.jpg" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;