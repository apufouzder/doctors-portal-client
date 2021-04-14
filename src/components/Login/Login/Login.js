import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import loginBg from '../../../images/loginBg.png';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signInUser = { name: displayName, email, photoURL };
                setUser(signInUser)
                storeAuthToken();
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(idToken => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <h3 className="text-center mb-5">Login</h3>
                    <div className="form-group mb-3">
                        <label className="mb-1" htmlFor="">User Email</label>
                        <input type="text" name="email" className="form-control" />
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-1" htmlFor="">Password</label>
                        <input type="password" name="password" className="form-control" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="form-group">
                        <button onClick={handleGoogleSignIn} className="btn-style form-control">Login</button>
                    </div>
                </div>
                <div className="col-md-6 align-self-center d-none d-md-block">
                    <img className="img-fluid" src={loginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;