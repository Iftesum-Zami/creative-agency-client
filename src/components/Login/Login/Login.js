import React, { useContext } from 'react';
import logo from '../../../images/logos/logo.png';
import googleIcon from '../../../images/logos/googleIcon.png';
import './login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email: email };
      setLoggedInUser(signedInUser);
      storeAuthToken();
      history.replace(from);
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function(idToken) {
      sessionStorage.setItem('token', idToken)
    })
    .catch(function(error) {
      // Handle error
    });
  }

  return (
    <div className="App">
      <img style={{ width: '150px', margin: '20px' }} src={logo} alt="" />
      <div className="d-flex justify-content-center">
        <div className="borderStyle">
          <h4 style={{ margin: '30px' }}>Login with</h4>

          {/* <Link to="/orders"> */}
            <button className="googleBtn" onClick={handleGoogleSignIn}>
              <img className='iconImg' src={googleIcon} alt="" />
              <span>Continue with Google</span>
            </button>
          {/* </Link> */}

          <br />
          <small>Don't have an account? <span><Link to="/login">Create an account</Link></span></small>
        </div>
      </div>
    </div>
  );
};

export default Login;