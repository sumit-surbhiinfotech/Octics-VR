import React, { useEffect, useState, useRef } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";
import 'antd/dist/antd.css';
import { Select } from "antd";
import { createCollection, editCollection, getSpecificCollection, uploadImageOfCollection } from "../../action";
import { toast } from "react-toastify";
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

const CreateCollections = () => {
    const navigate = useNavigate();

    const editorRef = useRef();
    const [addAutomated, setAddAutomated] = useState();
    const [addConditions, setAddConditions] = useState();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState([]);
    const [featureImg, setFeatureImg] = useState("");
    const [handle, setHandle] = useState("");
    const [size, setSize] = useState('middle');
    const { Option } = Select;
    const [error, setError] = useState({});
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState({});
    const [products, setProducts] = useState([]);
    console.log("products", products, featureImg)
    useEffect(() => {
        let url = window.location.href;
        let slug = url.split('=');
        if (slug.length === 2) {
            setEdit(true);
            getSpecificCollection(slug[1]).then((res) => {
                setData(res.data.data);
                handleEdit(res.data.data.collectionData);
                setProducts(res.data.data.products)
            }).catch((err) => {
                console.log(err);
            })
        }
    }, []);
    const handleEdit = (data) => {
        setTitle(data.title);
        setDescription(data.description);
        setTags(data.tags);
        setFeatureImg(data.feature_img);
        setHandle(data.handle);
        setHtml(data.description);
    }
    const setHtml = (html) => {
        if (editorRef.current) {
            const view = editorRef.current.view;
            if (view) {
                EditorUtils.setHtml(view, html)
            }
        }
    };
    const getHtml = () => {
        if (editorRef.current) {
            const view = editorRef.current.view;
            if (view) {
                setDescription(EditorUtils.getHtml(view.state))
            }
        }
    };
    const handleUpload = (e) => {
        if (e.target.files[0]) {
            let body = new FormData();
            body.append("file", e.target.files[0])
            uploadImageOfCollection(body).then((res) => {
                if (res.data.statusCode == 200) {
                    setFeatureImg(res.data.data);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (title === "") {
            validate = false;
            err.title = "Please Enter Title";
        }
        if (description === "") {
            validate = false;
            err.description = "Please Enter Description";
        }
        if (tags.length === 0) {
            validate = false;
            err.tags = "Please Enter Tags";
        }
        if (handle === "") {
            validate = false;
            err.handle = "Please Enter Handle";
        }
        if (featureImg === "") {
            validate = false;
            err.featureImg = "Please Upload Feature Image";
        }
        setError(err);
        if (validate) {
            let body = {
                title: title,
                description: description,
                tags: tags,
                handle: handle,
                feature_img: featureImg,
            }
            if (edit) {
                body._id = data._id
                editCollection(body).then((res) => {
                    toast("Edited Successfully");
                    navigate('/list-of-collection')
                }).catch((err) => {
                    console.log("scx ", err);
                })
            } else {
                createCollection(body).then((res) => {
                    toast("Added Successfully");
                    navigate('/list-of-collection')
                }).catch((err) => {
                    console.log("scx ", err);
                })
            }
        }

    }

    return (
        <>
            <Header />
            <Sidebar />
            <div id="main">
                <div className="create-collections">
                    <div className="container">

                        <div className="row mt-1">
                            <div className="row">
                                <div className="col s12 l6 xl3"></div>
                                <div className="col s12 l6 xl6">
                                    <h3 className="new-product-title">{edit ? 'Edit' : 'Create'} Collection</h3>
                                </div>
                                <div className="col s12 l6 xl2"></div>
                            </div>
                            <div className="col s12   xl3"></div>
                            <div className="col s12 m6  xl6">

                                <div className="add-left-product">
                                    <div className="title-product">
                                        <h5>Title</h5>
                                        <div className="add-tital">
                                            <input type="text" placeholder="Name Of Collection" onChange={(e) => { setTitle(e.target.value); }} value={title}></input>
                                        </div>
                                        {error && error.title && <div className="error">{error.title}</div>}
                                    </div>
                                    <div className="description-product">
                                        <h5>
                                            Description
                                            {/* (Optional) */}
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
                                            // defaultContent={content}
                                            />
                                        </div>
                                        {error && error.description && <div className="error">{error.description}</div>}

                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col s12  l6 xl12">
                                                <h5>Tags</h5>
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
                                            {error && error.tags && <div className="error">{error.tags}</div>}

                                        </div>
                                    </div>
                                    <div className="title-product">
                                        <h5>Handle</h5>
                                        <div className="add-tital">
                                            <input type="text" placeholder="Handle Name" onChange={(e) => { setHandle(e.target.value); }} value={handle}></input>
                                        </div>
                                        {error && error.handle && <div className="error">{error.handle}</div>}
                                    </div>
                                </div>

                                <div className="">
                                    <div className="add-left-product mt-3  ">
                                        <div className="upload-collections-img">
                                            <div className="upload-box">
                                                <form className="my-form add-new-product">
                                                    <div className="field" align="left">
                                                        <h5>Collection Image</h5>
                                                        <input type="file" id="files" name="files[]" onChange={(e) => { handleUpload(e); }} />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="" style={{ "height": "100px", "width": "100px" }}>
                                            <img src={featureImg} style={{ "height": "100px", "width": "100px" }} />
                                        </div>
                                    </div>
                                    {error && error.featureImg && <div className="error">{error.featureImg}</div>}
                                </div>
                                <div className="row mb-5">
                                    <div className="">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Product Name</th>
                                                    <th>Product Image</th>
                                                    <th>Product Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    products && products.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td><span onClick={() => { navigate(`/add-new-product?id=${item._id}`) }}>{item.title}</span></td>
                                                            <td><img src={item.images[0].original} style={{ "width": "50px", "height": "50px" }} /></td>
                                                            <td>{item.price}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col s6  l6 xl6">
                                    </div>
                                    <div className="col s6  l6 xl6">
                                        <div className="save-btn">
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2" type="button" onClick={() => { handleSubmit() }}>{edit ? 'Update' : 'Save'}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12  xl3"></div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CreateCollections;