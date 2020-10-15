import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addOrder', {
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
                    <h5>Orders</h5>
                    <h6>{loggedInUser.name}</h6>
                </nav>

                <div style={{backgroundColor: 'lightblue'}}>
                    <form className="p-5 col-md-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                            {errors.name && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="email" placeholder="Your email address" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="course" placeholder="Course Name" className="form-control" />
                            {errors.course && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" ref={register({ required: true })} name="details" placeholder="Project Details" className="form-control" />
                            {errors.details && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <input type="number" ref={register({ required: true })} name="price" placeholder="Price" className="form-control" />
                                {errors.price && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark">Send</button>
                        </div>

                    </form>

                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;