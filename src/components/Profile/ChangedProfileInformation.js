import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const ChangedProfileInformation = () => {
    const [fullname, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [uplodimg, setUplodImg] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (fullname === "") {
            err.fullname = "Please Enter Full Name";
            validate = false;
        }
        if (address === "") {
            err.address = "Please Enter Last Name";
            validate = false;
        }
        if (email === "") {
            err.email = "Please Enter Email";
            validate = false;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            err.email = "Please Enter Valid Email";
            validate = false;
        }
        if (phone === "") {
            err.phone = "Please Enter Mobile no.";
            validate = false;
        }

        if (password === "") {
            err.password = "Please Enter Password.";
            validate = false;
        }
        if (uplodimg === "") {
            err.uplodimg = 'Please select image.';
            validate = false;
        } else if (!(/\.(jpg|jpeg|png|gif)$/.test(uplodimg))) {
            err.uplodimg = 'Please select valid image.';
            validate = false;
        }
        setError(err);
        if (validate) {

        }
    }
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="container">
                    <div className="change-information mt-5 animate fadeUp">
                        <div className="row">
                            <h4 className="titale-h4 mb-2">Change Profile Information</h4>
                            <div className="col s12  l12 xl3">

                            </div>
                            <div className="col s12  l12 xl6 mb-5">
                                <div className="add-left-product">
                                    <div className="edit-profile-info mt-4">
                                        <div className="uplaod-your-images">
                                            <div className="mb-3">
                                                <label className="">Upload Profile Image</label>
                                                <div className="mt-1">
                                                    <input type="file" name="uplodimg" value={uplodimg} onChange={(e) => { setUplodImg(e.target.value); }} />
                                                    <p>{error?.uplodimg}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Full Name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="fullname" value={fullname} onChange={(e) => { setFullName(e.target.value); }} />
                                                    <p>{error?.fullname}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Email</label>
                                                <div className="mt-1">
                                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                                                    <p>{error?.email}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Mobile</label>
                                                <div className="mt-1">
                                                    <input type="text" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value); }} />
                                                    <p>{error?.phone}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3 for-textarea">
                                                <label>Address</label>
                                                <div className="mt-1">
                                                    <textarea type="text" name="address" value={address} onChange={(e) => { setAddress(e.target.value); }}></textarea>
                                                    <p>{error?.address}</p>
                                                </div>
                                            </div>
                                            <div className="submi-info">
                                                <button className="mt-3 ripple3 btn gradient-45deg-green-teal" onClick={() => { handleSubmit(); }}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12  l12 xl3">

                            </div>
                        </div>
                        <div className="mb-5">
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ChangedProfileInformation;