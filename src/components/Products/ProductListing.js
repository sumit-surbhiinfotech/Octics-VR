import React, { useEffect, useState } from "react";
import { deleteProduct, getAllProduct } from "../../action";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import parse from 'html-react-parser';
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const ProductListing = () => {
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [viewData, setViewData] = useState({});
    const [deleteId, setDeleteId] = useState(null);
    const [openShow, setOpenShow] = useState();
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getAllProduct().then((res) => {
            if (res.data) {
                setData(res.data.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleConfirmDelete = (id) => {
        deleteProduct(id).then((res) => {
            if (res.data) {
                toast("Deleted Sucessfully");
                getData();
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const [modalShow, setModalShow] = useState();
    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="row ">
                    <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
                    <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
                        <div className="container">
                            <div className="row d-align">
                                <div className="col s6 m6 l3">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Product List</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Products List
                                        </li>
                                    </ol>
                                </div>
                                <div className="col s6 m6 l9">
                                    <div className="search-bar">
                                        <input className="form-control"></input>
                                        <span><i className="material-icons">search</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="container mb-5">
                            <div className="section">
                                <div className="row" id="ecommerce-products">

                                    <div className="col s12 m12 l12 pr-0">
                                        {
                                            data && data.map((item, index) => (
                                                <div className="col s12 m4 l4">
                                                    <div className="card animate fadeUp">
                                                        <div className="card-content">
                                                            <p>{item.title}</p>
                                                            <span className="card-title text-ellipsis">{parse(item.description)}</span>
                                                            <div className="text-center">
                                                                {
                                                                    item.images && (item.images).length > 0 &&
                                                                    <img src={item.images[0].original} className="obj-fit-img" alt="" />
                                                                }
                                                            </div>
                                                            <div className="display-flex flex-wrap justify-content-center">
                                                                <h5 className="mt-3">₹ {item.price}</h5>
                                                                <NavLink to={`/add-new-product?id=${item._id}`} className="mt-2 ripple4 gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4">
                                                                    View
                                                                </NavLink>

                                                                <span className="mt-2 ripple4 gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4" onClick={() => { setModalShow(true); setDeleteId(item._id); }}>
                                                                    Delete
                                                                </span>


                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            ))
                                        }

                                        <div className="col s12 center mb-5">
                                            <ul className="pagination">
                                                <li className="disabled">
                                                    <a href="#!">
                                                        <i className="material-icons">chevron_left</i>
                                                    </a>
                                                </li>
                                                <li className="active"><a href="#!">1</a>
                                                </li>
                                                <li className="ripple3"><a href="#!">2</a>
                                                </li>
                                                <li className="ripple3"><a href="#!">3</a>
                                                </li>
                                                <li className="ripple3"><a href="#!">4</a>
                                                </li>
                                                <li className="ripple3"><a href="#!">5</a>
                                                </li>
                                                <li className="ripple3">
                                                    <a href="#!">
                                                        <i className="material-icons">chevron_right</i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="content-overlay"></div>
                        </div>
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
                {
                    showPopup &&
                    <div id="popup1" className={`overlay ${openShow == true ? "modal-show" : "modal-show-close"}`}>
                        <div className="popup">
                            <h4>Conformation</h4>
                            <p className="text-center mb-3">Are you sure you want to delete? </p>
                            <a className="close" href="#" onClick={(e) => { setShowPopup(false); }}>&times;</a>
                            <div className="content">

                                <div className="w-50">
                                    <a href="#">
                                        <span className="mt-2 ripple4 gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4" onClick={() => { handleConfirmDelete(deleteId) }}>  Delete</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default ProductListing;