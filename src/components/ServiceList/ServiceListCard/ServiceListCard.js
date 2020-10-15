import React from 'react';
import icon from '../../../images/icons/service1.png'

const ServiceListCard = ({order}) => {

    const cardStyle = {
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10px',
    }

    return (
        <div style={{padding: '30px'}} className="col-md-4">
            <div style={cardStyle} className="mb-5">
                <div className="mb-2 d-flex justify-content-between">
                    <img src={icon} className="img-fluid" style={{width: '50px'}} alt=""/>
                    <button className="btn btn-success">Join</button>
                </div>
                <h6>{order.course}</h6>
                <p className="text-secondary">{order.details}</p>
            </div>
        </div>
    );
};

export default ServiceListCard;