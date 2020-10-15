import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage} from '@fortawesome/free-solid-svg-icons';
import { faHandHolding} from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="pl-3 pt-3">
            <Link to="/"><img style={{ width: '150px'}} src={logo} alt=""/></Link>
            <div className="mt-5 pl-4">
                <Link className="nav-item nav-link sideLink" to="/order">
                    <FontAwesomeIcon icon={faBabyCarriage}></FontAwesomeIcon><span className="pl-2">Order</span>
                </Link>
                <Link className="nav-item nav-link sideLink" to="/service">
                    <FontAwesomeIcon icon={faHandHolding}></FontAwesomeIcon><span className="pl-2">Service List</span>
                </Link>
                <Link className="nav-item nav-link sideLink" to="/review">
                    <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon><span className="pl-2">Review</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;