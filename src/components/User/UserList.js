import React, { useEffect } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { NavLink } from "react-router-dom";
import { changeStatusOfUser, getAllUserList } from "../../action";

const UserList = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        getAllUserList().then((res) => {
            if (res.data) {
                let temp = res.data.data;
                let arr = [];
                temp.map((item, index) => {
                    let obj = {
                        key: index,
                        UserImage:
                            <div className="return-order-img">
                                <img src={item.profile_img} />
                            </div>,
                        UserName: item.first_name,
                        Email: item.email,
                        PhoneNumber: item.phone,
                        Action:
                            <div>
                                <NavLink to="/user">
                                    <Button className="edit-return"><span className="material-icons">save </span></Button>
                                </NavLink>
                                <Button className="edit-return" onClick={() => { handleConfirmDelete(item._id) }}><span className="material-icons">delete_forever </span></Button>
                            </div>

                    }
                    arr.push(obj);
                })
                setData(arr)
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleConfirmDelete = (id) => {
        let body = {
            id: id
        }
        changeStatusOfUser(body).then((res) => {
            if (res.data) {
                getData();
            }
        }).catch((err) => {
            console.log(err);
        })
    }

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
            title: 'User Image',
            dataIndex: 'UserImage',
            key: 'UserImage',
            width: '10%',
            ...getColumnSearchProps('UserImage'),
        },
        {
            title: 'User Name',
            dataIndex: 'UserName',
            key: 'UserName',
            width: '10%',
            ...getColumnSearchProps('UserName'),
        },
        {
            title: 'Email',
            dataIndex: 'Email',
            key: 'Email',
            width: '10%',
            ...getColumnSearchProps('Email'),
        },
        {
            title: 'Phone Number',
            dataIndex: 'PhoneNumber',
            key: 'PhoneNumber',
            width: '10%',
            ...getColumnSearchProps('PhoneNumber'),
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
                <div className="user-list">
                    <div className="container">
                        <div className="list-return-order ">
                            <div className="row">
                                <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                                <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col s4 m6 l6">
                                                <h5 className="breadcrumbs-title mt-0 mb-0"><span>User list</span></h5>
                                                <ol className="breadcrumbs mb-0">
                                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                                    <li className="breadcrumb-item active">User </li>
                                                </ol>
                                            </div>
                                            <div className="col s8 m6 l6">
                                                <div className="add-discount">
                                                    <NavLink to="/user">
                                                        <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">Create User</button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12">
                                    <div className="container">
                                        <div className="section section-data-tables animate fadeUp">
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
                                            <div className="mb-5">
                                                &nbsp;
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="content-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UserList;