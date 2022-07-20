import React, { useEffect, useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import Footer from "../Footer";
import '@progress/kendo-theme-default/dist/all.css';
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import 'antd/dist/antd.css';

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
    const [addAutomated, setAddAutomated] = useState();
    const [addConditions, setAddConditions] = useState();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [files, setFiles] = useState("");
    const [error, setError] = useState({});

    const handleSubmit = () => {
        let validate = true;
        let err = {};
        if (title === "") {
            err.title = "Please Enter Title";
            validate = false;
        }
        if (type === "") {
            err.type = "Select one";
            validate = false;
        }

        if (files === "") {
            err.files = 'Please select image.';
            validate = false;
        } else if (!(/\.(jpg|jpeg|png|gif)$/.test(files))) {
            err.files = 'Please select valid image.';
            validate = false;
        }
        setError(err);
        if (validate) {

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
                                    <h3 className="new-product-title">Create Collection</h3>
                                </div>
                                <div className="col s12 l6 xl2"></div>
                            </div>
                            <div className="col s12   xl3"></div>
                            <div className="col s12 m6  xl6">

                                <div className="add-left-product">
                                    <div className="title-product">
                                        <h5>Title</h5>
                                        <div className="add-tital">
                                            <input type="text" placeholder="Summer Collection" name="title" value={title} onChange={(e) => { setTitle(e.target.value); }}></input>
                                            <p className="error-p">{error?.title}</p>
                                        </div>
                                    </div>
                                    <div className="description-product">
                                        <h5>
                                            Description (Optional)
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

                                <div className="add-left-product mt-3 ">
                                    <h5>Collection Type</h5>
                                    <div className="add-manual" onChange={(e) => { setType(e.target.value); }}>
                                        <div className="mtb-10">
                                            <label htmlFor="manual"><input id="manual" name="m-id" type="radio" onClick={(e) => { setAddAutomated(addAutomated === "manual" ? "" : "manual") }} /> Manual</label>
                                            <p>Add Product to this collection one by one</p>
                                        </div>
                                        <div className="mtb-10">
                                            <label htmlFor="automated"><input id="automated" name="m-id" type="radio" onClick={(e) => { setAddAutomated(addAutomated === "automated" ? "" : "automated") }} /> Automated</label>
                                            <p>Automatically be Added this Collection</p>
                                        </div>
                                    </div>
                                    <p className="error-p">{error?.type}</p>
                                    <div className={`condition ${addAutomated === "automated" ? "automated-open" : "automated-close"}`}>
                                        <hr />
                                        <h5>Conditions</h5>
                                        <div className="product-match">
                                            <p>Product Must Match:&nbsp;&nbsp; <label htmlFor="all-condi"><input id="all-condi" name="a-condition" type="radio" onClick={(e) => { setAddConditions(addConditions === "all-condi" ? "" : "all-condi") }} /> All Conditions</label>&nbsp;&nbsp; <label htmlFor="any-condi"><input name="a-condition" id="any-condi" type="radio" onClick={(e) => { setAddConditions(addConditions === "any-condi" ? "" : "any-condi") }} /> Any Conditions</label></p>
                                            <div className={`all-conditions mt-2 ${addConditions === "all-condi" ? "automated-open" : "automated-close"}`}>
                                                <div className="row">
                                                    <div className="col s12 m6 xl4">
                                                        <div className="product-tag">
                                                            <select>
                                                                <option>Product Tag</option>
                                                                <option>Product Tag</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col s12 m6 xl4">
                                                        <div className="equal-to">
                                                            <select>
                                                                <option>is equal to</option>
                                                                <option>is equal to</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col s12 m6 xl4">
                                                        <div className="other-to">
                                                            <select>
                                                                <option></option>
                                                                <option></option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`any-conditions mt-2 ${addConditions === "any-condi" ? "automated-open" : "automated-close"}`}>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="add-left-product mt-3  ">
                                        <div className="upload-collections-img">
                                            <div className="upload-box">
                                                <form className="my-form add-new-product">
                                                    <div className="field" align="left">
                                                        <h5>Collection Image</h5>
                                                        <input type="file" id="files" name="files" value={files} onChange={(e) => { setFiles(e.target.value); }} />
                                                        <p className="error-p">{error?.files}</p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col s6  l6 xl6">
                                    </div>
                                    <div className="col s6  l6 xl6">
                                        <div className="save-btn">
                                            <button className="btn gradient-45deg-red-pink z-depth-4 mr-1 mb-2" onClick={() => { handleSubmit(); }}>Save</button>
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