import React from 'react';
import customer2 from '../../../images/customer2.png';

const UserFeedbackCard = ({review}) => {
    const cardStyle = {
        border: '1px solid lightgray',
        borderRadius: '5px'
    }

    return (
        <div className="col-md-4" >
            <div style={cardStyle} className="mt-5 pt-3 pl-3 pr-3">
                <div className="d-flex">
                    <div><img style={{width: '80px'}} src={customer2} className="img-fluid"alt=""/></div>
                    <div className="ml-5">
                        <h5>{review.name}</h5>
                        <h6>{review.designation}</h6>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-secondary">{review.description}</p>
                </div>
            </div>
        </div>
    );
};

export default UserFeedbackCard;