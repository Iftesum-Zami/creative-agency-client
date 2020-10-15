import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ServiceListCard from '../ServiceListCard/ServiceListCard';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/loadOrder?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <nav className="d-flex justify-content-between">
                    <h5>Service List</h5>
                    <h6>{loggedInUser.name}</h6>
                </nav>

                <div style={{backgroundColor: 'lightblue', height: '100%'}}>
                    <div className="row pt-5">
                        {
                            orders.map(order => <ServiceListCard order={order}></ServiceListCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;