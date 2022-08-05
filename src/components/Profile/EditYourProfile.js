import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { currentUserDetails } from "../../action";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const EditYourProfile = () => {
    const [id, setId] = useState(localStorage.getItem('admin'));
    const [data, setData] = useState({});
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        currentUserDetails(id).then((res) => {
            if (res.status) {
                setData(res.data.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="container">
                    <div className="view-your-profile mt-5 animate fadeUp">
                        <div className="row">
                            <div className="col s12  xl3">

                            </div>
                            <div className="col s12  xl6">
                                <div className="add-left-product">
                                    <div className="img-profile">
                                        <div className="profile-img">
                                            {
                                                data?.profile_img !== '' ?
                                                    <img src={data?.profile_img} /> :
                                                    <img src="images/avatar-15.png" />
                                            }
                                        </div>
                                        <div className="profile-details">
                                            <h5>{data?.first_name}</h5>
                                            <p>{data?.address}</p>
                                            <NavLink to="/changed-profile-information">
                                                <button className="mt-3 ripple3 btn gradient-45deg-green-teal"> Edit Profile</button>
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>
                                <div className="add-left-product mt-3">
                                    <div className="user-info">
                                        <div className="">
                                            <label>Full Name</label>
                                            <h6>{data?.first_name + ' ' + data?.last_name}</h6>
                                        </div>
                                        <div className="">
                                            <label>Email</label>
                                            <h6>{data?.email}</h6>
                                        </div>
                                        <div className="">
                                            <label>Mobile</label>
                                            <h6>{data?.phone}</h6>
                                        </div>
                                        <div className=" mb-10">
                                            <label>Address</label>
                                            <h6>{data?.address}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 xl3">

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