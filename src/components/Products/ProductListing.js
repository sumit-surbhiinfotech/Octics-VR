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
    const [viewData, setViewData] = useState({});
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
                            <div className="row">
                                <div className="col s4 m6 l2">
                                    <h5 className="breadcrumbs-title mt-0 mb-0"><span>Product List</span></h5>
                                    <ol className="breadcrumbs mb-0">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Products List
                                        </li>
                                    </ol>
                                </div>
                                <div className="col s8 m6 l10">
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
                                                                <span className="mt-2 ripple4 gradient-45deg-deep-purple-blue btn btn-block modal-trigger z-depth-4" onClick={() => { handleConfirmDelete(item._id) }}>
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
                <div id="modal2" className={`modal ${modalShow == true ? "modal-show" : "modal-show-close"}`}>
                    <div className="modal-content">
                        <a className="modal-close right"><i className="material-icons" onClick={() => { setModalShow(false) }}>close</i></a>
                        <div className="row" id="product-two">
                            <div className="col m6 s12">
                                {
                                    viewData.images && (viewData.images).length > 0 &&
                                    <img src={viewData.images[0].original} className="obj-fit-img" alt="" />
                                }
                            </div>
                            <div className="col m6 s12">
                                <p>{viewData?.title}</p>
                                <h5>{viewData?.description && parse(viewData?.description)}</h5>
                                {/* <span className="new badge left ml-0 mr-2" data-badge-caption="">4.2 Star</span> */}
                                {/* <p>Availability: <span className="red-text">Out of stock</span></p> */}
                                <hr className="mb-5" />
                                {/* <span className="vertical-align-top mr-4"><i className="material-icons mr-3">favorite_border</i>Wishlist</span> */}
                                {/* <ul className="list-bullet">
                                    <li className="list-item-bullet">Fine-tuned acoustics for clarity</li>
                                    <li className="list-item-bullet">Streamlined design for a custom-fit</li>
                                    <li className="list-item-bullet">Durable and foldable so you can take them on-the-go</li>
                                    <li className="list-item-bullet">ake calls and control music with RemoteTalk cable</li>
                                </ul> */}
                                <h5>₹{viewData?.price} <span className="prise-text-style ml-2">₹{viewData?.compare_price}</span></h5>
                                {/* <a className="ripple2 btn gradient-45deg-deep-purple-blue mt-2 mr-2">ADD TO CART</a> */}
                                {/* <a className="ripple2 btn gradient-45deg-purple-deep-orange mt-2">BUY NOW</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductListing;