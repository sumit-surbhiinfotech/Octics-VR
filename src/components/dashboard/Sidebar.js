import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [showWaves, setShowWaves] = useState();
    const [showSidebar, setShowSidebar] = useState();
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
                        <NavLink className="waves-effect waves-cyan active" to="/dashboard">
                            <i className="material-icons">settings_input_svideo</i><span className="menu-title" data-i18n="Dashboard">Dashboard</span>
                        </NavLink>
                    </li>


                    <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Products</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li><a href="all-list.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Add New Product</span></a>
                                </li>
                                <li>
                                    <NavLink to="/product-listing">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Product Listing</span>
                                    </NavLink>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Product View</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Product Edit</span></a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold"><a className={`collapsible-header waves-effect  waves-cyan ${showWaves == true ? "waves-ripple" : "waves-none"} `} onClick={() => { setShowWaves(!showWaves) }} href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Customer</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/customer-listing">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Listing Customer</span>
                                    </NavLink>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Manages Customer</span></a>
                                </li>
                                <li>
                                    <NavLink to="/customer-view">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Customer View</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold"><a className={`collapsible-header waves-effect  waves-cyan ${showWaves == true ? "waves-ripple" : "waves-none"} `} onClick={() => { setShowWaves(!showWaves) }} href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Orders</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li>
                                    <NavLink to="/order-listing">
                                        <i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">Order Listing</span>
                                    </NavLink>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Order View</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Order Fulfill And tracking</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Order Managed</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Pending Order list</span></a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold"><a className={`collapsible-header waves-effect  waves-cyan ${showWaves == true ? "waves-ripple" : "waves-none"} `} onClick={() => { setShowWaves(!showWaves) }} href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Discount</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li><a href="/order-listing"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">List Of Added Discount</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Add New Discount</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Managed Discount</span></a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold"><a className={`collapsible-header waves-effect  waves-cyan ${showWaves == true ? "waves-ripple" : "waves-none"} `} onClick={() => { setShowWaves(!showWaves) }} href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Return</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li><a href="/order-listing"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">List Of Return Order</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Managed Return Order</span></a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold"><a className={`collapsible-header waves-effect  waves-cyan ${showWaves == true ? "waves-ripple" : "waves-none"} `} onClick={() => { setShowWaves(!showWaves) }} href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">3D Modal</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li><a href="/order-listing"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">List Of Upload 3D Modal</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">View Order Assigend </span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Managed 3D Modal</span></a>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li className="bold"><a className={`collapsible-header waves-effect  waves-cyan ${showWaves == true ? "waves-ripple" : "waves-none"} `} onClick={() => { setShowWaves(!showWaves) }} href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Profile</span></a>
                        <div className="collapsible-body">
                            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                                <li><a href="/order-listing"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">View Your Profile</span></a>
                                </li>
                                <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">Changed Profile Information</span></a>
                                </li>
                            </ul>
                        </div>

                    </li>


                </ul>
                <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" onClick={() => { setShowSidebar(!showSidebar) }} href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
            </aside>

        </>
    )

}

export default Sidebar;