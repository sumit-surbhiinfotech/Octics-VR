import React from 'react';
import Sidebar from './dashboard/Sidebar.js';
import Dashboard_data from './dashboard/Dashboard.js';
import Header from './dashboard/Header.js';
import Footer from './Footer.js';
import AllOrder from './Orders/AllOrder.js';
import ViewOrder from './Orders/ViewOrders.js';
import ProductListing from './Products/ProductListing.js';
const Dashboard = () => {

    return (
        <>
            <Header />
            <Dashboard_data />
            <Sidebar />
            <Footer />
        </>
    )
}
export default Dashboard;