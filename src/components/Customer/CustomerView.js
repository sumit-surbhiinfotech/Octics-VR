import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { changeUserStatus, getLastOrderDetailsOfCustomer } from "../../action";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import { toast } from "react-toastify";

const CustomerView = () => {
    const [id, setId] = useState(window.location.href.split('=').pop());
    const [userData, setUserData] = useState({});
    const [productData, setProductData] = useState([]);
    const [orderData, setOrderData] = useState({});
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState();
    const [deleteId, setDeleteId] = useState(null);
    useEffect(() => {
        getData();
    }, [])
    const getData = () => {
        getLastOrderDetailsOfCustomer(id).then((res) => {
            if (res.data) {

                if (res.data.data) {
                    if (res.data.data.data.order_data) {
                        setOrderData(res.data.data.data.order_data);
                    }
                    if (res.data.data.data.product_data) {
                        setProductData(res.data.data.data.product_data);
                    }
                    if (res.data.data.data.user_data) {
                        setUserData(res.data.data.data.user_data[0]);
                    }
                }
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleConfirmDelete = (id) => {
        changeUserStatus(id).then((res) => {
            if (res.data) {
                toast("Deleted Sucessfully");
                getData();
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const changeStatus = () => {
        let body = {
            id: id
        }
        changeUserStatus(body).then((res) => {
            if (res.data) {
                getData();
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
                <div className="row ">
                    <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                    <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col s10 m6 l6">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Customer View</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Customer View
                                        </li>
                                    </ol>
                                </div>
                                <div className="col s2 m6 l6">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="container">
                            <div className="section users-view animate fadeUp">
                                <div className="card-panel">
                                    <div className="row">
                                        <div className="col s12 m7">
                                            <div className="display-flex media">
                                                <div className="media-body">
                                                    <h6 className="media-heading">
                                                        <span className="grey-text">{userData?.first_name + ' ' + userData?.last_name}</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center">
                                            <div>
                                                <span className="btn-small btn-light-indigo" onClick={changeStatus}>{userData.status ? 'Block' : 'Active'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col s12 m8">
                                                <div className="order-product-listing">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <table className="responsive-table">
                                                                <caption className="text-left d-flex">Last Order List</caption>
                                                                <tbody>
                                                                    {
                                                                        productData && productData.map((item, index) => (
                                                                            <tr key={index}>
                                                                                <td width="100px">
                                                                                    <img src={item.images && item.images[0] && item.images[0].original} width="80px" height="80px" />
                                                                                </td>
                                                                                <td>
                                                                                    <p>{item.title}</p>
                                                                                    <p>{item.varient && item.varient[0].name}</p>
                                                                                    {/* <a href="#"><p>#1002</p></a> */}
                                                                                </td>
                                                                                <td><span>₹{item.varient && item.varient[0].price}</span></td>
                                                                                <td><span>₹{item.varient && item.varient[0].price}</span></td>
                                                                            </tr>

                                                                        ))
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col s12 m4">
                                                <div className="card">
                                                    <div className="card-content">
                                                        <table className="striped">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="indigo-text">Name:</td>
                                                                    <td className="users-view-name">{userData?.first_name + ' ' + userData?.last_name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">E-mail:</td>
                                                                    <td className="users-view-email">{userData?.email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">Mobile:</td>
                                                                    <td>{userData?.phone}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">Address:</td>
                                                                    <td>{orderData.shipping_address}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className=" mt-2">
                                                    <div className="ad-btn-action">
                                                        <div className="">
                                                            {/* <button className=" btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2 pt-1 " onClick={() => { setModalShow(true); setDeleteId(); }}><span className="material-icons">delete_forever</span></button> */}

                                                            <NavLink to="/customer-listing">
                                                                <button className=" btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2 ">Back To List</button>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                    <div className="row">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-overlay"></div>
                    </div>
                </div>
            </div>
            <div id="modal2" className={`modal  ${modalShow == true ? "modal-show" : "modal-show-close"}`}>
                <div className="modal-content">
                    <a className="modal-close right"><i className="material-icons" onClick={() => { setModalShow(false) }}>close</i></a>
                    <div className="row" id="product-two">

                        <div className="col m12 s12">
                            <h4>Conformation</h4>
                            <p className="text-center mb-3">Are you sure you want to delete? </p>
                            <div className="content">

                                <div className="w-50">

                                    <a href="#" onClick={() => { setModalShow(false) }}>
                                        <span className="mt-2 ripple4 gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4" onClick={() => { handleConfirmDelete(deleteId) }}>  Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CustomerView;