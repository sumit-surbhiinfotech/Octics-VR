import React from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const EditYourProfile = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div class="container">
                    <div className="view-your-profile mt-5">
                        <div className="row">
                            <div className="col s12 m6 l6 xl3">

                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <div className="add-left-product">
                                    <div className="img-profile">
                                        <div className="profile-img">
                                            <img src="images/avatar-15.png" />
                                        </div>
                                        <div className="profile-details">
                                            <h5>Avatar</h5>
                                            <p>Surat, Gujarat.</p>
                                            <button className="mt-3 ripple3 btn gradient-45deg-green-teal"> Edit Profile</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-left-product mt-3">
                                    <div className="user-info">
                                        <div className="">
                                            <label>Full Name</label>
                                            <h6>Sumit Kachariya</h6>
                                        </div>
                                        <div className="">
                                            <label>Email</label>
                                            <h6>Sumit@gamil.com</h6>
                                        </div>
                                        <div className="">
                                            <label>Mobile</label>
                                            <h6>9876543210</h6>
                                        </div>
                                        <div className="">
                                            <label>Address</label>
                                            <h6>Suart, Gujarat.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6 xl3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditYourProfile;