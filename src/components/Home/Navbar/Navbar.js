import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        // <div>
            <nav class="navbar navbar-expand-lg navbar-light mb-3">
                <Link class="navbar-brand" to="/home">
                    <img style={{width: '130px'}} className="img-fluid" src={logo} alt=""/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <Link class="nav-item nav-link active ml-3" to="/home">Home <span class="sr-only">(current)</span></Link>
                        <Link class="nav-item nav-link ml-3" to="/">Our Portfolio</Link>
                        <Link class="nav-item nav-link ml-3" to="/">Our team</Link>
                        <Link class="nav-item nav-link ml-3" to="/">Contact us</Link>
                        <Link class="nav-item nav-link ml-3" to="/login">
                            <button type="button" class="btn btn-dark">Login</button>
                        </Link>
                    </div>
                </div>
            </nav>
        // </div>
    );
};

export default Navbar;