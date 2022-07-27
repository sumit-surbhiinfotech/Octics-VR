import React, { useState, useEffect } from "react";
import { currentUserDetails, updateAdminProfile, uploadImageOfAdmin } from "../../action";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
const ChangedProfileInformation = () => {
    const [id, setId] = useState(localStorage.getItem('admin'));
    const [data, setData] = useState({});
    const [profileImg, setProfileImg] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        currentUserDetails(id).then((res) => {
            if (res.status) {
                setData(res.data.data);
                let temp = res.data.data;
                setFirstName(temp.first_name);
                setLastName(temp.last_name);
                setEmail(temp.email);
                setPhone(temp.phone);
                setAddress(temp.address);
                setProfileImg(temp.profile_img);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (!firstName) {
            err.firstName = "Please Enter First Name";
            validate = false
        }
        if (!lastName) {
            err.lastName = "Please Enter Last Name";
            validate = false
        }
        if (!email) {
            err.email = "Please Enter Email";
            validate = false
        }
        if (!phone) {
            err.phone = "Please Enter Phone No.";
            validate = false
        }
        if (!address) {
            err.address = "Please Enter Address";
            validate = false
        }
        setError(err);
        if (validate) {
            let body = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                phone: phone,
                address: address
            }
            updateAdminProfile(body).then((res) => {
                if (res.status) {
                    navigate('/edit-your-profile');
                }
            }).catch((err) => {
                console.log(err);
            })
        }



    }

    const handleUploadFile = (e) => {
        if (e.target.files[0]) {
            let body = new FormData();
            body.append("file", e.target.files[0]);
            body.append("email", email);
            uploadImageOfAdmin(body).then((res) => {
                if (res.data.statusCode == 200) {
                    setProfileImg(res.data.data.profile_img);
                }
            }).catch((err) => {
                console.log(err);
            })
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
                                                    <input type="file" onChange={(e) => { handleUploadFile(e); }} />
                                                </div>
                                                <div className="" >
                                                    <img src={profileImg} style={{ "width": "50px", "height": "50px" }} />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>First Name</label>
                                                <div className="mt-1">
                                                    <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value); }} />
                                                    {error && error?.firstName && <div>{error?.firstName}</div>}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Last Name</label>
                                                <div className="mt-1">
                                                    <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
                                                    {error && error?.lastName && <div>{error?.lastName}</div>}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Email</label>
                                                <div className="mt-1">
                                                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
                                                    {error && error?.email && <div>{error?.email}</div>}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label>Mobile</label>
                                                <div className="mt-1">
                                                    <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value); }} />
                                                    {error && error?.phone && <div>{error?.phone}</div>}
                                                </div>
                                            </div>
                                            <div className="mb-3 for-textarea">
                                                <label>Address</label>
                                                <div className="mt-1">
                                                    <textarea type="text" value={address} onChange={(e) => { setAddress(e.target.value); }}></textarea>
                                                    {error && error?.address && <div>{error?.address}</div>}
                                                </div>
                                            </div>
                                            <div className="submi-info">
                                                <button className="mt-3 ripple3 btn gradient-45deg-green-teal" type="button" onClick={handleSubmit}>Submit</button>
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