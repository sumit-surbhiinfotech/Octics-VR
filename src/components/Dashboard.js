import React from 'react';
import Sidebar from './dashboard/Sidebar.js';
import Dashboard_data from './dashboard/Dashboard.js';
import Header from './dashboard/Header.js';
const Dashboard = () => {
    
    return(
        <>
        <Header />
        <Dashboard_data />
        <Sidebar />
        </>
    ) 
}
export default Dashboard;