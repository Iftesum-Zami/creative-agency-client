import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCommentAlt, faPlus, faUserPlus, faListUl } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { useState } from 'react';

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [admin, setAdmin] = useState([])

  useEffect(() => {
      fetch('https://evening-taiga-61842.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ email: loggedInUser.email })
      })
      .then(res => res.json())
      .then(data => setAdmin(data))
  }, [])

    return (
        <div className="pl-3 pt-3">
            <Link to="/"><img style={{ width: '150px'}} src={logo} alt=""/></Link>
            <div className="mt-5 pl-4">
            { !admin ?
                <div>
                    <Link className="nav-item nav-link sideLink" to="/order">
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><span className="pl-2">Order</span>
                    </Link>
                    <Link className="nav-item nav-link sideLink" to="/service">
                        <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon><span className="pl-2">Service List</span>
                    </Link>
                    <Link className="nav-item nav-link sideLink" to="/review">
                        <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon><span className="pl-2">Review</span>
                    </Link>
                </div>
                 
                :<div>
                    <Link className="nav-item nav-link sideLink" to="/adminService">
                        <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon><span className="pl-2">Service List</span>
                    </Link>
                    <Link className="nav-item nav-link sideLink" to="/addService">
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span className="pl-2">Add Service</span>
                    </Link>
                    <Link className="nav-item nav-link sideLink" to="/makeAdmin">
                        <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon><span className="pl-2">Make Admin</span>
                    </Link>
                </div>
                }

            </div>
        </div>
    );
};

export default Sidebar;