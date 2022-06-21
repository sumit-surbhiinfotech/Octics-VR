import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/pages/data-tables.css"
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import('../../js/scripts/data-tables.js')

const AllOrder = () => {
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
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>DataTable</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active">Order List </li>
                                    </ol>
                                </div>
                                <div className="col s2 m6 l6">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="container">
                            <div className="section section-data-tables">

                                <div className="row">
                                    <div className="col s12">
                                        <div className="card">
                                            <div className="card-content">

                                                <div className="row">
                                                    <div className="col s12">
                                                        <table id="page-length-option" className="display">
                                                            <thead>
                                                                <tr>
                                                                    <th>Order Number</th>
                                                                    <th>Customer Name</th>
                                                                    <th>Order Date</th>
                                                                    <th>Order Status</th>
                                                                    <th>Fanacial Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1001</td>
                                                                    <td>Sumit Kachariya</td>
                                                                    <td>13-06-2022</td>
                                                                    <td>Pending</td>
                                                                    <td>Paid</td>
                                                                    <td className="center-align">
                                                                        <NavLink to="/view-orders">
                                                                            <button className="waves-effect waves-light btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">View Order</button>
                                                                        </NavLink>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>1002</td>
                                                                    <td>Sumit Kachariya</td>
                                                                    <td>13-06-2022</td>
                                                                    <td>Pending</td>
                                                                    <td>Pending</td>
                                                                    <td className="center-align">
                                                                        <NavLink to="/view-orders">
                                                                            <button className="waves-effect waves-light btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">View Order</button>
                                                                        </NavLink>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th>Order Number</th>
                                                                    <th>Customer Name</th>
                                                                    <th>Order Date</th>
                                                                    <th>Order Status</th>
                                                                    <th>Fanacial Status</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                    </div>
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
            <Footer />
        </>
    )
}

export default AllOrder;