import React from 'react';

const Header = () => {

    return (
        <>
            <header className="page-topbar" id="header">
                <div className="navbar navbar-fixed">
                    <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
                        <div className="nav-wrapper">

                            <ul className="navbar-list right">

                                <li className="hide-on-med-and-down"><a className="ripple1 toggle-fullscreen" href="#!;"><i className="material-icons">settings_overscan</i></a></li>
                                <li className="hide-on-large-only search-input-wrapper"><a className="ripple1 search-button" href="#!;"><i className="material-icons">search</i></a></li>
                                <li><a className="ripple1 notification-button" href="#!;" data-target="notifications-dropdown"><i className="material-icons">notifications_none<small className="notification-badge">5</small></i></a></li>
                                <li><a className="ripple1 profile-button new-pro-btn-mt" href="#!;" data-target="profile-dropdown"><span className="avatar-status avatar-online"><img src="images/avatar/avatar-7.png" alt="avatar" /><i></i></span></a></li>
                            </ul>
                            <ul className="dropdown-content" id="notifications-dropdown">
                                <li>
                                    <h6>NOTIFICATIONS<span className="new badge">5</span></h6>
                                </li>
                                <li className="divider"></li>
                                <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
                                    <time className="media-meta grey-text darken-2" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                                </li>
                                <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                                    <time className="media-meta grey-text darken-2" dateTime="2015-06-12T20:50:48+08:00">3 days ago</time>
                                </li>
                                <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                                    <time className="media-meta grey-text darken-2" dateTime="2015-06-12T20:50:48+08:00">4 days ago</time>
                                </li>
                                <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                                    <time className="media-meta grey-text darken-2" dateTime="2015-06-12T20:50:48+08:00">6 days ago</time>
                                </li>
                                <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                                    <time className="media-meta grey-text darken-2" dateTime="2015-06-12T20:50:48+08:00">1 week ago</time>
                                </li>
                            </ul>
                            <ul className="dropdown-content" id="profile-dropdown">
                                <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i className="material-icons">person_outline</i> Profile</a></li>
                                <li><a className="grey-text text-darken-1" href="app-chat.html"><i className="material-icons">chat_bubble_outline</i> Chat</a></li>
                                <li><a className="grey-text text-darken-1" href="page-faq.html"><i className="material-icons">help_outline</i> Help</a></li>
                                <li className="divider"></li>
                                <li><a className="grey-text text-darken-1" href="user-lock-screen.html"><i className="material-icons">lock_outline</i> Lock</a></li>
                                <li><a className="grey-text text-darken-1" href="user-login.html"><i className="material-icons">keyboard_tab</i> Logout</a></li>
                            </ul>
                        </div>
                        <nav className="display-none search-sm">
                            <div className="nav-wrapper">
                                <form id="navbarForm">
                                    <div className="input-field search-input-sm">
                                        <input className="search-box-sm mb-0" type="search" required="" id="search" placeholder="Explore Materialize" data-search="template-list" />
                                        <label className="label-icon" htmlFor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                                        <ul className="search-list collection search-list-sm display-none"></ul>
                                    </div>
                                </form>
                            </div>
                        </nav>
                    </nav>
                </div>
            </header>
            <ul className="display-none" id="default-search-main">
                <li className="auto-suggestion-title"><a className="collection-item" href="#">
                    <h6 className="search-title">FILES</h6></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img src="images/icon/pdf-image.png" width="24" height="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">Two new item submitted</span><small className="grey-text">Marketing Manager</small></div>
                        </div>
                        <div className="status"><small className="grey-text">17kb</small></div>
                    </div></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img src="images/icon/doc-image.png" width="24" height="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">52 Doc file Generator</span><small className="grey-text">FontEnd Developer</small></div>
                        </div>
                        <div className="status"><small className="grey-text">550kb</small></div>
                    </div></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img src="images/icon/xls-image.png" width="24" height="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">25 Xls File Uploaded</span><small className="grey-text">Digital Marketing Manager</small></div>
                        </div>
                        <div className="status"><small className="grey-text">20kb</small></div>
                    </div></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img src="images/icon/jpg-image.png" width="24" height="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">Anna Strong</span><small className="grey-text">Web Designer</small></div>
                        </div>
                        <div className="status"><small className="grey-text">37kb</small></div>
                    </div></a></li>
                <li className="auto-suggestion-title"><a className="collection-item" href="#">
                    <h6 className="search-title">MEMBERS</h6></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img className="circle" src="images/avatar/avatar-7.png" width="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">John Doe</span><small className="grey-text">UI designer</small></div>
                        </div>
                    </div></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img className="circle" src="images/avatar/avatar-8.png" width="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">Michal Clark</span><small className="grey-text">FontEnd Developer</small></div>
                        </div>
                    </div></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img className="circle" src="images/avatar/avatar-10.png" width="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">Milena Gibson</span><small className="grey-text">Digital Marketing</small></div>
                        </div>
                    </div></a></li>
                <li className="auto-suggestion"><a className="collection-item" href="#">
                    <div className="display-flex">
                        <div className="display-flex align-item-center flex-grow-1">
                            <div className="avatar"><img className="circle" src="images/avatar/avatar-12.png" width="30" alt="sample image" /></div>
                            <div className="member-info display-flex flex-column"><span className="black-text">Anna Strong</span><small className="grey-text">Web Designer</small></div>
                        </div>
                    </div></a></li>
            </ul>
            <ul className="display-none" id="page-search-title">
                <li className="auto-suggestion-title"><a className="collection-item" href="#">
                    <h6 className="search-title">PAGES</h6></a></li>
            </ul>
            <ul className="display-none" id="search-not-found">
                <li className="auto-suggestion"><a className="collection-item display-flex align-items-center" href="#"><span className="material-icons">error_outline</span><span className="member-info">No results found.</span></a></li>
            </ul>
        </>
    )
}
export default Header;