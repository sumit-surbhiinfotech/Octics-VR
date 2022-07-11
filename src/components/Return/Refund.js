import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";

const Refund = () => {

    let [count, setCount] = useState(0);

    function incrementCount(e) {
        e.preventDefault();
        count = count + 1;
        setCount(count);
    }
    function decrementCount(e) {
        e.preventDefault();
        count = count - 1;
        setCount(count);
    }

    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="refund animate fadeUp">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col s12  l6 xl1"></div>
                                <div className="col s12  l6 xl6 mt-2">
                                    <h3>Refund</h3>
                                </div>
                            </div>
                            <div className="col s12  l6 xl1"></div>
                            <div className="col s12  xl6">
                                <div className="add-left-product">
                                    <h6>Unfulfilled</h6>
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
                                                        <p>₹ 350.00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fill-item">
                                                        <div className="get-button">
                                                            <div className="limit-item">
                                                                <input type="text" min={0} max={5} placeholder="0" value={count} readOnly />
                                                                <span>/ 5</span>
                                                            </div>
                                                            <div className="btn-seting">
                                                                <button onClick={decrementCount}>-</button>
                                                                <button onClick={incrementCount}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>₹ 350.00</td>
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
                                                        <p>₹ 350.00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fill-item">
                                                        <div className="get-button">
                                                            <div className="limit-item">
                                                                <input type="text" min={0} max={5} placeholder="0" value={count} readOnly />
                                                                <span>/ 1</span>
                                                            </div>
                                                            <div className="btn-seting">
                                                                <button onClick={decrementCount}>-</button>
                                                                <button onClick={incrementCount}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>₹ 350.00</td>
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
                                                        <p>₹ 350.00</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fill-item">
                                                        <div className="get-button">
                                                            <div className="limit-item">
                                                                <input type="text" min={0} max={5} placeholder="0" value={count} readOnly />
                                                                <span>/ 2</span>
                                                            </div>
                                                            <div className="btn-seting">
                                                                <button onClick={decrementCount}>-</button>
                                                                <button onClick={incrementCount}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>₹ 350.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="add-left-product mt-3 mb-3">
                                    <h6>Reason For Refund</h6>
                                    <div className="reson-refund" >
                                        <select>
                                            <option>Customer No longer wants Product.</option>
                                            <option>Customer No longer wants Product.</option>
                                            <option>Customer No longer wants Product.</option>
                                        </select>
                                    </div>
                                </div>



                            </div>
                            <div className="col s12  xl4 mb-5">
                                {/* <div className="add-left-product">

                                </div> */}
                                <div className="add-left-product mb-5">
                                    <h6>Summary</h6>
                                    <div className="customer-new-name">
                                        <table className="summary-table">
                                            <tbody>
                                                <tr>
                                                    <td className="summary-item">
                                                        Item Subtotal
                                                        <p>Item: 1</p>
                                                    </td>
                                                    <td>₹ 500.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Tax</td>
                                                    <td>₹ 125.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td>₹ 00</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Refund Total</b></td>
                                                    <td>₹ 625.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h6>Refund Amount</h6>
                                        <p>Manual</p>
                                        <div className="refund-input">
                                            <input type="text" placeholder="₹ 0.00" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="new-refund-btn">
                                        <div >
                                            <button>Refund ₹ 625.00 </button>
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

export default Refund;