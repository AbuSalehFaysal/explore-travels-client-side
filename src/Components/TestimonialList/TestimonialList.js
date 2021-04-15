import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonialList = (props) => {
    const { _id, name, email, photoURL, star, comment } = props.review;
    return (
        <div className="col-md-4 mr-5 text-center">
            <div className="d-flex justify-content-center">
                <div class="card text-center" style={{ width: '18rem' }}>
                    <div className="row">
                        <div className="col-4">
                            <img width="80" height="80" class="rounded-circle" src={photoURL} alt="Card image cap" />
                        </div>
                        <div className="col-8 mt-3">
                            <h6>{name}</h6>
                            <p><small>{email}</small></p>
                        </div>
                    </div>

                    <div class="card-body">
                        <p class="card-text">{comment}</p>
                        {
                            star === "5 Star" &&  <div>
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                            </div> 
                        }
                        {
                            star === "4 Star" &&  <div>
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                            </div> 
                        }
                        {
                            star === "3 Star" &&  <div>
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                            </div> 
                        }
                        {
                            star === "2 Star" &&  <div>
                                <img src="star.png" alt="Card image cap" />
                                <img src="star.png" alt="Card image cap" />
                            </div> 
                        }
                        {
                            star === "1 Star" &&  <div>
                                <img src="star.png" alt="Card image cap" />
                            </div> 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialList;