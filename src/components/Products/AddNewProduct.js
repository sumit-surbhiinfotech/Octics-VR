import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import 'antd/dist/antd.css';
import { Badge, Button, Radio, Select } from 'antd';
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

const AddNewProduct = () => {
    const [list, setList] = useState([]);
    const [colorOption, setColorOption] = useState([""]);
    const [value, setValue] = useState("");
    const [openOption, setOpenOption] = useState();
    const [openValue, setOpenValue] = useState("");
    const [newValue, setNewValue] = useState("");
    const [addSize, setAddSize] = useState("");
    const [size, setSize] = useState('middle');
    const [highlight, setHighlight] = useState(false);
    const [highlightNew, setHighlightNew] = useState(false);
    const [preview, setPreview] = useState("");
    const [previewNew, setPreviewNew] = useState("");
    const [files, setFiles] = useState([]);
    const [filesNew, setFilesNew] = useState([]);
    const [drop, setDrop] = useState(false);
    const [dropNew, setDropNew] = useState(false);
    const [addButton, setAddButton] = useState([""]);
    const [addVariants, setAddVariants] = useState();
    const [editOpen, setEditOpen] = useState();
    const [addNewOption, setAddNewOption] = useState([{
        name: "",
        value: ['']
    }]);
    const { Option } = Select;
    const children = [<Option key={1}>test1</Option>, <Option key={2}>test2</Option>, <Option key={3}>test3</Option>, <Option key={4}>test4</Option>, <Option key={5}>test5</Option>];


    const addToList = (index) => {
        let tempArr = list.filter((item, i) => i !== index);

        tempArr.push(value);

        setList(tempArr);

        setValue("");

    };

    const addTwo = () => {
        addToList()

        setAddVariants(!addVariants === "add-variants" ? "" : "add-variants")
        handleAdd3()
    }
    const addOnChange = (e, index) => {
        setValue(e.target.value)
        handleChange(index, e.target.value)
    }
    const handleChange = (index, value1, mainIndex) => {
        console.log("index, value, mainIndex", index, value1, mainIndex)
        let temp = [...addNewOption];
        let obj = temp[mainIndex];
        console.log("54564", obj)
        obj.value[index] = value1;
        temp[mainIndex] = obj;
        console.log("dfsbfhj", temp)
        // setColorOption(temp);
    }

    const handleAdd = () => {
        let temp = [...colorOption];
        temp.push("");
        setColorOption(temp);
    }

    const handleRemove = (index) => {
        let temp = [...colorOption];
        temp.splice(index, 1);
        setColorOption(temp);
    }


    const handleRemove2 = (index) => {
        let temp = [...colorOption];
        temp.splice(index, 1);
        setColorOption(temp);
    }

    const handleAdd2 = () => {
        let temp = [...addNewOption];
        temp.push({
            name: "",
            value: []
        });
        setAddNewOption(temp);
    }
    console.log("addNewOption", addNewOption);


    const handleAdd3 = () => {
        let temp = [...addButton];
        temp.push("");
        setAddButton(temp)
    }

    const dropzones = [...document.querySelectorAll(".dropzone")];
    const draggables = [...document.querySelectorAll(".draggable")];

    function getDragAfterElement(container, y) {
        const draggableElements = [
            ...container.querySelectorAll(".draggable:not(.is-dragging)")
        ];

        return draggableElements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;

                if (offset < 0 && offset > closest.offset) {
                    return {
                        offset,
                        element: child
                    };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        ).element;
    }

    draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", (e) => {
            draggable.classList.add("is-dragging");
        });

        draggable.addEventListener("dragend", (e) => {
            draggable.classList.remove("is-dragging");
        });
    });

    dropzones.forEach((zone) => {
        zone.addEventListener("dragover", (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(zone, e.clientY);
            const draggable = document.querySelector(".is-dragging");
            if (afterElement === null) {
                zone.appendChild(draggable);
            } else {
                zone.insertBefore(draggable, afterElement);
            }
        });
    });

    const handleEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("enter!");

        preview === "" && setHighlight(true);
    };
    const handleEnterNew = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("enter!");

        preview === "" && setHighlightNew(true);
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

    };
    const handleUploadNew = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("dropNew!");
        setHighlight(false);
        setDropNew(true);
        console.log("rfdscxsdf", e.target.files);
        for (let i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            uploadFileNew(file);
        }

    };

    function uploadFile(file) {
        console.log("fesdcxz", file);
        const reader = new FileReader();
        reader.readAsBinaryString(file);


        reader.onload = () => {
            // this is the base64 data
            const fileRes = btoa(reader.result);
            console.log(`data:image/jpg;base64,${fileRes}`);
            let temp = files;
            temp.push({ url: `data:image/jpg;base64,${fileRes}`, type: file.name.split('.')[1] });
            setFiles(temp);
            setPreview(`data:image/jpg;base64,${fileRes}`);
        };

        reader.onerror = () => {
            console.log("There is a problem while uploading...");
        };
    }
    console.log("fesdcsffs", files)
    function uploadFileNew(file) {
        const reader = new FileReader();
        reader.readAsBinaryString(file);


        reader.onload = () => {
            // this is the base64 data
            const fileRes = btoa(reader.result);
            console.log(`data:image/jpg;base64,${fileRes}`);
            let temp = filesNew;
            temp.push(`data:image/jpg;base64,${fileRes}`);
            setFilesNew(temp);
            setPreviewNew(`data:image/jpg;base64,${fileRes}`);
        };

        reader.onerror = () => {
            console.log("There is a problem while uploading...");
        };
    }

    const handleOptionSelect = (val, index) => {
        console.log("index", index)
        let temp = [...addNewOption];
        let obj = temp[index];
        console.log("obj", obj)
        obj.name = val;
        temp[index] = obj;
        console.log("temp", temp[index])
        setAddNewOption(temp);
    }
    console.log("dcvdfs", addNewOption)


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
                            console.log("data", file)
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
    const [items, setItems] = useState([
        { itemName: 'item 1', quantity: 0, isSelected: false },
        // { itemName: 'item 2', quantity: 3, isSelected: true },
        // { itemName: 'item 3', quantity: 2, isSelected: false },
    ]);
    const handleQuantityIncrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity++;

        setItems(newItems);
    };
    const handleQuantityDecrease = (index) => {
        const newItems = [...items];

        newItems[index].quantity--;

        setItems(newItems);
    };


    return (

        <>
            <Header />
            <Sidebar />
            <div id="main">
                <section className="add-new-product-section animate fadeUp ">
                    <div className="container">

                        <div className="row mt-1">
                            <div className="row">
                                <div className="col s12 l6 xl2"></div>
                                <div className="col s12 l6 xl5">
                                    <h3 className="new-product-title">Add Product</h3>
                                </div>
                                <div className="col s12 l6 xl3"></div>
                            </div>
                            <div className="col s12   xl2"></div>
                            <div className="col s12 m6  xl5">

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
                                <div className="row">
                                    <div className="col s12   xl6">
                                        <div className="add-left-product-one mt-3">
                                            <h5>Avtar 3d Image</h5>
                                            <div className="for-avter">
                                                <form className="my-form add-new-product">
                                                    <div className="field" align="left">
                                                        <h5>Upload  Files</h5>
                                                        <input type="file" id="files" name="files[]" />

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col s12   xl6">
                                        <div className="add-left-product-one mt-3">
                                            <h5>Avtar 3d Image</h5>
                                            <div className="for-avter">
                                                <form className="my-form add-new-product">
                                                    <div className="field" align="left">
                                                        <h5>Upload  Files</h5>
                                                        <input type="file" id="files" name="files[]" />
                                                    </div>
                                                </form>
                                            </div>
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
                                                <input id="vehicle1" type="checkbox" onClick={() => { setOpenOption(!openOption) }} />
                                                <label htmlFor="vehicle1"> This Product Has  Options, Like Size Or Color</label>
                                            </div>
                                            <div className={`option-name  ${openOption == true ? "open-option-open" : "open-option-close"}`}>
                                                <hr />
                                                {addNewOption && addNewOption.map((item, temp) => (

                                                    <div key={temp} className={`new-code-foe-size  `} >
                                                        <div className="row">
                                                            {
                                                                console.log("dsxcdxcz", temp)
                                                            }
                                                            <div className="col s12  l6 xl2"></div>
                                                            <div className="col s12 l6 xl8 mb-3">
                                                                <div className={``}>
                                                                    <div className={`mb-3 `}>
                                                                        <div className={`option-one  `} >
                                                                            <label>Option Name</label>
                                                                            {/* <select className="option-select" onChange={(e) => { console.log("sdaxczdzscx ", e.target.value, temp) }} value={item.name}> */}
                                                                            <select className="option-select" onChange={(e) => { handleOptionSelect(e.target.value, temp) }}>
                                                                                <option value="">Select</option>
                                                                                <option value="color">Color</option>
                                                                                <option value="size">Size</option>
                                                                            </select>
                                                                        </div>
                                                                        {<div className={`option-value mt-4 `}>
                                                                            <label>Option Value</label>
                                                                            <div className="add-tital">
                                                                                <div className="plue-button">
                                                                                    {/* <input type="text"></input> */}
                                                                                    <div className="row">
                                                                                        <div className="col s8  l6 xl12">
                                                                                            <div className="add-remover-input">
                                                                                                {console.log("sde", item.value)}
                                                                                                {
                                                                                                    item.value && item.value.map((optionItem, ind) => (
                                                                                                        <div key={temp} className="new-size-color-add-remove">
                                                                                                            <input className="mb-2 " type="type" value={optionItem} onChange={(e) => { handleChange(ind, e.target.value, temp); console.log("dsjbjf", ind) }} />
                                                                                                            {
                                                                                                                temp == item.value.length - 1 && <>
                                                                                                                    <button className="plus-btn" type='button' onClick={() => { handleAdd(temp); console.log("fsfsf", temp) }}>+</button> </>
                                                                                                            }
                                                                                                            {
                                                                                                                temp !== 0 && <button className="remove-btn" type='button' onClick={() => { handleRemove(temp) }}>-</button>
                                                                                                            }
                                                                                                        </div>
                                                                                                    ))
                                                                                                }
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div>
                                                                                {/* {
                                                                                    addButton && addButton.map((item, index) => (
                                                                                        <div key={index}>
                                                                                            {
                                                                                                index == addButton.length - 1 && <>
                                                                                                    <button className="btn gradient-45deg-green-teal"
                                                                                                        onClick={addTwo}
                                                                                                    //  onClick={() => { setAddSize(!addSize === "add-color" ? "" : "add-color") }}

                                                                                                    >Add</button>
                                                                                                </>
                                                                                            }
                                                                                        </div>
                                                                                    ))
                                                                                } */}
                                                                            </div>
                                                                        </div>}
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col s12  l6 xl2"></div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className="col s12  l6 xl2"></div>
                                                            <div className="col s12 l6 xl8">
                                                                {
                                                                    temp == addButton && <>
                                                                        <div className="row">
                                                                            <div className="col s12 l6 xl6">

                                                                                <div className={`all-size-color `}>
                                                                                    <div className="size-list">
                                                                                        <h6>Size Added</h6>
                                                                                        <ul>
                                                                                            {item.value.length > 0 &&

                                                                                                item.value.map((item, i) => <li>{item} </li>)}
                                                                                            {console.log("fdsbhfsf", item)}
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* <div className="col s12 l6 xl6">
                                                                                <div className={`edit-Size `}>
                                                                                    <span >Edit</span>
                                                                                </div>
                                                                            </div> */}
                                                                        </div>

                                                                    </>
                                                                }
                                                            </div>
                                                            <div className="col s12  l6 xl2"></div>
                                                        </div>
                                                        <hr />
                                                        <div className="add-new-option mt-3">
                                                            <div className="">
                                                                {
                                                                    <>
                                                                        <h6 className="new-filed" onClick={handleAdd2} >Add New Option +</h6></>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {
                                                    console.log("colorOption", colorOption)
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 pb-5">
                                    {
                                        addButton && <>
                                            <div className={`add-left-product-one mt-2 `}>
                                                <div>
                                                    <h5>Variants</h5>
                                                </div>
                                                <div className="variants-table">
                                                    <div >
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <th></th>
                                                                    <th>Variant</th>
                                                                    <th>Price</th>
                                                                    <th>Quantity</th>
                                                                    <th>SKU</th>
                                                                    <th>Edit</th>
                                                                </tr>
                                                                <tr>
                                                                    <td><div className="upaload-new-short-image">
                                                                        <div
                                                                            onDragEnter={(e) => handleEnterNew(e)}
                                                                            onDragLeave={(e) => handleLeave(e)}
                                                                            onDragOver={(e) => handleOver(e)}
                                                                            onDrop={(e) => handleUploadNew(e)}
                                                                            className={`upload${highlightNew ? " is-highlight" : dropNew ? " is-drop" : ""
                                                                                }`}
                                                                            style={{ backgroundImage: `url(${previewNew})` }}
                                                                        >
                                                                            <form className="my-form">
                                                                                <p>
                                                                                    <img src="images/plus-icon-plus-svg-png-icon-download-1.png" />
                                                                                </p>
                                                                                <div className="upload-button">
                                                                                    <input
                                                                                        type="file"
                                                                                        className="upload-file"
                                                                                        accept="image/*"
                                                                                        onChange={(e) => handleUploadNew(e)}
                                                                                    />
                                                                                    {/* <button className="button">+</button> */}
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div></td>
                                                                    {/* {colorOption.length > 0 &&
                                                                        colorOption.map((item, i) => <td>{item}</td>)} */}
                                                                    <td>
                                                                        M
                                                                    </td>
                                                                    <td>
                                                                        <div className="add-tital new-input-text">
                                                                            <input type="text" placeholder=" $ 0.00"></input>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="quantity-btn">
                                                                            <div className="qty-input">
                                                                                {items.map((item, index) => (
                                                                                    <div className="qty-input">
                                                                                        <button className="qty-count qty-count--minus" data-action="minus" type="button" onClick={() => handleQuantityDecrease(index)} >-</button>
                                                                                        <input className="product-qty" type="number" name="product-qty" min="0" max="10" value={item.quantity} readOnly />
                                                                                        <button className="qty-count qty-count--add" data-action="add" type="button" onClick={() => handleQuantityIncrease(index)} >+</button>
                                                                                    </div>
                                                                                ))}
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
                                        </>
                                    }
                                </div>

                            </div>
                            <div className="col s12 m6 xl3">
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
                                <div className="pablish-btn mt-5 mb-5 ">
                                    <button className="mt-2 ripple3 btn gradient-45deg-green-teal" type="button">Submit</button>
                                </div>
                                <div className="mb-5">
                                    &nbsp;
                                </div>



                            </div>
                            <div className="col s12  xl2"></div>
                        </div>

                    </div>

                </section>
            </div >



            <Footer />
        </>
    )
}

export default AddNewProduct;