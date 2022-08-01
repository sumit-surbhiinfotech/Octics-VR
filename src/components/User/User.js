import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const User = () => {
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [imgfile, setImgFile] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (fname === "") {
            err.fname = "Please Enter First Name";
            validate = false;
        }
        if (lname === "") {
            err.lname = "Please Enter Last Name";
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
            err.phone = "Please Enter Phone no.";
            validate = false;
        }

        if (password === "") {
            err.password = "Please Enter Password.";
            validate = false;
        }
        if (imgfile === "") {
            err.imgfile = 'Please select image.';
            validate = false;
        } else if (!(/\.(jpg|jpeg|png|gif)$/.test(imgfile))) {
            err.imgfile = 'Please select valid image.';
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
                    <div className="user-info animate fadeUp">
                        <div className="row">
                            <h4 className="titale-h4 mb-2"> User Information</h4>
                            <div className="col s12  l12 xl3">

                            </div>
                            <div className="col s12 l12 xl6">
                                <div className="add-left-product">
                                    <div className="edit-profile-info mt-4">
                                        <div className="uplaod-your-images">
                                            <div className="mb-3">
                                                <label>First Name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="fname" value={fname} onChange={(e) => { setFName(e.target.value); }} />
                                                    <p>{error?.fname}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Last Name</label>
                                                <div className="mt-1">
                                                    <input type="text" name="lname" value={lname} onChange={(e) => { setLName(e.target.value); }} />
                                                    <p>{error?.lname}</p>
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
                                                <label>Phone Number</label>
                                                <div className="mt-1">
                                                    <input type="text" name="phone" value={phone} onChange={(e) => { setPhone(e.target.value); }} />
                                                    <p>{error?.phone}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3 for-textarea">
                                                <label>Password</label>
                                                <div className="mt-1">
                                                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
                                                    <p>{error?.password}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3 for-textarea">
                                                <label>Upload Image</label>
                                                <div className="mt-1">
                                                    <input type="file" name="imgfile" value={imgfile} onChange={(e) => { setImgFile(e.target.value); }} />
                                                    <p>{error?.imgfile}</p>
                                                </div>
                                            </div>
                                            <div className="submi-info ">
                                                <button className="mt-3 ripple3 btn gradient-45deg-green-teal" onClick={() => { handleSubmit(); }}>Submit</button>
                                                {console.log("sdhsbdhs", handleSubmit)}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="col s12  l12 xl3">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default User;