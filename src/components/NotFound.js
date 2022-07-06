import React from 'react';
import '../css/pages/page-404.css';

const NotFound = () => {
    return (
        <>
            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div className="section section-404 p-0 m-0 height-100vh">
                            <div className="row">
                                <div className="col s12 center-align white">
                                    <img src='images/gallery/error-2.png' className="bg-image-404" alt="" />
                                    <h1 className="error-code m-0">404</h1>
                                    <h6 className="mb-2">BAD REQUEST</h6>
                                    <a className="btn waves-effect waves-light gradient-45deg-deep-purple-blue gradient-shadow mb-4" href="/">Back
                                        TO Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-overlay"></div>
                </div>
            </div>
        </>
    )
}
export default NotFound;