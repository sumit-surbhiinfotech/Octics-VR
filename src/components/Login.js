import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { adminLogin } from '../action';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        window.history.forward();
    }, [])
    // const navigate = use
    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (!email) {
            err.email = "Please Enter Email.";
            validate = false;
        }
        if (!password) {
            err.password = "Please Enter Password.";
            validate = false;
        }
        setError(err);
        if (validate) {
            let body = {
                email: email,
                password: password
            }
            adminLogin(body).then((res) => {
                if (res.status) {
                    toast('Login Successfully.');
                    navigate('/dashboard');
                    localStorage.setItem('admin', res.data.data._id);
                }
            }).catch((err) => {
                toast('Email or Password is wrong.');
                console.log(err);
            })
        }
    }
    return (
        <>
            <div className='login-bg'>
                <ToastContainer />
                <div className="row">
                    <div className="col s12">
                        <div className="container ">
                            <div id="login-page" className="row">
                                <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <h5 className="ml-4">Sign in</h5>
                                            </div>
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">person_outline</i>
                                                <input id="username" type="text" onChange={(e) => { setEmail(e.target.value); }} value={email} />
                                                <label htmlFor="username" className="center-align">Username</label>
                                            </div>
                                            {error && error?.email && <div className='error'>{error.email}</div>}
                                        </div>
                                        <div className="row margin">
                                            <div className="input-field col s12">
                                                <i className="material-icons prefix pt-2">lock_outline</i>
                                                <input id="password" type="password" onChange={(e) => { setPassword(e.target.value); }} value={password} />
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            {error && error?.password && <div className='error'>{error.password}</div>}
                                        </div>
                                        {/* <div className="row">
                                            <div className="col s12 m12 l12 ml-2 mt-1">
                                                <p>
                                                    <label>
                                                        <input type="checkbox" />
                                                        <span>Remember Me</span>
                                                    </label>
                                                </p>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <button className="btn ripple2 border-round gradient-45deg-purple-deep-orange col s12" onClick={(e) => { handleSubmit(); }} type="button">
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12 m12 l12">
                                                {/* <p className="margin center-align medium-small"><a href="user-forgot-password.html">Forgot password ?</a></p> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="content-overlay"></div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;