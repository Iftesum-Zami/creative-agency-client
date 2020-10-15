import React from 'react';
import icon1 from '../../../images/logos/slack.png';
import icon2 from '../../../images/logos/google.png';
import icon3 from '../../../images/logos/uber.png';
import icon4 from '../../../images/logos/netflix.png';
import icon5 from '../../../images/logos/airbnb.png';

const HeaderIcons = () => {
    return (
        <div className="d-flex justify-content-between align-items-center row mt-5 mb-5">
            <div className="col-md-2">
                <img src={icon1} style={{width: '150px'}} className="img-fluid mb-5" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={icon2} style={{width: '150px'}} className="img-fluid mb-4" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={icon3} style={{width: '150px'}} className="img-fluid mb-4" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={icon4} style={{width: '150px'}} className="img-fluid mb-4" alt=""/>
            </div>
            <div className="col-md-2">
                <img src={icon5} style={{width: '150px'}} className="img-fluid mb-4" alt=""/>
            </div>
        </div>
    );
};

export default HeaderIcons;