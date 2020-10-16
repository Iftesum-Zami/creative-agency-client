import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://evening-taiga-61842.herokuapp.com/addAdmin', {
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
                <nav className="d-flex justify-content-between pt-3 pb-2">
                    <h5>Make Admin</h5>
                    <h6>{loggedInUser.name}</h6>
                </nav>

                <div className="p-1" style={{backgroundColor: '#F5F6FA', height: '710px', width: '100%'}}>
                    <form className="m-5 row" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{backgroundColor: 'white', borderRadius: '15px', height: '300px'}} className="col-md-12 row p-3">
                            <div className="col-md-6">
                            <h6>Email</h6>
                                <div className="form-group">
                                    <input type="email" ref={register({ required: true })} name="email" placeholder="" className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            <div className="form-group col-md-3 pt-4">
                                <button type="submit" className="btn btn-success">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;