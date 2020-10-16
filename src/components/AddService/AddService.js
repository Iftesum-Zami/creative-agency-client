import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [service, setService] = useState();
    const [file, setFile] = useState();

    const { register, handleSubmit, errors } = useForm();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const onSubmit = data => {
        console.log(data);

        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch('https://evening-taiga-61842.herokuapp.com/61842.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })

        fetch('https://evening-taiga-61842.herokuapp.com/61842.herokuapp.com/adminService', {
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
                    <h5>Add Service</h5>
                    <h6>{loggedInUser.name}</h6>
                </nav>

                <div className="p-1" style={{backgroundColor: '#F5F6FA', height: '710px', width: '100%'}}>
                    <form className="m-5 row" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{backgroundColor: 'white', borderRadius: '10px'}} className="col-md-12 row p-3">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Service Title</h6>
                                    <input type="text" ref={register({ required: true })} name="title" placeholder="Enter Title" className="form-control" />
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <h6>Description</h6>
                                    <input type="text" ref={register({ required: true })} name="description" placeholder="Enter Description" className="form-control" />
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <h6>Upload</h6>
                                    <input type="file" onChange={handleFileChange} ref={register({ required: true })} name="img" placeholder="upload" className="form-control" />
                                    {errors.img && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-dark">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;