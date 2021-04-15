import React, { useEffect, useState } from 'react';
import TestimonialList from '../TestimonialList/TestimonialList';
import { Spinner } from 'react-bootstrap';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="d-flex justify-content-center text-center">
            <div className="text-center w-100 row">
                <h1 className="text-center display-1">Testimonials</h1>
                {
                    reviews.length === 0 && <Spinner className="text-center" size="lg" animation="border" role="status">

                    </Spinner>
                }
                {
                    reviews.map(review => <TestimonialList key={review._id} review={review}></TestimonialList>)
                }
            </div>
        </section>
    );
};

export default Testimonial;