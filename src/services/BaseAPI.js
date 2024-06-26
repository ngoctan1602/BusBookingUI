import instance from "./Configs/instanceAxios"

export const getItems = async (url, params) => {
    try {
        const response = await instance().get(url, {
            params: params
        })
        return response
    }
    catch (error) {
        return error;
    }
}

export const createFormData = async (url, data) => {
    try {
        const response = await instance().post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        return response
    }
    catch (e) {
        // console.log("errors: ", e.message())
        return e;
    }
}

export const postItem = async (url, data) => {
    try {
        const response = await instance().post(url, data)
        return response
    }
    catch (error) {
        return error;
    }
}

export const postItemParams = async (url, data, params) => {
    try {
        const response = await instance().post(url, data, {
            params: params
        })
        return response
    }
    catch (error) {
        return error;
    }
}

export const putItem = async (url, data, params = null) => {
    try {
        const response = await instance().put(url, data, {
            params: params
        })
        return response
    }
    catch (error) {
        return error;
    }
}

export const deleteItem = async (url, params = null) => {
    try {
        const response = await instance().delete(url, { params: params })
        return response
    }
    catch (error) {
        return error;
    }
}