import React from 'react';
import { Link } from 'react-router-dom';
import './serviceCardStyle.css';

const SingleServiceCard = ({service}) => {

    return (
        <div className="col-md-4 mb-5 pt-4 mainContainer">
            <div className="theCard">
                <div className="theFront">
                    <div className="d-flex justify-content-center">
                        <img src={service.img} className="img-fluid mb-4" style={{width: '100px'}} alt=""/>
                    </div>
                    <h5 className="text-center">{service.title}</h5>
                    <p className="text-center">{service.description}</p>
                </div>

                <div className="theBack d-flex justify-content-center align-items-center">
                    <Link to="/order">
                        <button type="button" class="btn btn-primary">ORDER</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;