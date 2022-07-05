import React from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const OrderFulfillAndTracking = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="product-fulfill-section">
                    <div className="container">
                        <div className="row">
                            <div className="col s12  l6 xl2"></div>
                            <div className="col s12 m6 l6 xl5 mt-5">
                                <div className="add-left-product">
                                    <h6>Fulfilled</h6>
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
                                            Add Tracking
                                        </button>
                                    </div>
                                </div>

                                <div className="add-left-product mt-4 mb-5">
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
                                </div>

                            </div>
                            <div className="col s12 m6 l6 xl3 mt-5">
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
                            <div className="col s12  l6 xl2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OrderFulfillAndTracking;