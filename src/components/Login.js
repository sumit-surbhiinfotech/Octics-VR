import React from 'react';

const Login = () => {
    return (
        <>
        <div className='login-bg'>
            <div className="row">
            <div className="col s12">
                <div className="container">
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
                                    <input id="username" type="text" />
                                    <label htmlFor="username" className="center-align">Username</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix pt-2">lock_outline</i>
                                    <input id="password" type="password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 m12 l12 ml-2 mt-1">
                                    <p>
                                    <label>
                                    <input type="checkbox" />
                                    <span>Remember Me</span>
                                    </label>
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <a href="dashboard" className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Login</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12 m12 l12">
                                    <p className="margin center-align medium-small"><a href="user-forgot-password.html">Forgot password ?</a></p>
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