import React, { useContext } from 'react';
import Footer from '../../Shared/Footer/Footer';


import './Login.css'

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../../App'
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const newLoggedInUser = { name: displayName, email, imageURL: photoURL };
                setLoggedInUser(newLoggedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

                alert(errorCode, errorMessage);
            });
    }

    return (
        <div>
            <Navbar/>
            <main className='d-flex justify-content-center align-items-center bg-1 min-h-92'>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className=" border border-dark rounded p-5">
                        <form className='login-form' >
                            <h4 className="login-title">Login</h4>
                            < input className='input' name="email" placeholder="Email" disabled/>
                            < input className='input' type='password' name="password"placeholder="Passowrd" disabled />
                            <input className='submit-button' type="submit" value="Login" disabled />
                            <p className='text-center text-dark mt-2'><small>Don't have an account?  <span onClick={handleGoogleSignIn} className='create-acc-link disabled'>Create a new one</span></small></p>
                        </form>

                        <div className='d-flex pb-3'>
                            <hr className='container-fluid me-3' />or<hr className='container-fluid ms-3' />
                        </div>
                        <div className="d-flex justify-content-center">
                            <div>
                                <div className="d-flex justify-content-center">
                                    <button onClick={handleGoogleSignIn} className="btn login-with-google my-2"><FontAwesomeIcon icon={faGoogle} className='me-3' />Continue with google</button>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="btn login-with-fb disabled"><FontAwesomeIcon icon={faFacebookF} className='me-3' />Continue with facebook</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Login;