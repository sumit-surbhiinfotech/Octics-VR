import React from 'react';
import '../css/pages/page-404.css';

const NotFound = () => {
    return (
        <>
            <div class="row">
            <div class="col s12">
                <div class="container">
                    <div class="section section-404 p-0 m-0 height-100vh">
                        <div class="row">
                        <div class="col s12 center-align white">
                            <img src='images/gallery/error-2.png' class="bg-image-404" alt="" />
                            <h1 class="error-code m-0">404</h1>
                            <h6 class="mb-2">BAD REQUEST</h6>
                            <a class="btn waves-effect waves-light gradient-45deg-deep-purple-blue gradient-shadow mb-4" href="/">Back
                            TO Home</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="content-overlay"></div>
            </div>
            </div>
        </>
    )
}
export default NotFound;