import React from 'react';

const Sidebar = () => {
    return (
        <>
            <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
                <div className="brand-sidebar">
                    <h1 className="logo-wrapper"><a className="brand-logo darken-1" href="dashboard">
                    <img className="hide-on-med-and-down" src="images/logo/logo.png" alt="logo"/>
                    <img className="show-on-medium-and-down hide-on-med-and-up" src="images/logo/logo.png" alt="logo"/>
                    </a><a className="navbar-toggler" href="#">
                        <i className="material-icons">radio_button_checked</i></a></h1>
                </div>
                <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
                    <li className="bold active"><a className="waves-effect waves-cyan active" href="dashboard"><i className="material-icons">settings_input_svideo</i><span className="menu-title" data-i18n="Dashboard">Dashboard</span></a>
                    </li>
                    <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#!"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="Invoice">Orders</span></a>
                    <div className="collapsible-body">
                        <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                        <li><a href="all-list.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice List">All Orders</span></a>
                        </li>
                        <li><a href="returns.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Invoice View">All Return Orders</span></a>
                        </li>
                        </ul>
                    </div>
                    </li>
                </ul>
                <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
                </aside>          
        </>
    )
    
}

export default Sidebar;