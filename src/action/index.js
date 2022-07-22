import axios from "axios";
const URL = "http://localhost:4000/";

const config = {
    headers: {
        'token': 'SEFoQ8WCq9p5OrLn4GlYLFuiKc5l5TXv8WW7ng4DmH9AbFn8wsdl7uWRGzYYxC20M8WBtRktOWCPTMh7Jy0x',
        "project_id": "62d4f5fd7d7e8ff7a4f11e8a"
    }
};

export const createCollection = async (body) => {
    return await axios.post(URL + 'collection/create', body, config)
}

export const uploadImageOfCollection = async (body) => {
    return await axios.post(URL + 'collection/file-upload', body, config)
}

export const getCollections = async () => {
    return await axios.get(URL + 'collection/list', config)
}

export const getSpecificCollection = async (id) => {
    return await axios.get(URL + `collection/${id}`, config)
}

export const editCollection = async (body) => {
    return await axios.post(URL + `collection/update`, body, config)
}

export const deleteCollection = async (id) => {
    return await axios.delete(URL + `collection/${id}`, config)
}

export const createProduct = async (body) => {
    return await axios.post(URL + `product/create`, body, config)
}

export const uploadImageOfProduct = async (body) => {
    return await axios.post(URL + `product/file-upload`, body, config)
}

export const getAllProduct = async () => {
    return await axios.get(URL + `product/list`, config)
}

export const getSpecificProduct = async (body) => {
    return await axios.post(URL + `product/specific-product`, body, config)
}

export const updateProduct = (body) => {
    return axios.put(URL + `product/update`, body, config)
}

export const deleteProduct = async (id) => {
    return await axios.delete(URL + `product/${id}`, config)
}

export const getAllOrder = async () => {
    return await axios.get(URL + `order/list`, config);
}

export const getSpecificOrderData = async (id) => {
    return await axios.get(URL + `order/${id}`, config);
}

export const getAllUserList = async () => {
    return await axios.get(URL + `user/list`, config);
}

export const changeStatusOfUser = async (body) => {
    return axios.post(URL + `user/change-status`, body, config)
}

export const getLastOrderDetailsOfCustomer = async (id) => {
    return axios.get(URL + `user/latest-order/${id}`, config)
}

export const changeUserStatus = async (body) => {
    return axios.post(URL + `user/change-status`, body, config)
}

export const changeOrderStatus = async (body) => {
    return axios.post(URL + `order/change-status`, body, config)
}

export const getNewDiscountCode = async () => {
    return axios.get(URL + `discount/generate-code`, config)
}

export const createDiscount = async (body) => {
    return axios.post(URL + `discount/create`, body, config)
}

export const getAllDiscounts = async () => {
    return axios.get(URL + `discount/list`, config)
}