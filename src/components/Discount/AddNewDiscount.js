import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import 'antd/dist/antd.css';
import { Radio, Select } from 'antd';

const AddNewDiscount = () => {
    const [endDate, setEndDate] = useState();
    // const [percentageOpen, setPercentageOpen] = useState(true);
    // const [fixedValue, setFixedValue] = useState(true);
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
    const [openOption, setOpenOption] = useState();
    const [openValue, setOpenValue] = useState("");
    const [newValue, setNewValue] = useState("");
    const { Option } = Select;
    const children = [<Option key={1}>India</Option>, <Option key={2}>Uas</Option>, <Option key={3}>Canada</Option>, <Option key={4}>Nepal</Option>, <Option key={5}>Bhutan</Option>];
    // for (let i = 10; i < 36; i++) {
    //     // children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    // }
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
                                            <input type="text" placeholder="Enter code" />
                                            <button className="ml-1 btn-generate">Generate</button>
                                        </div>
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
                                                    <div className="percentage-value">
                                                        {
                                                            valueType === "amt" ?
                                                                <input type="text" placeholder="$200" />
                                                                :
                                                                <input type="text" placeholder="50%" />
                                                        }
                                                    </div>
                                                    <div className="fixed-value">
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
                                        <div className="costomer-spends mb-3">
                                            <div>
                                                <p><input type="radio" name="mini-quntity" onClick={(e) => { setAddMinQuntity(addMinQuntity === "mi-quantity" ? "" : "mi-quantity") }} /> Minimum Quantity of Item</p>
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
                                            <div>
                                                <p><input type="radio" name="mini-quntity" onClick={(e) => { setAddMinQuntity(addMinQuntity === "any-amount" ? "" : "any-amount") }} /> Minimum Purchase Amount</p>
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
                                            <div className="values-for-discount">
                                                <div>
                                                    <p><input type="radio" name="pre-1" onClick={(e) => { setAddAnyFree(addAnyFree === "any-perecentage" ? "" : "any-perecentage") }} /> Perecentage</p>
                                                </div>
                                                <div>
                                                    <p><input type="radio" name="pre-1" onClick={(e) => { setAddAnyFree(addAnyFree === "any-free" ? "" : "any-free") }} /> Free</p>
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
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="set-meximum-number">
                                            <p><input type="checkbox" onClick={(e) => { setAddUsesOreder(addUsesOreder === "set-meximum-number1" ? "" : "set-meximum-number1") }} /> Set A Meximum Number of Uses Per Order</p>
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
                                            <div className="countries-input">
                                                <div>
                                                    <p><input type="radio" name="all-coun" onClick={(e) => { setAddAllCountries(addAllCountries === "any-all" ? "" : "any-all") }} /> All Countries</p>
                                                </div>
                                                <div>
                                                    <p><input type="radio" name="all-coun" onClick={(e) => { setAddAllCountries(addAllCountries === "selected-countries" ? "" : "selected-countries") }} /> Selected Countries</p>
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
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="mt-3 shipping-rates">
                                            <p className="new-data-rates">SHIPPING RATES</p>
                                            <div className="mt-3 new-shipping">
                                                <div>
                                                    <p><input type="checkbox" onClick={(e) => { setAddShpping(addShpping === "Shpping" ? "" : "Shpping") }} /> Exclude Shipping Rates Over a Certain Amount</p>
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
                                        <div className="code-apply mt-3">
                                            {/* <div>
                                            <p><input type="radio" /> Entire Order</p>
                                        </div> */}
                                            <div>
                                                <p><input type="radio" name="collections-customer" onClick={(e) => { setAddCollProduct(addCollProduct === "collections" ? "" : "collections") }} /> Specific Collections</p>
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
                                            <div>
                                                <p><input type="radio" name="collections-customer" onClick={(e) => { setAddCollProduct(addCollProduct === "products" ? "" : "products") }} /> Specific Products</p>
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
                                        </div>


                                    </div>
                                }
                                {
                                    type !== "by_x_get_y" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Minimum Purchase Requirements</h6>
                                        <div className="minimum-requirements">
                                            <div className="minimum-input">
                                                <div>
                                                    <p><input type="radio" name="minimum-customer" onClick={(e) => { setAddAmoutItem(addAmoutItem === "noone" ? "" : "noone") }} /> No Minimum Requirements</p>
                                                </div>
                                                <div>
                                                    <p><input type="radio" name="minimum-customer" onClick={(e) => { setAddAmoutItem(addAmoutItem === "amount" ? "" : "amount") }} /> Minimum Purchase Amount</p>
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
                                                <div>
                                                    <p><input type="radio" name="minimum-customer" onClick={(e) => { setAddAmoutItem(addAmoutItem === "item" ? "" : "item") }} /> Minimum Quntity of item</p>
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
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    type !== "amount_of_orders" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Customer eligibility</h6>
                                        <div className="customer-eligibility">
                                            <div className="eligibility">
                                                <div>
                                                    <p><input type="radio" name="eligibility-customer" onClick={(e) => { setAddSpecific(addSpecific === "allcust" ? "" : "allcust") }} /> All Customers</p>
                                                </div>
                                                <div>
                                                    <p><input type="radio" name="eligibility-customer" onClick={(e) => { setAddSpecific(addSpecific === "segments" ? "" : "segments") }} /> Specific Customers Segments</p>
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
                                                <div>
                                                    <p><input type="radio" name="eligibility-customer" onClick={(e) => { setAddSpecific(addSpecific === "Specificc" ? "" : "Specificc") }} /> Specific Customers</p>
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
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    type !== "amount_of_orders" &&
                                    <div className="add-left-product mt-3">
                                        <h6>Maximum Discount Uses</h6>
                                        <div className="maximum-discount-uses">
                                            <div className="discount-uses">
                                                <div>
                                                    <p><input type="checkbox" name="discout-use-on" onClick={(e) => { setAddLimitUse(addLimitUse === "limitnumber" ? "" : "limitnumber") }} /> Limit Number Of Times this Discount can be used in total</p>
                                                    <div className={`dicount-add-uses mt-1 ${addLimitUse === "limitnumber" ? "amout-add-open" : "amout-add-close"}`}>
                                                        <div className="row">
                                                            <div className="col s12 m6 l6 xl3">
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p><input type="checkbox" name="discout-use-on" /> Limit to one use per Customer</p>
                                                </div>
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
                                                    <div className="date-input">
                                                        <label>Start Date</label>
                                                        <input type="date" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="set-end-date">
                                                <div className="open-end-date">
                                                    <p><input type="checkbox" onClick={() => { setEndDate(!endDate) }} /> Set End Date</p>
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
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2">Save</button>
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