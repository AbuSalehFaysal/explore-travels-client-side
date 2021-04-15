import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        // console.log(data);
        const newReview = {...loggedInUser, ...data}
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                closeModal();
                alert('Review Added successfully!');
            }
        })
    };

    // const onSubmit = data => console.log(data);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="container text-center mt-5">
            <button className="btn btn-primary btn-lg btn-block" onClick={openModal}>Click Here to Give Us a Review</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >


                
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-md-12">

                            <select className="form-select" name="star" ref={register({ required: true })} >
                                <option value="5 Star">5 Star</option>
                                <option value="4 Star">4 Star</option>
                                <option value="3 Star">3 Star</option>
                                <option value="2 Star">2 Star</option>
                                <option value="1 Star">1 Star</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <br/>
                        <div className="col-md-12">
                            <input ref={register({ required: true })} className="form-control" name="comment" placeholder="Your Comment" type="text" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Review;