import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import 'antd/dist/antd.css';
import { Radio, Select } from 'antd';
import { createDiscount, getAllProduct, getCollections, getNewDiscountCode } from "../../action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddNewDiscount = () => {
    const navigate = useNavigate();
    const [endDate, setEndDate] = useState('');
    const [endDateStatus, setEndDateStatus] = useState(false);
    const [valueType, setValueType] = useState("per")
    const [addAmoutItem, setAddAmoutItem] = useState(true);
    const [addCollProduct, setAddCollProduct] = useState(true);
    const [addSpecific, setAddSpecific] = useState(true);
    const [addLimitUse, setAddLimitUse] = useState(true);
    const [addMinQuntity, setAddMinQuntity] = useState(true);
    // const [addAnyFree, setAddAnyFree] = useState(true);
    // const [addUsesOreder, setAddUsesOreder] = useState(true);
    // const [addAllCountries, setAddAllCountries] = useState(true);
    const [addShpping, setAddShpping] = useState(true);
    const [type, setType] = useState("amount_of_product");
    const { Option } = Select;
    const [discountcode, setDiscountCode] = useState("");
    // const [cspends, setCspends] = useState("");
    // const [fdiscount, setFdiscount] = useState("");
    const [fixed, setFixed] = useState("");
    const [applies, setApplies] = useState("collections");
    const [requirements, setRequirements] = useState("none");
    const [start, setStart] = useState("");
    const [error, setError] = useState({});
    const [collectionData, setCollectionData] = useState([]);
    const [productData, setProductData] = useState([]);
    const [collectionChk, setCollectionChk] = useState([]);
    const [productChk, setProductChk] = useState([]);
    const [minimumPurchaseAmount, setMinimumPurchaseAmount] = useState(0);
    const [minimumQuantity, setMinimumQuantity] = useState(0);
    const [customerSpendQuntity, setCustomerSpendQuntity] = useState(0);
    const [customerSpendAmount, setCustomerSpendAmount] = useState(0);
    const [customerSpendType, setCustomerSpendType] = useState('product');
    const [customerGetQuntity, setCustomerGetQuntity] = useState(0);
    const [customerGetType, setCustomerGetType] = useState('product');
    const [customerGetDiscountType, setCustomerGetDiscountType] = useState('percentage');
    const [customerGetCollectionChk, setCustomerGetCollectionChk] = useState([]);
    const [customerGetProductChk, setCustomerGetProductChk] = useState([]);
    const [customerSpendMainType, setCustomerSpendMainType] = useState("quantity");
    const [customerGetDiscountPercentage, setCustomerGetDiscountPercentage] = useState(0)
    // const [customerGetDiscount]
    useEffect(() => {
        getCollectionsList();
        getProductsList();
    }, [])
    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (discountcode === "") {
            err.discountcode = "Please Enter Discount Code Or Generate";
            validate = false;
        }
        // if (cspends === "" && type !== "amount_of_product") {
        //     err.cspends = "Please Select Customer Spends";
        //     validate = false;
        // }
        // if (fdiscount === "" && type !== "amount_of_product") {
        //     err.fdiscount = "Please Select One";
        //     validate = false;
        // }
        if (applies == "collections" && type !== "amount_of_orders") {
            if (collectionChk.length == 0) {
                err.collectionChk = "Please Select At Least One Item.";
                validate = false;
            }
        }
        if (applies == "products" && type !== "amount_of_orders") {
            if (productChk.length == 0) {
                err.productChk = "Please Select At Least One Item.";
                validate = false;
            }
        }

        if (fixed === "" && type !== "by_x_get_y") {
            err.fixed = "Please Enter fixed Amount or Percentage.";
            validate = false;
        }

        if (applies === "" && type !== "amount_of_product") {
            err.applies = "Please select  Specific Collections Or Products.";
            validate = false;
        }

        if (requirements === "") {
            err.requirements = "Please select  Minimum Purchase Requirements.";
            validate = false;
        }

        if (requirements === "amount") {
            if (minimumPurchaseAmount <= 0) {
                err.minimumPurchaseAmount = "Please Enter Valid Amount.";
                validate = false;
            }
        }
        if (requirements === "quantity") {
            if (minimumQuantity <= 0) {
                err.minimumQuantity = "Please Enter Valid Quantity.";
                validate = false;
            }
        }

        if (start === "") {
            err.start = "Please select Active Date.";
            validate = false;
        }

        if (endDateStatus) {
            if (!endDate) {
                err.endDate = "Please select Expire Date.";
                validate = false;
            }
        }

        if (type == "by_x_get_y") {
            if (customerSpendMainType === "quantity") {
                console.log("customerSpendQuntity", customerSpendQuntity)
                if (customerSpendQuntity <= 0) {
                    err.customerSpendQuntity = "Please Enter Quantity.";
                    validate = false;
                }
                if (customerSpendType === "product") {
                    if (productChk.length == 0) {
                        err.productChk = "Please Select At Least One Item.";
                        validate = false;
                    }
                }
                if (customerSpendType === "amount") {
                    if (customerSpendAmount <= 0) {
                        err.productChk = "Please enter valid amount.";
                        validate = false;
                    }
                }
            }
            if (customerSpendMainType === "amount") {
                if (customerSpendAmount <= 0) {
                    err.customerSpendAmount = "Please Enter Valid Amount .";
                    validate = false;
                }
                if (customerSpendType === "product") {
                    if (productChk.length == 0) {
                        err.productChk = "Please select products.";
                        validate = false;
                    }
                }
                if (customerSpendType === "amount") {
                    if (customerSpendAmount <= 0) {
                        err.productChk = "Please enter valid amount.";
                        validate = false;
                    }
                }
            }
            if (customerGetQuntity <= 0) {
                err.customerGetQuntity = "Please enter valid Quantity.";
                validate = false;
            }
            if (customerGetType == "product") {
                if (customerGetProductChk.length == 0) {
                    err.customerGetProductChk = "Please enter valid Quantity.";
                    validate = false;
                }
            }
            if (customerGetType == "collection") {
                if (customerGetCollectionChk.length == 0) {
                    err.customerGetCollectionChk = "Please enter valid Quantity.";
                    validate = false;
                }
            }
            if (customerGetDiscountType == "percentage") {
                if (customerGetDiscountPercentage <= 0) {
                    err.customerGetDiscountPercentage = "Please enter valid Percentage.";
                    validate = false;
                }
            }
        }

        setError(err);
        if (validate) {
            let body = {};
            if (type === "amount_of_product") {
                body.type = type
                body.title = type
                body.discount_code = discountcode
                body.value_type = valueType === 'per' ? 'percentage' : 'amount'
                body.value = fixed
                body.minimum_requirement_type = requirements
                if (requirements === "amount") {
                    body.minimum_requirement_value = minimumPurchaseAmount
                }
                if (requirements === "quantity") {
                    body.minimum_requirement_value = minimumQuantity
                }
                if (applies === "collections") {
                    body.collections = collectionChk
                }
                if (applies === "products") {
                    body.products = productChk
                }
                body.start_date = start
                if (endDateStatus) {
                    body.end_date = endDate
                }
            }
            if (type === "amount_of_orders") {
                body.type = type
                body.title = type
                body.discount_code = discountcode
                body.value_type = valueType === 'per' ? 'percentage' : 'amount'
                body.value = fixed
                body.minimum_requirement_type = requirements
                if (requirements === "amount") {
                    body.minimum_requirement_value = minimumPurchaseAmount
                }
                if (requirements === "quantity") {
                    body.minimum_requirement_value = minimumQuantity
                }
                body.start_date = start
                if (endDateStatus) {
                    body.end_date = endDate
                }
            }
            if (type === "by_x_get_y") {
                body.type = type
                body.title = type
                body.discount_code = discountcode
                body.customer_spend_main_type = customerSpendMainType;
                if (customerSpendMainType == "quantity") {
                    body.customer_spend_quntity = customerSpendQuntity;
                }
                if (customerSpendMainType == "amount") {
                    body.customer_spend_amount = customerSpendAmount;
                }
                body.customer_spend_type = customerSpendType;
                if (customerSpendType === "collection") {
                    body.collections = collectionChk;
                }
                if (customerSpendType === "product") {
                    body.collections = productChk;
                }
                body.customer_get_quntity = customerGetQuntity
                body.customer_spend_type = customerSpendType
                if (customerSpendType === "collection") {
                    body.collections = collectionChk
                }
                if (customerSpendType === "product") {
                    body.collections = productChk
                }
                body.customer_get_discount_type = customerGetDiscountType
                if (customerGetDiscountType === "percentage") {
                    body.customer_get_discount_percentage = customerGetDiscountPercentage
                }
                body.start_date = start
                if (endDateStatus) {
                    body.end_date = endDate
                }
            }
            console.log("sxuyus", body)
            createDiscount(body).then((res) => {
                if (res.data) {
                    toast("Discount Created Successfully.")
                    navigate('/list-of-addes-discount');
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    console.log("error", error, type);
    const generateDiscountCode = () => {
        getNewDiscountCode().then((res) => {
            if (res.data) {
                setDiscountCode(res.data.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleCollection = (value, checked) => {
        let temp = [...collectionChk];
        if (checked === false) {
            temp = temp.filter(item => item !== value);
            setCollectionChk(temp);
        }
        if (checked === true) {
            temp.push(value);
            setCollectionChk(temp);
        }
    }

    const handleProduct = (value, checked) => {
        let temp = [...productChk];
        if (checked === false) {
            temp = temp.filter(item => item !== value);
            setProductChk(temp);
        }
        if (checked === true) {
            temp.push(value);
            setProductChk(temp);
        }
    }

    const handleCustomerGetCollection = (value, checked) => {
        let temp = [...customerGetCollectionChk];
        if (checked === false) {
            temp = temp.filter(item => item !== value);
            setCustomerGetCollectionChk(temp);
        }
        if (checked === true) {
            temp.push(value);
            setCustomerGetCollectionChk(temp);
        }
    }

    const handleCustomerGetProduct = (value, checked) => {
        let temp = [...customerGetProductChk];
        if (checked === false) {
            temp = temp.filter(item => item !== value);
            setCustomerGetProductChk(temp);
        }
        if (checked === true) {
            temp.push(value);
            setCustomerGetProductChk(temp);
        }
    }

    const getCollectionsList = () => {
        getCollections().then((res) => {
            if (res.data) {
                setCollectionData(res.data.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const getProductsList = () => {
        getAllProduct().then((res) => {
            if (res.data) {
                setProductData(res.data.data);
            }
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="container">
                    <div className="add-new-discuont animate fadeUp">
                        <div className="tital mt-4">
                            <h4>Create Discount Code</h4>
                        </div>
                        <div className="row">

                            <div className="col s12  l6 xl3"></div>
                            <div className="col s12 xl6 mt-3 ">
                                <div className="add-left-product">
                                    <h6>Select Discount Type</h6>
                                    <div className="main-discount-type pt-2">
                                        <select onChange={(e) => { setType(e.target.value) }} value={type}>
                                            <option value="amount_of_product">Amount off Products</option>
                                            <option value="amount_of_orders">Amount off Orders</option>
                                            <option value="by_x_get_y">Buy X Get Y</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="add-left-product mt-3">
                                    <h6>Discount Code</h6>
                                    <div className="input-code pt-2">
                                        <div className="code-genreted">
                                            <input type="text" placeholder="Enter code" name="discountcode" value={discountcode} onChange={(e) => { setDiscountCode(e.target.value); }} readOnly />
                                            <button className="ml-1 btn-generate" type="button" onClick={() => { generateDiscountCode() }}>Generate</button>
                                        </div>
                                        <p className="error-p">{error?.discountcode}</p>
                                    </div>
                                </div>
                                {
                                    type !== "by_x_get_y" && type !== "free_shipping" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Value</h6>
                                        <div className="input-code pt-2">
                                            <div className="row">
                                                <div className="col s12 l6 xl5">
                                                    <div className="discount-type">
                                                        <div className="type-discount"  >
                                                            <p className={`product-percentage ${valueType === 'per' ? 'active-new' : ''}`} onClick={(e) => { setValueType('per') }}>Percentage</p>
                                                            <p className={`product-amount ${valueType === 'amt' ? 'active-new' : ''}`} onClick={(e) => { setValueType('amt') }}>Fixed Amount</p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col s12 l6 xl7">
                                                    <div className="percentage-value relative" onChange={(e) => { setFixed(e.target.value); }}>
                                                        {
                                                            valueType === "amt" ?
                                                                <div className="">
                                                                    <input type="text" placeholder="₹ 200" name="amt" onChange={(e) => { setFixed(e.target.value); }} value={fixed} />
                                                                    <span>₹</span>
                                                                </div>
                                                                :
                                                                <div className="">
                                                                    <input type="text" placeholder="50%" name="amt" onChange={(e) => { setFixed(e.target.value); }} value={fixed} />
                                                                    <span>%</span>
                                                                </div>

                                                        }
                                                        <p className="error-p">{error?.fixed}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    type !== "amount_of_product" && type !== "amount_of_orders" && type !== "free_shipping" &&

                                    <div className="add-left-product mt-3">
                                        <h6>Customer Spends</h6>
                                        <div className="costomer-spends mb-3" onChange={(e) => { setCspends(e.target.value); }}>
                                            <div className="mtb-10">
                                                <label htmlFor="mi-quantity"><input id="mi-quantity" type="radio" name="mini-quntity" onClick={(e) => { setCustomerSpendMainType("quantity") }} checked={customerSpendMainType === "quantity" ? true : false} /> Minimum Quantity of Item</label>
                                                <div className={`minimum-quantity ${customerSpendMainType === "quantity" ? "collections-add-open" : "collections-add-close"}`}>
                                                    <div className="row">
                                                        <div className="col s12 m6 l6 xl4">
                                                            <div className="add-mini-quantity">
                                                                <label>Quantity</label>
                                                                <input type="text" onChange={(e) => { setCustomerSpendQuntity(e.target.value); }} value={customerSpendQuntity} />
                                                            </div>

                                                        </div>
                                                        <div className="col s12 m6 l6 xl8">
                                                            <div className="add-spci-product">
                                                                <label>Any Items From</label>
                                                                <select onChange={(e) => { setCustomerSpendType(e.target.value); }}>
                                                                    <option value='product'>Product</option>
                                                                    <option value='collection'>Collections</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="error-p">{error?.customerGetQuntity}</p>
                                                </div>
                                            </div>
                                            <div className="mtb-10">
                                                <label htmlFor="any-amount"><input id="any-amount" type="radio" name="mini-quntity" onClick={(e) => { setCustomerSpendMainType("amount") }} /> Minimum Purchase Amount</label>
                                                <div className={`minimum-quantity ${customerSpendMainType === "amount" ? "collections-add-open" : "collections-add-close"}`}>
                                                    <div className="row">
                                                        <div className="col s12 m6 l6 xl4">
                                                            <div className="add-mini-quantity">
                                                                <label>Amount</label>
                                                                <input type="text" placeholder="₹ 0.00" onChange={(e) => { setCustomerSpendAmount(e.target.value); }} value={customerSpendAmount} />
                                                            </div>
                                                        </div>
                                                        <div className="col s12 m6 l6 xl8">
                                                            <div className="add-spci-product">
                                                                <label>Any Items From</label>
                                                                <select onChange={(e) => { setCustomerSpendType(e.target.value); }} value={customerSpendType}>
                                                                    <option value='product'>Product</option>
                                                                    <option value='collection'>Collections</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="error-p">{error?.customerSpendAmount}</p>
                                                </div>
                                            </div>
                                            {console.log("customerSpendType", customerSpendType)}
                                            <div className="input-code new-input pt-2 ">
                                                {
                                                    customerSpendType === "collection" && <>
                                                        <div className="">
                                                            {
                                                                collectionData && collectionData.map((item, index) => (
                                                                    <div key={index} className="custom-checkbox">
                                                                        <input type="checkbox" id={item._id} name="collection" value={item._id} onClick={(e) => { handleCollection(e.target.value, e.target.checked) }} checked={collectionChk.indexOf(item._id) !== -1 ? true : false} />
                                                                        <label htmlFor="item._id">{item.title}</label>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </>
                                                }
                                                {
                                                    customerSpendType === "product" && <>
                                                        <div className="">
                                                            {
                                                                productData && productData.map((item, index) => (
                                                                    <div key={index} className="custom-checkbox">
                                                                        <input type="checkbox" id={item._id} name="collection" value={item._id} onClick={(e) => { handleProduct(e.target.value, e.target.checked) }} checked={productChk.indexOf(item._id) !== -1 ? true : false} />
                                                                        <label htmlFor="item._id">{item.title}</label>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </>
                                                }
                                            </div>
                                            <p className="error-p">{error?.productChk}</p>
                                            <p className="error-p">{error?.collectionChk}</p>
                                        </div>
                                        <hr />
                                        <h6 className="mt-3">Customer Gets</h6>
                                        <div className="minimum-quantity">
                                            <div className="row">
                                                <div className="col s12 m6 l6 xl4">
                                                    <div className="add-mini-quantity">
                                                        <label>Quantity</label>
                                                        <input type="text" onChange={(e) => { setCustomerGetQuntity(e.target.value); }} value={customerGetQuntity} />
                                                    </div>

                                                </div>
                                                <div className="col s12 m6 l6 xl8">
                                                    <div className="add-spci-product">
                                                        <label>Any Items From</label>
                                                        <select onChange={(e) => { setCustomerGetType(e.target.value); }} value={customerGetType}>
                                                            <option value='product'>Product</option>
                                                            <option value='collection'>Collections</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-code new-input pt-2 ">
                                            <div className="">
                                                {
                                                    customerGetType === "product" && <>
                                                        <div className="">
                                                            {
                                                                collectionData && collectionData.map((item, index) => (
                                                                    <div key={index} className="custom-checkbox">
                                                                        <input type="checkbox" id={item._id} name="collection" value={item._id} onClick={(e) => { handleCustomerGetProduct(e.target.value, e.target.checked) }} checked={customerGetProductChk.indexOf(item._id) !== -1 ? true : false} />
                                                                        <label htmlFor={item._id}>{item.title}</label>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </>
                                                }
                                                {
                                                    customerGetType === "collection" && <>
                                                        <div className="">
                                                            {
                                                                productData && productData.map((item, index) => (
                                                                    <div key={index} className="custom-checkbox">
                                                                        <input type="checkbox" id={item._id} name="collection" value={item._id} onClick={(e) => { handleCustomerGetCollection(e.target.value, e.target.checked) }} checked={customerGetCollectionChk.indexOf(item._id) !== -1 ? true : false} />
                                                                        <label htmlFor="item._id">{item.title}</label>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    </>
                                                }
                                                <p className="error-p">{error?.customerGetProductChk}</p>
                                                <p className="error-p">{error?.customerGetCollectionChk}</p>
                                            </div>
                                        </div>
                                        <div className="at-a-discounted-value mb-3">
                                            <p className="valur-discount">AT A DISCOUNTED VALUE</p>
                                            <div className="values-for-discount" onChange={(e) => { setFdiscount(e.target.value); }}>
                                                <div className="mtb-10">
                                                    <label htmlFor="any-perecentage"><input id="any-perecentage" type="radio" name="pre-1" onClick={(e) => { setCustomerGetDiscountType("percentage") }} value="percentage" checked={customerGetDiscountType === "percentage" ? true : false} /> Perecentage</label>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="any-free"><input id="any-free" type="radio" name="pre-1" onClick={(e) => { setCustomerGetDiscountType("free") }} value="free" /> Free</label>
                                                </div>
                                                <div className="row">
                                                    <div className="col s12 m6 l6 xl3">
                                                        <div className={`per-perecentage mt-4 ${customerGetDiscountType === "percentage" ? "collections-add-open" : "collections-add-close"}`}>
                                                            <input type="text" placeholder="%" onChange={(e) => { setCustomerGetDiscountPercentage(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.customerGetDiscountPercentage}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                }
                                {
                                    type !== "amount_of_orders" && type !== "by_x_get_y" && type !== "free_shipping" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Applies to</h6>
                                        <div className="code-apply mt-3">
                                            <div className="mtb-10">
                                                <label htmlFor="collections"><input id="collections" type="radio" name="collections-customer" onClick={(e) => { setApplies("collections") }} checked={applies === "collections" ? true : false} /> Specific Collections</label>
                                                <div className={`input-code new-input pt-2 ${applies === "collections" ? "collections-add-open" : "collections-add-close"}`}>
                                                    <div className="">
                                                        {
                                                            collectionData && collectionData.map((item, index) => (
                                                                <div key={index} className="custom-checkbox">
                                                                    <input type="checkbox" id={item._id} name="collection" value={item._id} onClick={(e) => { handleCollection(e.target.value, e.target.checked) }} checked={collectionChk.indexOf(item._id) !== -1 ? true : false} />
                                                                    <label htmlFor="item._id">{item.title}</label>
                                                                </div>
                                                            ))
                                                        }
                                                        <p className="error-p">{error?.collectionChk}</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mtb-10">
                                                <label htmlFor="products"><input id="products" type="radio" name="collections-customer" onClick={(e) => { setApplies("products"); }} /> Specific Products</label>
                                                <div className={`input-code new-input pt-2 ${applies === "products" ? "products-add-open-new" : "products-add-close-new"}`}>
                                                    <div className="">
                                                        {
                                                            productData && productData.map((item, index) => (
                                                                <div key={index} className="custom-checkbox">
                                                                    <input type="checkbox" id={item._id} name="collection" value={item._id} onClick={(e) => { handleProduct(e.target.value, e.target.checked) }} checked={productChk.indexOf(item._id) !== -1 ? true : false} />
                                                                    <label htmlFor="item._id">{item.title}</label>
                                                                </div>
                                                            ))
                                                        }
                                                        <p className="error-p">{error?.productChk}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="error-p">{error?.applies}</p>
                                        </div>


                                    </div>
                                }
                                {
                                    type !== "by_x_get_y" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Minimum Purchase Requirements</h6>
                                        <div className="minimum-requirements" >
                                            <div className="minimum-input">
                                                <div className="mtb-10">
                                                    <label htmlFor="noone">
                                                        <input id="noone" type="radio" name="minimum-customer" onClick={(e) => { setRequirements("none") }} checked={requirements === "none" ? true : false} /> No Minimum Requirements
                                                    </label>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="amount">
                                                        <input id="amount" type="radio" name="minimum-customer" onClick={(e) => { setRequirements("amount") }} /> Minimum Purchase Amount
                                                    </label>
                                                    <div className={`amout-to-add ${requirements === "amount" ? "amout-add-open" : "amout-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <div className="input-minimum-amout">
                                                                    <input type="text" placeholder="₹ 0.00" onChange={(e) => { setMinimumPurchaseAmount(e.target.value); }} value={minimumPurchaseAmount} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="error-p">{error?.minimumPurchaseAmount}</p>
                                                    </div>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="item"><input id="item" type="radio" name="minimum-customer" onClick={(e) => { setRequirements("quantity") }} /> Minimum Quntity of item</label>
                                                    <div className={`item-to-add ${requirements === "quantity" ? "item-add-open" : "item-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <div className="input-minimum-item">
                                                                    <input type="text" placeholder="0" onChange={(e) => { setMinimumQuantity(e.target.value); }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="error-p">{error?.minimumQuantity}</p>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.requirements}</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <div className="add-left-product mt-3">
                                    <h6>Active Date</h6>
                                    <div className="code-apply mt-3">
                                        <div className="date-set">
                                            <div className="row">
                                                <div className="col s12 m6 l6 xl6">
                                                    <div className="date-input" onChange={(e) => { setStart(e.target.value); }}>
                                                        <label>Start Date</label>
                                                        <input type="date" onChange={(e) => { setStart(e.target.value); console.log("e.target.value", e.target.value) }} />
                                                        <p className="error-p">{error?.start}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="set-end-date">
                                                <div className="open-end-date">
                                                    <label htmlFor="endDate"><input id="endDate" type="checkbox" onClick={() => { setEndDateStatus(!endDateStatus) }} /> Set End Date</label>
                                                    <div className={`mt-3 ${endDateStatus == true ? "date-set-open" : "date-set-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl6">
                                                                <div className="data-input">
                                                                    <label>End Date</label>
                                                                    <input type="date" onChange={(e) => { setEndDate(e.target.value) }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="error-p">{error?.endDate}</p>
                                                    </div>
                                                </div>
                                                {console.log('sacxz', endDate)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6  l6 xl6">
                                        <div className="discard-btn">
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">Discard</button>
                                        </div>
                                    </div>
                                    <div className="col s6  l6 xl6">
                                        <div className="save-btn">
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2" onClick={() => { handleSubmit(); }} type="button">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12  l6 xl3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddNewDiscount;