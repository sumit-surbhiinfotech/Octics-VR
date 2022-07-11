import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const ReturnOrderView = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="product-fulfill-section animate fadeUp">
                    <div className="container">
                        <div className="row">
                            <div className="col s12  l6 xl1"></div>
                            <div className="col s12 m6 l6 xl6 mt-5">
                                <div className="add-left-product">
                                    <h6>Return</h6>
                                    <p>Order tracking <span>#0000134</span></p>
                                    <table id="page-length-option" className="display">
                                        <tbody>

                                            <tr>
                                                <td>
                                                    <div>
                                                        <img src="images/avatar-15.png" width="50px" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-return-section">
                                                        <p>Product Name</p>
                                                    </div>
                                                </td>
                                                <td>$ 44.50 <span>x 1</span></td>
                                                <td>$ 44.50</td>
                                            </tr>
                                            {/* <p>Order tracking <span>#0000134</span></p> */}
                                            <tr>
                                                <td>
                                                    <div>
                                                        <img src="images/avatar-15.png" width="50px" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-return-section">
                                                        <p>Product Name</p>
                                                    </div>
                                                </td>
                                                <td>$ 44.50 <span>x 1</span></td>
                                                <td>$ 44.50</td>
                                            </tr>
                                            {/* <p>Order tracking <span>#0000134</span></p> */}
                                            <tr>
                                                <td>
                                                    <div>
                                                        <img src="images/avatar-15.png" width="50px" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-return-section">
                                                        <p>Product Name</p>
                                                    </div>
                                                </td>
                                                <td>$ 44.50 <span>x 1</span></td>
                                                <td>$ 44.50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="return-btn mt-4">
                                        <NavLink to="/refund">
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">
                                                Refund
                                            </button>
                                        </NavLink>

                                    </div>
                                </div>

                                {/* <div className="add-left-product mt-4 mb-5">
                                    <table id="page-length-option" className="display">
                                        <tbody>
                                            <p>Order tracking <span>#0000134</span></p>
                                            <tr>
                                                <td>
                                                    <div>
                                                        <img src="images/avatar-15.png" width="50px" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="product-return-section">
                                                        <p>Product Name</p>
                                                    </div>
                                                </td>
                                                <td>$ 44.50 <span>x 1</span></td>
                                                <td>$ 44.50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="return-btn mt-4">
                                        <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">
                                            Track
                                        </button>
                                    </div>
                                </div> */}

                            </div>
                            <div className="col s12 m6 l6 xl4 mt-5">
                                {/* <div className="add-left-product">

                                </div> */}
                                <div className="add-left-product">
                                    <h6>Customer</h6>
                                    <div className="customer-new-name">
                                        <p>John Doe</p>
                                        <p>2 Order</p>
                                    </div>
                                    <hr />
                                    <div className="customer-information">
                                        <h6>Contact Information</h6>
                                        <div className="customer-email-phone">
                                            <p>info@gmail.com</p>
                                            <p>+91 1234567890</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="shipping-address">
                                        <h6>Shipping Address</h6>
                                        <div className="add-address">
                                            <p>
                                                Surat,Gujarat,India
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="shipping-address">
                                        <h6>Billing Address</h6>
                                        <div className="billing-address">
                                            <p>
                                                Same as Shipping Address
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12  l6 xl1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ReturnOrderView;