import React from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import "../../css/pages/data-tables.css"
import { NavLink } from "react-router-dom";
import('../../js/scripts/data-tables.js')
const CustomerListing = () => {
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
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Customers</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active">customer List </li>
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
                                                                    <th>Customer Name</th>
                                                                    <th>Location</th>
                                                                    <th>Orders</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Sumit Kachariya</td>
                                                                    <td>Surat</td>
                                                                    <td>2</td>
                                                                    <td className="center-align">
                                                                        <NavLink to="/customer-view">
                                                                            <button className="waves-effect waves-light btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">View Customer</button>
                                                                        </NavLink>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Sumit Kachariya</td>
                                                                    <td>Surat</td>
                                                                    <td>2</td>
                                                                    <td className="center-align">
                                                                        <NavLink to="/customer-view">
                                                                            <button className="waves-effect waves-light btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">View Customer</button>
                                                                        </NavLink>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr>
                                                                    <th>Customer Name</th>
                                                                    <th>Location</th>
                                                                    <th>Orders</th>
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

export default CustomerListing;