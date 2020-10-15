import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <nav className="d-flex justify-content-between">
                    <h5>Review</h5>
                    <h6>{loggedInUser.name}</h6>
                </nav>

                <div style={{backgroundColor: 'lightblue'}}>
                    <form className="p-5 col-md-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="designation" placeholder="Company’s name, Designation" className="form-control" />
                            {errors.designation && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="description" placeholder="Description" className="form-control" />
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </div>

                    </form>

                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;