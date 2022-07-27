import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import 'antd/dist/antd.css';
import { Radio, Select } from 'antd';

const AddNewDiscount = () => {
    const [endDate, setEndDate] = useState();
    const [valueType, setValueType] = useState("per")
    const [addAmoutItem, setAddAmoutItem] = useState(true);
    const [addCollProduct, setAddCollProduct] = useState(true);
    const [addSpecific, setAddSpecific] = useState(true);
    const [addLimitUse, setAddLimitUse] = useState(true);
    const [addMinQuntity, setAddMinQuntity] = useState(true);
    const [addAnyFree, setAddAnyFree] = useState(true);
    const [addUsesOreder, setAddUsesOreder] = useState(true);
    const [addAllCountries, setAddAllCountries] = useState(true);
    const [addShpping, setAddShpping] = useState(true);
    const [type, setType] = useState("amount_of_product");
    const { Option } = Select;
    const children = [<Option key={1}>India</Option>, <Option key={2}>Uas</Option>, <Option key={3}>Canada</Option>, <Option key={4}>Nepal</Option>, <Option key={5}>Bhutan</Option>];
    // for (let i = 10; i < 36; i++) {
    //     // children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
    const [discountcode, setDiscountCode] = useState("");
    const [cspends, setCspends] = useState("");
    const [fdiscount, setFdiscount] = useState("");
    const [fixed, setFixed] = useState("");
    const [selectCountries, setSelectCountries] = useState("");
    const [applies, setApplies] = useState("");
    const [requirements, setRequirements] = useState("");
    const [eligibility, setEligibility] = useState("");
    const [maximum, setMaximum] = useState("");
    const [start, setStart] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (discountcode === "") {
            err.discountcode = "Please Enter Discount Code Or Generate";
            validate = false;
        }
        if (cspends === "") {
            err.cspends = "Please Select Customer Spends";
            validate = false;
        }
        if (fdiscount === "") {
            err.fdiscount = "Please Select One";
            validate = false;
        }

        if (fixed === "") {
            err.fixed = "Please Enter fixed Amount or Percentage.";
            validate = false;
        }

        if (selectCountries === "") {
            err.selectCountries = "Please select Countries.";
            validate = false;
        }

        if (applies === "") {
            err.applies = "Please select  Specific Collections Or Products.";
            validate = false;
        }

        if (requirements === "") {
            err.requirements = "Please select  Minimum Purchase Requirements.";
            validate = false;
        }

        if (eligibility === "") {
            err.eligibility = "Please select Customer eligibility.";
            validate = false;
        }

        if (maximum === "") {
            err.maximum = "Please select Maximum Discount Uses.";
            validate = false;
        }

        if (start === "") {
            err.start = "Please select Active Date.";
            validate = false;
        }

        // if (imgfile === "") {
        //     err.imgfile = 'Please select image.';
        //     validate = false;
        // } else if (!(/\.(jpg|jpeg|png|gif)$/.test(imgfile))) {
        //     err.imgfile = 'Please select valid image.';
        //     validate = false;
        // }
        setError(err);
        if (validate) {

        }
    }
    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    const [size, setSize] = useState('middle');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    const [closeImage, setCloseImage] = useState();
    const [highlight, setHighlight] = useState(false);
    const [preview, setPreview] = useState("");
    const [files, setFiles] = useState([]);
    const [drop, setDrop] = useState(false);
    const handleEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("enter!");

        preview === "" && setHighlight(true);
    };

    const handleOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("over!");

        preview === "" && setHighlight(true);
    };

    const handleLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("leave!");
        setHighlight(false);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("drop!");
        setHighlight(false);
        setDrop(true);
        console.log("rfdscxsdf", e.target.files);
        for (let i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            uploadFile(file);
        }
        // const [file] = e.target.files || e.dataTransfer.files;

    };

    function uploadFile(file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);


        reader.onload = () => {
            // this is the base64 data
            const fileRes = btoa(reader.result);
            console.log(`data:image/jpg;base64,${fileRes}`);
            let temp = files;
            temp.push(`data:image/jpg;base64,${fileRes}`);
            setFiles(temp);
            setPreview(`data:image/jpg;base64,${fileRes}`);
        };

        reader.onerror = () => {
            console.log("There is a problem while uploading...");
        };
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
                                            <option value="free_shipping">Free Shipping</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="add-left-product mt-3">
                                    <h6>Discount Code</h6>
                                    <div className="input-code pt-2">
                                        <div className="code-genreted">
                                            <input type="text" placeholder="Enter code" name="discountcode" value={discountcode} onChange={(e) => { setDiscountCode(e.target.value); }} />
                                            <button className="ml-1 btn-generate">Generate</button>
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
                                                            <p className="product-percentage  active-new  " onClick={(e) => { setValueType('per') }}>Percentage</p>
                                                            <p className="product-amount" onClick={(e) => { setValueType('amt') }}>Fixed Amount</p>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="col s12 l6 xl7">
                                                    <div className="percentage-value" onChange={(e) => { setFixed(e.target.value); }}>
                                                        {
                                                            valueType === "amt" ?
                                                                <div className="">
                                                                    <input type="text" placeholder="₹ 200" name="amt" />
                                                                    <span>₹</span>
                                                                </div>
                                                                :
                                                                <div className="">
                                                                    <input type="text" placeholder="50%" name="amt" />
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
                                                <label htmlFor="mi-quantity"><input id="mi-quantity" type="radio" name="mini-quntity" onClick={(e) => { setAddMinQuntity(addMinQuntity === "mi-quantity" ? "" : "mi-quantity") }} /> Minimum Quantity of Item</label>
                                                <div className={`minimum-quantity ${addMinQuntity === "mi-quantity" ? "collections-add-open" : "collections-add-close"}`}>
                                                    <div className="row">
                                                        <div className="col s12 m6 l6 xl4">
                                                            <div className="add-mini-quantity">
                                                                <label>Quantity</label>
                                                                <input type="text" />
                                                            </div>

                                                        </div>
                                                        <div className="col s12 m6 l6 xl8">
                                                            <div className="add-spci-product">
                                                                <label>Any Items From</label>
                                                                <select>
                                                                    <option>Specific Product</option>
                                                                    <option>Specific Collections</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mtb-10">
                                                <label htmlFor="any-amount"><input id="any-amount" type="radio" name="mini-quntity" onClick={(e) => { setAddMinQuntity(addMinQuntity === "any-amount" ? "" : "any-amount") }} /> Minimum Purchase Amount</label>
                                                <div className={`minimum-quantity ${addMinQuntity === "any-amount" ? "collections-add-open" : "collections-add-close"}`}>
                                                    <div className="row">
                                                        <div className="col s12 m6 l6 xl4">
                                                            <div className="add-mini-quantity">
                                                                <label>Amount</label>
                                                                <input type="text" placeholder="₹ 0.00" />
                                                            </div>

                                                        </div>
                                                        <div className="col s12 m6 l6 xl8">
                                                            <div className="add-spci-product">
                                                                <label>Any Items From</label>
                                                                <select>
                                                                    <option>Specific Product</option>
                                                                    <option>Specific Collections</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-code new-input pt-2 ">
                                                <div className="code-genreted">
                                                    <span>
                                                        <i className="material-icons">search</i>
                                                    </span>
                                                    <input type="text" placeholder="Search Products" />
                                                    <button className="ml-1 btn-generate">Browse</button>
                                                </div>
                                            </div>
                                            <p className="error-p">{error?.cspends}</p>
                                        </div>
                                        <hr />
                                        <h6 className="mt-3">Customer Gets</h6>
                                        <div className="minimum-quantity">
                                            <div className="row">
                                                <div className="col s12 m6 l6 xl4">
                                                    <div className="add-mini-quantity">
                                                        <label>Quantity</label>
                                                        <input type="text" />
                                                    </div>

                                                </div>
                                                <div className="col s12 m6 l6 xl8">
                                                    <div className="add-spci-product">
                                                        <label>Any Items From</label>
                                                        <select>
                                                            <option>Specific Product</option>
                                                            <option>Specific Collections</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-code new-input pt-2 ">
                                            <div className="code-genreted">
                                                <span>
                                                    <i className="material-icons">search</i>
                                                </span>
                                                <input type="text" placeholder="Search Products" />
                                                <button className="ml-1 btn-generate">Browse</button>
                                            </div>
                                        </div>
                                        <div className="at-a-discounted-value mb-3">
                                            <p className="valur-discount">AT A DISCOUNTED VALUE</p>
                                            <div className="values-for-discount" onChange={(e) => { setFdiscount(e.target.value); }}>
                                                <div className="mtb-10">
                                                    <label htmlFor="any-perecentage"><input id="any-perecentage" type="radio" name="pre-1" onClick={(e) => { setAddAnyFree(addAnyFree === "any-perecentage" ? "" : "any-perecentage") }} /> Perecentage</label>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="any-free"><input id="any-free" type="radio" name="pre-1" onClick={(e) => { setAddAnyFree(addAnyFree === "any-free" ? "" : "any-free") }} /> Free</label>
                                                </div>
                                                <div className="row">
                                                    <div className="col s12 m6 l6 xl3">
                                                        <div className={`per-perecentage mt-4 ${addAnyFree === "any-perecentage" ? "collections-add-open" : "collections-add-close"}`}>
                                                            <input type="text" placeholder="%" />
                                                        </div>
                                                        <div className={`per-free mt-4 ${addAnyFree === "any-free" ? "collections-add-open" : "collections-add-close"}`}>
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.fdiscount}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="set-meximum-number">
                                            <label htmlFor="set-meximum-number1"><input id="set-meximum-number1" type="checkbox" onClick={(e) => { setAddUsesOreder(addUsesOreder === "set-meximum-number1" ? "" : "set-meximum-number1") }} /> Set A Meximum Number of Uses Per Order</label>
                                            <div className={`add-uses-per-order ${addUsesOreder === "set-meximum-number1" ? "collections-add-open" : "collections-add-close"}`}>
                                                <div className="row">
                                                    <div className="col s12 m6 l6 xl3">
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    type !== "amount_of_product" && type !== "amount_of_orders" && type !== "by_x_get_y" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Countries</h6>
                                        <div className="countries mb-3">
                                            <div className="countries-input" onChange={(e) => { setSelectCountries(e.target.value); }}>
                                                <div className="mtb-10">
                                                    <label htmlFor="any-all"><input id="any-all" type="radio" name="all-coun" onClick={(e) => { setAddAllCountries(addAllCountries === "any-all" ? "" : "any-all") }} /> All Countries</label>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="selected-countries"><input id="selected-countries" type="radio" name="all-coun" onClick={(e) => { setAddAllCountries(addAllCountries === "selected-countries" ? "" : "selected-countries") }} /> Selected Countries</label>
                                                    <div className={`all-addres-cont  ${addAllCountries === "selected-countries" ? "collections-add-open" : "collections-add-close"}`}>
                                                        <div className="row mt-2">
                                                            <div className="col s12 m6 l6 xl6">
                                                                <div className="sele-contries">
                                                                    <Select
                                                                        mode="multiple"
                                                                        size={size}
                                                                        placeholder="Select Countries"
                                                                        // defaultValue={['India', 'Usa']}
                                                                        onChange={handleChange}
                                                                        style={{
                                                                            width: '100%',
                                                                        }}
                                                                    >
                                                                        {children}
                                                                    </Select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.selectCountries}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mt-3 shipping-rates">
                                            <p className="new-data-rates">SHIPPING RATES</p>
                                            <div className="mt-3 new-shipping">
                                                <div className="mtb-10">
                                                    <label htmlFor="Shpping"><input id="Shpping" type="checkbox" onClick={(e) => { setAddShpping(addShpping === "Shpping" ? "" : "Shpping") }} /> Exclude Shipping Rates Over a Certain Amount</label>
                                                    <div className={`${addShpping === "Shpping" ? "collections-add-open" : "collections-add-close"}`}>
                                                        <div className="row mt-1">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <div className="input-shpping">
                                                                    <input type="text" placeholder="₹ 0.00" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    type !== "amount_of_orders" && type !== "by_x_get_y" && type !== "free_shipping" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Applies to</h6>
                                        <div className="code-apply mt-3" onChange={(e) => { setApplies(e.target.value); }}>
                                            <div className="mtb-10">
                                                <label htmlFor="collections"><input id="collections" type="radio" name="collections-customer" onClick={(e) => { setAddCollProduct(addCollProduct === "collections" ? "" : "collections") }} /> Specific Collections</label>
                                                <div className={`input-code new-input pt-2 ${addCollProduct === "collections" ? "collections-add-open" : "collections-add-close"}`}>
                                                    <div className="code-genreted">
                                                        <span>
                                                            <i className="material-icons">search</i>
                                                        </span>
                                                        <input type="text" placeholder="Search Collections" />
                                                        <button className="ml-1 btn-generate">Browse</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mtb-10">
                                                <label htmlFor="products"><input id="products" type="radio" name="collections-customer" onClick={(e) => { setAddCollProduct(addCollProduct === "products" ? "" : "products") }} /> Specific Products</label>
                                                <div className={`input-code new-input pt-2 ${addCollProduct === "products" ? "products-add-open-new" : "products-add-close-new"}`}>
                                                    <div className="code-genreted">
                                                        <span>
                                                            <i className="material-icons">search</i>
                                                        </span>
                                                        <input type="text" placeholder="Search Products" />
                                                        <button className="ml-1 btn-generate">Browse</button>
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
                                            <div className="minimum-input" onChange={(e) => { setRequirements(e.target.value); }}>
                                                <div className="mtb-10">
                                                    <label htmlFor="noone"><input id="noone" type="radio" name="minimum-customer" onClick={(e) => { setAddAmoutItem(addAmoutItem === "noone" ? "" : "noone") }} /> No Minimum Requirements</label>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="amount"><input id="amount" type="radio" name="minimum-customer" onClick={(e) => { setAddAmoutItem(addAmoutItem === "amount" ? "" : "amount") }} /> Minimum Purchase Amount</label>
                                                    <div className={`amout-to-add ${addAmoutItem === "amount" ? "amout-add-open" : "amout-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <div className="input-minimum-amout">
                                                                    <input type="text" placeholder="₹ 0.00" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="item"><input id="item" type="radio" name="minimum-customer" onClick={(e) => { setAddAmoutItem(addAmoutItem === "item" ? "" : "item") }} /> Minimum Quntity of item</label>
                                                    <div className={`item-to-add ${addAmoutItem === "item" ? "item-add-open" : "item-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <div className="input-minimum-item">
                                                                    <input type="text" placeholder="0" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.requirements}</p>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    type !== "amount_of_orders" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Customer eligibility</h6>
                                        <div className="customer-eligibility">
                                            <div className="eligibility" onChange={(e) => { setEligibility(e.target.value); }}>
                                                <div className="mtb-10">
                                                    <label htmlFor="allcust"><input id="allcust" type="radio" name="eligibility-customer" onClick={(e) => { setAddSpecific(addSpecific === "allcust" ? "" : "allcust") }} /> All Customers</label>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="segments"><input id="segments" type="radio" name="eligibility-customer" onClick={(e) => { setAddSpecific(addSpecific === "segments" ? "" : "segments") }} /> Specific Customers Segments</label>
                                                    <div className={`input-code new-input pt-2 ${addSpecific === "segments" ? "amout-add-open" : "amout-add-close"} `}>
                                                        <div className="code-genreted">
                                                            <span>
                                                                <i className="material-icons">search</i>
                                                            </span>
                                                            <input type="text" placeholder="Specific Customers Segments" />
                                                            <button className="ml-1 btn-generate">Browse</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="Specificc"><input id="Specificc" type="radio" name="eligibility-customer" onClick={(e) => { setAddSpecific(addSpecific === "Specificc" ? "" : "Specificc") }} /> Specific Customers</label>
                                                    <div className={`input-code new-input pt-2 ${addSpecific === "Specificc" ? "amout-add-open" : "amout-add-close"}`}>
                                                        <div className="code-genreted">
                                                            <span>
                                                                <i className="material-icons">search</i>
                                                            </span>
                                                            <input type="text" placeholder="Specific Customers" />
                                                            <button className="ml-1 btn-generate">Browse</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.eligibility}</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    type !== "amount_of_orders" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Maximum Discount Uses</h6>
                                        <div className="maximum-discount-uses">
                                            <div className="discount-uses" onChange={(e) => { setMaximum(e.target.value); }}>
                                                <div className="mtb-10">
                                                    <label htmlFor="limitnumber"><input id="limitnumber" type="checkbox" name="discout-use-on" onClick={(e) => { setAddLimitUse(addLimitUse === "limitnumber" ? "" : "limitnumber") }} /> Limit Number Of Times this Discount can be used in total</label>
                                                    <div className={`dicount-add-uses mt-1 ${addLimitUse === "limitnumber" ? "amout-add-open" : "amout-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mtb-10">
                                                    <label htmlFor="limitpercustomer"><input id="limitpercustomer" type="checkbox" name="discout-use-on" onClick={(e) => { setAddLimitUse(addLimitUse === "limitpercustomer" ? "" : "limitpercustomer") }} /> Limit to one use per Customer</label>
                                                    <div className={`dicount-add-uses mt-1 ${addLimitUse === "limitpercustomer" ? "amout-add-open" : "amout-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="error-p">{error?.maximum}</p>
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
                                                        <input type="date" />
                                                        <p className="error-p">{error?.start}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="set-end-date">
                                                <div className="open-end-date">
                                                    <label htmlFor="endDate"><input id="endDate" type="checkbox" onClick={() => { setEndDate(!endDate) }} /> Set End Date</label>
                                                    <div className={`mt-3 ${endDate == true ? "date-set-open" : "date-set-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl6">
                                                                <div className="data-input">
                                                                    <label>End Date</label>
                                                                    <input type="date" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2" onClick={() => { handleSubmit(); }}>Save</button>
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