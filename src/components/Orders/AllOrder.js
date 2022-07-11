import React from "react";
import { NavLink } from "react-router-dom";
// import "../../css/pages/data-tables.css"
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
// import('../../js/scripts/data-tables.js')
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
// import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { Option } from "antd/lib/mentions";


const data = [
    {
        key: '1',
        Order: '#1001A',
        Date: 'May 22, 4:21PM',
        Customer: 'John Brown',
        PaymentStatus: 'Pending',
        FulfillmentStatus: 'Unfulfilled',
        Action: <NavLink to="/view-orders"><button className=" btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2 pt-3"><span className="material-icons">remove_red_eye </span></button></NavLink>,
    },
    {
        key: '2',
        Order: '#1001A',
        Date: 'May 22, 4:21PM',
        Customer: 'John Brown',
        PaymentStatus: 'Pending',
        FulfillmentStatus: 'Unfulfilled',
        Action: <NavLink to="/view-orders"><button className=" btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2 pt-3"><span className="material-icons">remove_red_eye </span></button></NavLink>,
    },
    {
        key: '3',
        Order: '#1001A',
        Date: 'May 22, 4:21PM',
        Customer: 'John Brown',
        PaymentStatus: 'Pending',
        FulfillmentStatus: 'Unfulfilled',
        Action: <NavLink to="/view-orders"><button className=" btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2 pt-3"><span className="material-icons">remove_red_eye </span></button></NavLink>,
    },
    {
        key: '4',
        Order: '#1001A',
        Date: 'May 22, 4:21PM',
        Customer: 'raj',
        PaymentStatus: 'Pending',
        FulfillmentStatus: 'Unfulfilled',
        Action: <NavLink to="/view-orders"><button className=" btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2 pt-3"><span className="material-icons">remove_red_eye </span></button></NavLink>,
    },

];

const AllOrder = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <></>
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Order',
            dataIndex: 'Order',
            key: 'Order',
            width: '10%',
            ...getColumnSearchProps('Order'),
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            key: 'Date',
            width: '10%',
            ...getColumnSearchProps('Date'),
        },
        {
            title: 'Customer',
            dataIndex: 'Customer',
            key: 'Customer',
            width: '10%',
            ...getColumnSearchProps('Customer'),
        },
        {
            title: 'Payment Status',
            dataIndex: 'PaymentStatus',
            key: 'PaymentStatus',
            width: '10%',
            ...getColumnSearchProps('PaymentStatus'),
        },
        {
            title: 'Fulfillment Status',
            dataIndex: 'FulfillmentStatus',
            key: 'FulfillmentStatus',
            width: '10%',
            ...getColumnSearchProps('FulfillmentStatus'),
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            width: '10%',
            ...getColumnSearchProps('Action'),
        },
    ];
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
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Order Listing</span></h5>
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
                            <div className="section section-data-tables  animate fadeUp">

                                <div className="row">
                                    <div className="col s12">
                                        <div className="card">
                                            <div className="card-content">

                                                <div className="row">
                                                    <div className="col s12">
                                                        <div className="row">
                                                            <div className="col s2 m6 l1">
                                                                <div className="data-table-row-list mb-5">
                                                                    <select>
                                                                        <option>5</option>
                                                                        <option>10</option>
                                                                        <option>25</option>
                                                                        <option>50</option>
                                                                        <option>100</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col s2 m6 l8"></div>
                                                            <div className="col s8 m6 l3">
                                                                <div className="new-data-search">
                                                                    <div className="search-bar">
                                                                        <input className="form-control" />
                                                                        <span>
                                                                            <i className="material-icons">search</i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Table columns={columns} dataSource={data} />
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