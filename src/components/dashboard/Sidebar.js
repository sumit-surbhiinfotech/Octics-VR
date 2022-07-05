import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// importScripts('materialize.js')
// import "../../js/materialize.js"

const Sidebar = () => {
    const [showWaves, setShowWaves] = useState();
    const [showSidebar, setShowSidebar] = useState();
    const [showCollapsible, setShowCollapsible] = useState(true);

    return (
        <>
            <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
                <div className="brand-sidebar">
                    <h1 className="logo-wrapper"><a className="brand-logo darken-1" href="dashboard">
                        <img className="hide-on-med-and-down" src="images/logo/logo.png" alt="logo" />
                        <img className="show-on-medium-and-down hide-on-med-and-up" src="images/logo/logo.png" alt="logo" />
                    </a><a className="navbar-toggler" href="#">
                            <i className="material-icons">radio_button_checked</i></a></h1>
                </div>
                <ul className={`sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow ${showSidebar == true ? "sidebar-show1" : "sidebar-close1"}`} id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
                    <li className="bold active">
                        <NavLink className="ripple2 active" to="/dashboard">
                            <i className="material-icons">settings_input_svideo</i><span className="menu-title" data-i18n="Dashboard">Dashboard</span>
                        </NavLink>
                    </li>


                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "product" ? "" : "product") }}><a className="collapsible-header ripple " href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" >Products</span></a>
                        <div className={`collapsible-body ${showCollapsible === "product" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/add-new-product">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Add New Product</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-listing">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Product Listing</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-view">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Product View</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/edit-product">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Product Edit</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "shopping" ? "" : "shopping") }}><a className="collapsible-header ripple" href="#!"><i className="material-icons">face</i><span className="menu-title" >Customer</span></a>
                        <div className={`collapsible-body ${showCollapsible === "shopping" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/customer-listing">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Listing Customer</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manages-customer">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Manages Customer</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/customer-view">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Customer View</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "order" ? "" : "order") }}><a className="collapsible-header ripple" href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Orders</span></a>
                        <div className={`collapsible-body ${showCollapsible === "order" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/order-listing">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Order Listing</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/view-orders">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Order View</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/order-fulfill-and-tracking">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Order Fulfill And tracking</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/pending-order-list">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Pending Order list</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "discount" ? "" : "discount") }}><a className="collapsible-header ripple" href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Discount</span></a>
                        <div className={`collapsible-body ${showCollapsible === "discount" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/list-of-addes-discount">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">List Of Added Discount</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/add-new-discount">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Add New Discount</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "returnorder" ? "" : "returnorder") }}><a className="collapsible-header ripple" href="#!"><i className="material-icons">replay</i><span className="menu-title" data-i18n="Invoice">Return</span></a>
                        <div className={`collapsible-body ${showCollapsible === "returnorder" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/list-of-return-order">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">List Of Return Order</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "3dmodal" ? "" : "3dmodal") }}><a className="collapsible-header ripple" href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">3D Modal</span></a>
                        <div className={`collapsible-body ${showCollapsible === "3dmodal" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/list-upload-3d-modal">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">List Of Upload 3D Modal</span>
                                    </NavLink>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">View Order Assigend </span></a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold" onClick={(e) => { setShowCollapsible(showCollapsible === "profile" ? "" : "profile") }}><a className="collapsible-header ripple" href="#!"><i className="material-icons">person_outline</i><span className="menu-title" data-i18n="Invoice">Profile</span></a>
                        <div className={`collapsible-body ${showCollapsible === "profile" ? "showcollapsible-open" : "showcollapsible-close"}`}>
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/edit-your-profile">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">View Your Profile</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/changed-profile-information">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Changed Profile Information</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>


                </ul>
                <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium ripple3 hide-on-large-only" onClick={() => { setShowSidebar(!showSidebar) }} href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
            </aside>
            <script src="../js/materialize.js"></script>
        </>
    )

}

export default Sidebar;