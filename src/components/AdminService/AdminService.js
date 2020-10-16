import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import Sidebar from '../Shared/Sidebar/Sidebar';

const AdminService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allServices, setAllServices] =  useState([])

    useEffect(() => {
        fetch('https://evening-taiga-61842.herokuapp.com/loadAllOrder')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <nav className="d-flex justify-content-between pt-3 pb-2">
                    <h5>Admin Service List</h5>
                    <h6>{loggedInUser.name}</h6>
                </nav>

                <div className="p-4" style={{backgroundColor: '#F5F6FA', height: '710px', width: '100%'}}>
                    <table style={{backgroundColor: 'white', borderRadius: '10px'}} className="table table-borderless p-4">
                        <thead style={{backgroundColor: '#F5F6FA', borderRadius: '10px'}} className="m-2">
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            allServices.map((service, index) => 
                                    
                                <tr className="mt-2 mb-2">
                                    <td>{index + 1}</td>
                                    <td>{service.name}</td>
                                    <td>{service.email}</td>
                                    <td>{service.course}</td>
                                    <td>{service.details}</td>
                                    <td>pending</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminService;