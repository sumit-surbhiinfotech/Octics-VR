import React from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const ChangedProfileInformation = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="container">
                    <div className="change-information mt-5">
                        <div className="row">
                            <h4 className="titale-h4 mb-2">Change Profile Information</h4>
                            <div className="col s12 m6 l6 xl3">

                            </div>
                            <div className="col s12 m6 l6 xl6">
                                <div className="add-left-product">
                                    <div className="edit-profile-info mt-4">
                                        <div className="uplaod-your-images">
                                            <div className="mb-3">
                                                <label className="">Upload Profile Image</label>
                                                <div className="mt-1">
                                                    <input type="file" />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Full Name</label>
                                                <div className="mt-1">
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Email</label>
                                                <div className="mt-1">
                                                    <input type="email" />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Mobile</label>
                                                <div className="mt-1">
                                                    <input type="text" />
                                                </div>
                                            </div>
                                            <div className="mb-3 for-textarea">
                                                <label>Address</label>
                                                <div className="mt-1">
                                                    <textarea type="text" ></textarea>
                                                </div>
                                            </div>
                                            <div className="submi-info">
                                                <button className="mt-3 ripple3 btn gradient-45deg-green-teal">Submit</button>
                                            </div>
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

export default ChangedProfileInformation;