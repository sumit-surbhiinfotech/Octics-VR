import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import Footer from "../Footer";
import Sidebar from "../dashboard/Sidebar";
import { NavLink } from "react-router-dom";
import { changeOrderStatus, getSpecificOrderData } from "../../action";

const ViewOrder = () => {
    const [id, setId] = useState((window.location.href).split('=')[1]);
    const [data, setData] = useState({});
    const [userData, setUserData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [orderData, setOrderData] = useState({});
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getSpecificOrderData(id).then((res) => {
            if (res.data) {
                setData(res.data.data.data)
                setUserData(res.data.data.data.user_data);
                setProductData(res.data.data.data.product_data);
                setOrderData(res.data.data.data.order_data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const changeFullOrderStatus = () => {
        let body = {
            order_id: orderData?._id,
            status: orderData?.fullfillment_status === "pending" ? "completed" : 'pending'
        }
        changeOrderStatus(body).then((res) => {
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
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Order View</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink>
                                        </li>
                                        <li className="breadcrumb-item active">Order View
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
                                                        <span className="grey-text">Order Number : </span>
                                                        <span className="grey-text">{orderData?._id}</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center">
                                            <div>
                                                <span className="btn-small btn-light-indigo" onClick={changeFullOrderStatus}>{orderData?.fullfillment_status}</span>
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
                                                                <tbody>
                                                                    {
                                                                        productData && productData.length > 0 && productData.map((item, index) => (
                                                                            <tr key={index}>
                                                                                <td width="100px">
                                                                                    <img src={item.images[0].original} width="80px" height="80px" />
                                                                                </td>
                                                                                <td>
                                                                                    <p>{item.title}</p>
                                                                                    <p>{item.options && `size - ` + item.options[0]}</p>
                                                                                </td>
                                                                                <td><span>₹{item.price}</span></td>
                                                                                <td><span>₹{item.price}</span></td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    <div className="card">
                                                        <div className="card-content">
                                                            <table className="striped">
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Discount</td>
                                                                        <td></td>
                                                                        <td>-₹{orderData.discount ? orderData.discount : 0}</td>
                                                                    </tr>
                                                                    {/* <tr>
                                                                        <td>Subtotal</td>
                                                                        <td>3 items</td>
                                                                        <td>₹3,047.00</td>
                                                                    </tr> */}
                                                                    {/* <tr>
                                                                        <td>Shipping</td>
                                                                        <td>Standard Shipping (Cash on Delivery) (0.0 kg)</td>
                                                                        <td>₹99.00</td>
                                                                    </tr> */}
                                                                    <tr>
                                                                        <td>Tax</td>
                                                                        <td>IGST 12% (Included)</td>
                                                                        <td>{orderData?.total_tax}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Total</td>
                                                                        <td></td>
                                                                        <td>₹{orderData?.total_price}</td>
                                                                    </tr>
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
                                                                    <td className="users-view-name">{userData && userData[0] && userData[0].first_name + ' ' + userData[0].last_name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">E-mail:</td>
                                                                    <td className="users-view-email">{userData && userData[0] && userData[0].email}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">Mobile:</td>
                                                                    <td>{userData && userData[0] && userData[0].phone}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">Address:</td>
                                                                    <td>{orderData?.shipping_address}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
            <Footer />
        </>
    )
}

export default ViewOrder;