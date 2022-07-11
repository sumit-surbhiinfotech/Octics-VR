import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools } from "@progress/kendo-react-editor";
// import content from "./content";
import 'antd/dist/antd.css';
import { Radio, Select } from 'antd';
import $ from "jquery";


const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink,
} = EditorTools;

const EditProduct = () => {
    const [openOption, setOpenOption] = useState();
    const [openValue, setOpenValue] = useState("");
    const { Option } = Select;
    const children = [<Option key={1}>test1</Option>, <Option key={2}>test2</Option>, <Option key={3}>test3</Option>, <Option key={4}>test4</Option>, <Option key={5}>test5</Option>];
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
    useEffect(() => {
        $(document).ready(function () {
            if (window.File && window.FileList && window.FileReader) {
                $("#files").on("change", function (e) {
                    var files = e.target.files,
                        filesLength = files.length;
                    for (var i = 0; i < filesLength; i++) {
                        var f = files[i]
                        var fileReader = new FileReader();
                        fileReader.onload = (function (e) {
                            var file = e.target;
                            $("<span class=\"pip\">" +
                                "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
                                "<br/><span class=\"remove\">Remove image</span>" +
                                "</span>").insertAfter("#files");
                            $(".remove").click(function () {
                                $(this).parent(".pip").remove();
                            });

                        });
                        fileReader.readAsDataURL(f);
                    }
                    console.log("files", files);
                });
            } else {
                alert("Your browser doesn't support to File API")
            }
        });

    })


    return (

        <>
            <Header />
            <Sidebar />
            <div id="main">
                <section className="add-new-product-section animate fadeUp">
                    <div className="container">
                        <div className="row mt-1">
                            <div className="row">
                                <div className="col s12 l6 xl2"></div>
                                <div className="col s12 l6 xl5">
                                    <h3 className="new-product-title">Product Name</h3>
                                </div>
                                <div className="col s12 l6 xl3"></div>
                            </div>

                            <div className="col s12  l6 xl2"></div>
                            <div className="col s12 m6 l6 xl5">
                                <div className="add-left-product">
                                    <div className="title-product">
                                        <h5>Title</h5>
                                        <div className="add-tital">
                                            <input type="text" placeholder="Add Product Name"></input>
                                        </div>
                                    </div>
                                    <div className="description-product">
                                        <h5>
                                            Description
                                        </h5>
                                        <div className="text-editer">
                                            <Editor
                                                tools={[
                                                    [Bold, Italic, Underline],
                                                    [Undo, Redo],
                                                    [Link, Unlink],
                                                    [AlignLeft, AlignCenter, AlignRight],
                                                    [OrderedList, UnorderedList, Indent, Outdent],
                                                ]}
                                                contentStyle={{ height: 320 }}
                                            // defaultContent={content}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="add-left-product-one mt-2">
                                    <div className="image-upload">
                                        <h5>Images</h5>
                                        <div className="image-new-upload">
                                            <form className="my-form add-new-product">
                                                <div className="field" align="left">
                                                    <h5>Upload your Media Files</h5>
                                                    <input type="file" id="files" name="files[]" multiple />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="add-left-product-one mt-2">
                                    <div>
                                        <h5>Options</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="options-select-section" >
                                                {/* <Checkbox onChange={onChange}>Checkbox</Checkbox>; */}
                                                <input type="checkbox" id="" name="" value="" onClick={() => { setOpenOption(!openOption) }} />
                                                <label htmlFor="vehicle1"> This Product Has  Options, Like Size Or Color</label>
                                            </div>
                                            <div className={`option-name  ${openOption == true ? "open-option-open" : "open-option-close"}`}>
                                                <hr />
                                                <div className="row mt-4">
                                                    <div className="col s12  l6 xl2"></div>
                                                    <div className="col s12 l6 xl8">
                                                        <div className="option-one">
                                                            <label>Option Name</label>
                                                            <select className="option-select" onChange={(e) => { setOpenValue(e.target.value); }}>
                                                                <option value="">Select</option>
                                                                <option value="color">Color</option>
                                                                <option value="size">Size</option>
                                                            </select>
                                                        </div>
                                                        <div className={`option-value mt-4 ${openValue !== "" ? "open-value-open" : "open-value-close"}`}>
                                                            <label>Option Value</label>
                                                            <div className="add-tital">
                                                                <input type="text"></input>
                                                                <input type="text"></input>
                                                            </div>
                                                            <div>
                                                                <button className="btn gradient-45deg-green-teal">Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col s12  l6 xl2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 pb-5">
                                    <div className="add-left-product-one mt-2">
                                        <div>
                                            <h5>Variants</h5>
                                        </div>
                                        <div className="variants-table">
                                            <div >
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Variant</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>SKU</th>
                                                            <th>Edit</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Red</td>
                                                            <td>
                                                                <div className="add-tital new-input-text">
                                                                    <input type="text" placeholder=" $ 0.00"></input>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="quantity-btn">
                                                                    <div className="qty-input">
                                                                        <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                                                        <input className="product-qty" type="number" name="product-qty" min="0" readOnly max="10" value="1" />
                                                                        <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="add-tital new-input-text">
                                                                    <input type="text" placeholder="SKU"></input>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button className="btn gradient-45deg-green-teal">Edit</button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Green</td>
                                                            <td>
                                                                <div className="add-tital new-input-text">
                                                                    <input type="text" placeholder=" $ 0.00"></input>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="quantity-btn">
                                                                    <div className="qty-input">
                                                                        <button className="qty-count qty-count--minus" data-action="minus" type="button">-</button>
                                                                        <input className="product-qty" type="number" name="product-qty" min="0" readOnly max="10" value="1" />
                                                                        <button className="qty-count qty-count--add" data-action="add" type="button">+</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="add-tital new-input-text">
                                                                    <input type="text" placeholder="SKU"></input>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button className="btn gradient-45deg-green-teal">Edit</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6 xl3">
                                <div className="add-left-product-one">
                                    <div>
                                        <h5>Inventory</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col s12  l6 xl6">
                                                <div className="add-tital">
                                                    <label> SKU</label>
                                                    <input type="text" placeholder=""></input>
                                                </div>
                                            </div>
                                            <div className="col s12  l6 xl6">
                                                <div className="add-tital">
                                                    <label>Quantity</label>
                                                    <input type="text" placeholder=" 0"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-left-product-one mt-2 ">
                                    <div>
                                        <h5>Pricing</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col s12  l6 xl6">
                                                <div className="add-tital">
                                                    <label> Price</label>
                                                    <input type="text" placeholder="$ 0.00"></input>
                                                </div>
                                            </div>
                                            <div className="col s12  l6 xl6">
                                                <div className="add-tital">
                                                    <label>Compare at Price</label>
                                                    <input type="text" placeholder="$ 0.00"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-left-product-one mt-2 ">
                                    <div>
                                        <h5>Category</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col s12  l6 xl12">
                                                <div className="add-tital">
                                                    <Select
                                                        mode="multiple"
                                                        size={size}
                                                        placeholder="Please select"
                                                        defaultValue={['a10', 'c12']}
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
                                <div className="add-left-product-one mt-2 ">
                                    <div>
                                        <h5>Collection</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col s12  l6 xl12">
                                                <div className="add-tital">
                                                    <Select
                                                        mode="multiple"
                                                        size={size}
                                                        placeholder="Please select"
                                                        defaultValue={['a10', 'c12']}
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
                                <div className="add-left-product-one mt-2">
                                    <div>
                                        <h5>Tags</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col s12  l6 xl12">
                                                <Select
                                                    mode="tags"
                                                    size={size}
                                                    placeholder="Please select"
                                                    defaultValue={['a10', 'c12']}
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
                                <div className="pablish-btn mt-5 mb-5">
                                    <button className="mt-2 ripple3 btn gradient-45deg-green-teal" type="button">Update</button>
                                </div>
                                <div className="mb-5">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="col s12 l6 xl2"></div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    )
}

export default EditProduct;