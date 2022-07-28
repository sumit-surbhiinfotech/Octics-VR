import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { useRef, useState } from 'react';
import { deleteDiscount, getAllDiscounts } from "../../action";
import 'antd/dist/antd.css';
import { toast } from "react-toastify";


const ListOfAddedDiscount = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [modalShow, setModalShow] = useState();
    const [deleteId, setDeleteId] = useState(null);
    const searchInput = useRef(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getAllDiscounts().then((res) => {
            if (res.data) {
                let temp = res.data.data;
                let arr = [];
                temp.map((item, index) => {
                    let obj = {
                        key: index,
                        Code:
                            <div>
                                <p>{item.type}</p>
                                <p>{item.discount_code}</p>
                            </div>,
                        Status: <div className="expired">
                            {
                                !item.end_date ? 'Active' :
                                    new Date(item.end_date) - new Date(item.start_date) > 0 ? 'Active' : 'Exprire'
                            }

                        </div>,
                        Used: item?.count ? item?.count : 0,
                        Start: item.start_date,
                        End: item.end_date ? item.end_date : '--',
                        Action:
                            <>
                                <Button className="edit-return" onClick={() => { setModalShow(true); setDeleteId(item._id); }}><span className="material-icons">delete_forever </span></Button>
                            </>,
                    }
                    arr.push(obj);
                })
                setData(arr);
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleConfirmDelete = (id) => {
        deleteDiscount(id).then((res) => {
            if (res.data) {
                toast("Deleted Sucessfully");
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
            title: 'Code',
            dataIndex: 'Code',
            key: 'Code',
            width: '30%',
            ...getColumnSearchProps('Code'),
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
            width: '10%',
            ...getColumnSearchProps('Status'),
        },
        {
            title: 'Used',
            dataIndex: 'Used',
            key: 'Used',
            width: '10%',
            ...getColumnSearchProps('Used'),
        },
        {
            title: 'Start',
            dataIndex: 'Start',
            key: 'Start',
            width: '10%',
            ...getColumnSearchProps('Start'),
        },
        {
            title: 'End',
            dataIndex: 'End',
            key: 'End',
            width: '10%',
            ...getColumnSearchProps('End'),
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Remove',
            width: '10%',
            ...getColumnSearchProps('Remove'),
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
                                <div className="col s5 m6 l6">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Discount</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active">Discount List </li>
                                    </ol>
                                </div>
                                <div className="col  m6 l2"></div>
                                <div className="col s7 m6 l4">
                                    <div className="add-discount">
                                        <NavLink to="/add-new-discount">
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">Create Discount</button>
                                        </NavLink>
                                    </div>
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
            <div id="modal2" className={`modal  ${modalShow == true ? "modal-show" : "modal-show-close"}`}>
                <div className="modal-content">
                    <a className="modal-close right"><i className="material-icons" onClick={() => { setModalShow(false) }}>close</i></a>
                    <div className="row" id="product-two">

                        <div className="col m12 s12">
                            <h4>Conformation</h4>
                            <p className="text-center mb-3">Are you sure you want to delete? </p>
                            <div className="content">

                                <div className="w-50">

                                    <a href="#" onClick={() => { setModalShow(false) }}>
                                        <span className="mt-2 ripple4 gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4" onClick={() => { handleConfirmDelete(deleteId) }}>  Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ListOfAddedDiscount;