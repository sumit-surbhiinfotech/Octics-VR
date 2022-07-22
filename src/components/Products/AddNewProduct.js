import React, { useEffect, useState, useRef } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import 'antd/dist/antd.css';
import { Select } from 'antd';
import $ from "jquery";
import { TileLayout } from "@progress/kendo-react-layout";
import { uploadImageOfProduct, getCollections, createProduct, getSpecificProduct, updateProduct } from "../../action";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const editorRef = useRef();
    const textarea = React.createRef();
    const [list, setList] = useState([]);
    const [colorOption, setColorOption] = useState([""]);
    const [value, setValue] = useState("");
    const [openOption, setOpenOption] = useState();
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
    const [addNewOption, setAddNewOption] = useState([{
        name: "",
        value: ['']
    }]);
    const [varientList, setVarientList] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [sku, setSku] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [comparePrice, setComparePrice] = useState(0);
    const [type, setType] = useState("");
    const [category, setCategory] = useState([]);
    const [tags, setTags] = useState([]);
    const [handle, setHandle] = useState("");
    const [images, setImages] = useState([]);
    const [avtarImage, setAvtarImage] = useState("");
    const [hangerImage, setHangerImage] = useState("");
    const [error, setError] = useState({});
    const [collectionData, setCollectionData] = useState([]);
    const { Option } = Select;
    const children = [<Option key={1}>test1</Option>, <Option key={2}>test2</Option>, <Option key={3}>test3</Option>, <Option key={4}>test4</Option>, <Option key={5}>test5</Option>];
    const [edit, setEdit] = useState(false);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        getCollectionData();
        let url = window.location.href;
        let slug = url.split('=');
        if (slug.length >= 2) {
            setEdit(true);
            let body = {
                id: slug[1]
            }
            getSpecificProduct(body).then((res) => {
                if (res.data) {
                    setEditData(res.data.data);
                    handlesetEditData(res.data.data);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }, []);

    const handlesetEditData = (data) => {
        setTitle(data?.title)
        setDescription(data?.description)
        setHtml(data?.description)
        setImages(data?.images)
        setHangerImage(data?.hanger_image)
        setAvtarImage(data?.avtar_image)
        setCategory(data?.category);
        setComparePrice(data?.compare_price);
        setPrice(data?.price);
        setAddNewOption(data?.options);
        setQuantity(data?.quantity);
        setType(data?.type);
        setSku(data?.sku);
        setTags(data?.tags);
        setVarientList(data?.varient);
        setHandle(data?.handle)
        setOpenOption(true);
        document.getElementById('vehicle1').checked = true;
    }

    const setHtml = (html) => {
        if (editorRef.current) {
            const view = editorRef.current.view;
            if (view) {
                EditorUtils.setHtml(view, html)
            }
        }
    };

    const handleChange = (index, value1, mainIndex) => {
        // console.log("index, value, mainIndex", index, value1, mainIndex)
        let temp = [...addNewOption];
        let obj = temp[mainIndex];
        // console.log("54564", obj)
        obj.value[index] = value1;
        temp[mainIndex] = obj;
        setColorOption(temp);
    }

    const handleAdd = (mainIndex) => {
        let temp = [...addNewOption];
        let obj = temp[mainIndex];
        obj.value.push('');
        temp[mainIndex] = obj;
        setColorOption(temp);
    }

    const handleRemove = (mainIndex, index) => {
        let temp = [...addNewOption];
        let obj = temp[mainIndex];
        obj.value.splice(index, 1);
        temp[mainIndex] = obj;
        setColorOption(temp);
    }

    const handleAdd2 = () => {
        let temp = [...addNewOption];
        temp.push({
            name: "",
            value: ['']
        });
        setAddNewOption(temp);
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

    const handleUploadNew = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
        setDropNew(true);
        for (let i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            uploadFileNew(file);
        }

    };

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
        let temp = [...addNewOption];
        let obj = temp[index];
        obj.name = val;
        temp[index] = obj;
        setAddNewOption(temp);
    }

    const handleUploadImages = (e) => {
        let files = e.target.files;
        // console.log("files", files[0], files[1])
        console.log("typeof files", typeof files, files);
        for (const key in files) {
            if (Object.hasOwnProperty.call(files, key)) {
                const element = files[key];
                let file = element
                let body = new FormData();
                body.append('file', file);
                uploadImageOfProduct(body).then((res) => {
                    let temp = [...images];
                    temp.push(res.data.data);
                    setImages(temp);
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }

    const getCollectionData = () => {
        getCollections().then((res) => {
            if (res.data) {
                setCollectionData(res.data.data);
            }
        })
    }

    const handleAvtarUpload = (e) => {
        let file = e.target.files[0];
        let body = new FormData();
        body.append('file', file);
        uploadImageOfProduct(body).then((res) => {
            if (res.data.data) {
                setAvtarImage(res.data.data.original)
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleHangerUpload = (e) => {
        let file = e.target.files[0];
        let body = new FormData();
        body.append('file', file);
        uploadImageOfProduct(body).then((res) => {
            if (res.data.data) {
                setHangerImage(res.data.data.original)
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (title.length == 0) {
            validate = false;
            err.title = "Please Enter Product Title.";
        }
        setError(err);
        if (validate) {

            let body = {
                title: title,
                description: description,
                images: images,
                avtar_image: avtarImage,
                hanger_image: hangerImage,
                sku: sku,
                quantity: parseInt(quantity),
                price: parseInt(price),
                compare_price: parseInt(comparePrice),
                type: type,
                category: category,
                options: addNewOption,
                tags: tags,
                handle: handle,
                varient: varientList
            }
            if (!(varientList.length > 0)) {
                let tempVarient = {};
                tempVarient.varient_id = makeid(25);
                tempVarient.name = title;
                tempVarient.image_url = [];
                tempVarient.price = 0;
                tempVarient.sku = '';
                tempVarient.quantity = 0;
                body.varient = tempVarient
            }
            if (edit) {
                body._id = editData._id;
                updateProduct(body).then((res) => {
                    if (res.data) {
                        navigate('/product-listing')
                    }
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                createProduct(body).then((res) => {
                    if (res.data) {
                        navigate('/product-listing')
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }

    const handleQuantityIncrease = (index) => {
        const newItems = [...varientList];
        newItems[index].quantity++;
        setVarientList(newItems);
    };
    const handleQuantityDecrease = (index) => {
        const newItems = [...varientList];
        if (newItems[index].quantity > 0) {
            newItems[index].quantity--;
        }
        setVarientList(newItems);
    };
    const handleRemoveOptionBlock = (index) => {
        let temp = [...addNewOption];
        temp.splice(index, 1);
        setAddNewOption(temp)
    }
    const makeVarient = () => {
        let arr = [];
        let attributes = {};
        addNewOption.map((item) => {
            attributes[item.name] = item.value;
        })

        for (const [attr, values] of Object.entries(attributes))
            arr.push(values.map(v => ({ [attr]: v })));

        arr = arr.reduce((a, b) => a.flatMap(d => b.map(e => ({ ...d, ...e }))));

        console.log("arr", arr);
        let varient = [];
        arr.map((item) => {
            let temp = {};
            let str = '';
            Object.values(item).map((specificVal, index) => {
                str += specificVal;
                if (index !== (Object.values(item).length - 1)) {
                    str += ' / ';
                }
            });
            temp.varient_id = makeid(25);
            temp.name = str;
            temp.image_url = [];
            temp.price = 0;
            temp.sku = '';
            temp.quantity = 0;
            varient.push(temp);
        })
        setVarientList(varient);
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    const handleChangeVarient = (index, name, value) => {
        let temp = [...varientList];
        let obj = temp[index];
        obj[name] = value;
        temp[index] = obj;
        setVarientList(temp);
    }

    const getHtml = () => {
        if (editorRef.current) {
            const view = editorRef.current.view;
            if (view) {
                setDescription(EditorUtils.getHtml(view.state))
            }
        }
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
                                    <h3 className="new-product-title">{edit ? 'Edit Product' : 'Add Product'}</h3>
                                </div>
                                <div className="col s12 l6 xl3"></div>
                            </div>
                            <div className="col s12   xl2"></div>
                            <div className="col s12 m6  xl5">

                                <div className="add-left-product">
                                    <div className="title-product">
                                        <h5>Title</h5>
                                        <div className="add-tital">
                                            <input type="text" placeholder="Add Product Name" onChange={(e) => { setTitle(e.target.value); }} value={title}></input>
                                        </div>
                                        {
                                            error && error.title &&
                                            <div className="error">
                                                {error.title}
                                            </div>
                                        }
                                    </div>
                                    <div className="description-product">
                                        <h5>
                                            Description
                                        </h5>
                                        <div className="text-editer">
                                            <Editor
                                                ref={editorRef}
                                                tools={[
                                                    [Bold, Italic, Underline],
                                                    [Undo, Redo],
                                                    [Link, Unlink],
                                                    [AlignLeft, AlignCenter, AlignRight],
                                                    [OrderedList, UnorderedList, Indent, Outdent],
                                                ]}
                                                contentStyle={{ height: 320 }}
                                                onChange={() => { getHtml(); }}
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
                                                    <input type="file" id="files" name="files[]" multiple onChange={(e) => { handleUploadImages(e); }} />
                                                </div>
                                            </form>
                                            {
                                                images && images.map((imageItem, imageIndex) => (
                                                    <img style={{ "height": "100px", "width": "100px" }} src={imageItem?.original} />
                                                ))
                                            }
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
                                                        <input type="file" id="files" name="files[]" onChange={(e) => { handleAvtarUpload(e); }} />

                                                    </div>
                                                </form>
                                            </div>
                                            {
                                                avtarImage && <img style={{ "height": "100px", "width": "100px" }} src={avtarImage} />
                                            }
                                        </div>
                                    </div>
                                    <div className="col s12 xl6">
                                        <div className="add-left-product-one mt-3">
                                            <h5>Hanger 3d Image</h5>
                                            <div className="for-avter">
                                                <form className="my-form add-new-product">
                                                    <div className="field" align="left">
                                                        <h5>Upload  Files</h5>
                                                        <input type="file" id="files" name="files[]" onChange={(e) => { handleHangerUpload(e); }} />
                                                    </div>
                                                </form>
                                                <div>
                                                    {
                                                        hangerImage && <img style={{ "height": "100px", "width": "100px" }} src={hangerImage} />
                                                    }
                                                </div>
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
                                                                                                {/* {console.log("sdedefs", )} */}
                                                                                                {
                                                                                                    item.value && item.value.map((optionItem, ind) => (
                                                                                                        <div key={temp} className="new-size-color-add-remove">
                                                                                                            <input className="mb-2 " type="type" value={optionItem} onChange={(e) => { handleChange(ind, e.target.value, temp); console.log("dsjbjf", ind) }} />
                                                                                                            {
                                                                                                                ind == (item.value.length - 1) && <>
                                                                                                                    <button className="plus-btn" type='button' onClick={() => { handleAdd(temp); console.log("fsfsf", temp) }}>+</button> </>
                                                                                                            }
                                                                                                            {
                                                                                                                ind !== 0 && <button className="remove-btn" type='button' onClick={() => { handleRemove(temp, ind) }}>-</button>
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
                                                                            </div>
                                                                        </div>}
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="col s12  l6 xl2">
                                                                {temp !== 0 && <button type="button" onClick={() => { handleRemoveOptionBlock(temp) }}>Remove</button>}
                                                            </div>
                                                        </div>
                                                        <div className="row ">
                                                            <div className="col s12  l6 xl2"></div>
                                                            <div className="col s12 l6 xl8">

                                                                <div className="row">
                                                                    <div className="col s12 l6 xl6">

                                                                        <div className={`all-size-color `}>
                                                                            <div className="size-list">
                                                                                <h6>{item.name && item.name + ' Added'}</h6>
                                                                                <ul>
                                                                                    {item.value.length > 0 &&

                                                                                        item.value.map((item, i) => <li>{item} </li>)}
                                                                                    {/* {console.log("fdsbhfsf", item)} */}
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                            <div className="col s12  l6 xl2"></div>
                                                        </div>
                                                        <hr />
                                                        <div className="add-new-option mt-3">
                                                            <div className="">
                                                                {temp == (addNewOption.length - 1) &&
                                                                    <>
                                                                        <h6 className="new-filed" onClick={handleAdd2} >Add New Option +</h6></>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5 pb-5">
                                    <button type="button" onClick={makeVarient}>make variants</button>
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
                                                        </tr>
                                                        {
                                                            varientList && varientList.length > 0 && varientList.map((varientItem, varientIndex) => (
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
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div></td>
                                                                    <td>
                                                                        {varientItem.name}
                                                                    </td>
                                                                    <td>
                                                                        <div className="add-tital new-input-text">
                                                                            <input type="text" placeholder=" $ 0.00" value={varientItem.price} onChange={(e) => { handleChangeVarient(varientIndex, 'price', e.target.value) }}></input>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="quantity-btn">
                                                                            <div className="qty-input">

                                                                                <div className="qty-input">
                                                                                    <button className="qty-count qty-count--minus" data-action="minus" type="button" onClick={() => handleQuantityDecrease(varientIndex)} >-</button>
                                                                                    <input className="product-qty" type="number" name="product-qty" min="0" max="10" readOnly value={varientItem.quantity} />
                                                                                    <button className="qty-count qty-count--add" data-action="add" type="button" onClick={() => handleQuantityIncrease(varientIndex)} >+</button>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="add-tital new-input-text">
                                                                            <input type="text" placeholder="SKU" value={varientItem.sku} onChange={(e) => { handleChangeVarient(varientIndex, 'sku', e.target.value) }}></input>
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
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
                                                    <input type="text" placeholder="" onChange={(e) => { setSku(e.target.value); }} value={sku}></input>
                                                </div>
                                            </div>
                                            <div className="col s12  l6 xl6">
                                                <div className="add-tital">
                                                    <label>Quantity</label>
                                                    <input type="text" placeholder=" 0" onChange={(e) => { setQuantity(e.target.value); }} value={quantity}></input>
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
                                                    <input type="text" placeholder="$ 0.00" onChange={(e) => { setPrice(e.target.value); }} value={price}></input>
                                                </div>
                                            </div>
                                            <div className="col s12  l6 xl6">
                                                <div className="add-tital">
                                                    <label>Compare at Price</label>
                                                    <input type="text" placeholder="$ 0.00" onChange={(e) => { setComparePrice(e.target.value); }} value={comparePrice}></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 x12">
                                    <div className="title-product">
                                        <h5>Hanlde</h5>
                                        <div className="add-tital">
                                            <input type="text" placeholder="Add Handle Name" onChange={(e) => { setHandle(e.target.value); }} value={handle}></input>
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
                                                        defaultValue={[]}
                                                        onChange={(e) => { setCategory(e) }}
                                                        style={{
                                                            width: '100%',
                                                        }}
                                                        value={category}
                                                    >
                                                        {
                                                            collectionData && collectionData.map((collectionItem, collectionIndex) => (
                                                                <Option value={collectionItem._id}>{collectionItem.title}</Option>
                                                            ))
                                                        }
                                                    </Select>
                                                </div>
                                            </div>
                                            {console.log("scxz ", category)}
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
                                                    defaultValue={[]}
                                                    onChange={(e) => { setTags(e) }}
                                                    style={{
                                                        width: '100%',
                                                    }}
                                                    value={tags}
                                                >
                                                    <Option key={1}>Latest</Option>
                                                    <Option key={2}>Electronic</Option>
                                                </Select>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="pablish-btn mt-5 mb-5 ">
                                    <button className="mt-2 ripple3 btn gradient-45deg-green-teal" type="button" onClick={handleSubmit}>Submit</button>
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