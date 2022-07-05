import React from "react";
import Header from "../dashboard/Header";
import Footer from "../Footer";
import Sidebar from "../dashboard/Sidebar";

const ViewOrder = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="row">
                    <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                    <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col s10 m6 l6">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Order View</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="#">Home</a>
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
                            <div className="section users-view">
                                <div className="card-panel">
                                    <div className="row">
                                        <div className="col s12 m7">
                                            <div className="display-flex media">
                                                <div className="media-body">
                                                    <h6 className="media-heading">
                                                        <span className="grey-text">Order Number : </span>
                                                        <span className="grey-text">#1005</span>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center">
                                            <div>
                                                <span className="btn-small btn-light-indigo">Pending</span>
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
                                                                    <tr>
                                                                        <td width="100px">
                                                                            <img src="images/avatar-15.png" width="80px" height="80px" />
                                                                        </td>
                                                                        <td>
                                                                            <p>Paisley Printed Ruffle Dress</p>
                                                                            <p>XXL / MULTICOLOR / Female</p>
                                                                        </td>
                                                                        <td><span>₹1,299.00 × 1</span></td>
                                                                        <td><span>₹1,299.00</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100px">
                                                                            <img src="images/avatar-15.png" width="80px" height="80px" />
                                                                        </td>
                                                                        <td>
                                                                            <p>Paisley Printed Ruffle Dress</p>
                                                                            <p>XXL / MULTICOLOR / Female</p>
                                                                        </td>
                                                                        <td><span>₹1,299.00 × 1</span></td>
                                                                        <td><span>₹1,299.00</span></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="100px">
                                                                            <img src="images/avatar-15.png" width="80px" height="80px" />
                                                                        </td>
                                                                        <td>
                                                                            <p>Paisley Printed Ruffle Dress</p>
                                                                            <p>XXL / MULTICOLOR / Female</p>
                                                                        </td>
                                                                        <td><span>₹1,299.00 × 1</span></td>
                                                                        <td><span>₹1,299.00</span></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td colSpan="4" className="right-align">
                                                                            <button className="btn waves-effect waves-light gradient-45deg-green-teal">Fulfill items</button>
                                                                        </td>
                                                                    </tr>
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
                                                                        <td>OCTICS</td>
                                                                        <td>-₹500.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Subtotal</td>
                                                                        <td>3 items</td>
                                                                        <td>₹3,047.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Shipping</td>
                                                                        <td>Standard Shipping (Cash on Delivery) (0.0 kg)</td>
                                                                        <td>₹99.00</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Tax</td>
                                                                        <td>IGST 12% (Included)</td>
                                                                        <td>₹326.46</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Total</td>
                                                                        <td></td>
                                                                        <td>₹3,146.00</td>
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
                                                                    <td className="users-view-name">Dean Stanley</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">E-mail:</td>
                                                                    <td className="users-view-email">deanstanley@gmail.com</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">Mobile:</td>
                                                                    <td>1234567890</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="indigo-text">Address:</td>
                                                                    <td>1st Floor, Nityanandeshwar Complex, Dharmajiwan Chowk, beside Manibag Farm, Katargam, Surat, Gujarat 395004</td>
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