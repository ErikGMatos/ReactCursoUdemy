export const Types = {
    ADD_PRODUCT: "list_ADD_PRODUCT",
    DELETE_PRODUCT: "list_DELETE_PRODUCT",
    TOGGLE_PRODUCT: "list_TOGGLE_PRODUCT",
    UPDATE_PRODUCT: "list_UPDATE_PRODUCT",
    NEW_LIST: "list_NEW_LIST",
    GET_IMAGE_SUCESS: "list_GET_IMAGE_SUCESS",
    GET_IMAGE_FAILURE: "list_GET_IMAGE_FAILURE"
};

export const Creators = {
    addProduct: (product, list) => {
        return {
            type: Types.ADD_PRODUCT,
            product: product,
            list: list
        };
    },

    deleteProduct: productId => {
        return {
            type: Types.DELETE_PRODUCT,
            productId: productId
        };
    },

    toggleProduct: productId => {
        return {
            type: Types.TOGGLE_PRODUCT,
            productId: productId
        };
    },

    updateProduct: (product, list) => ({
        type: Types.UPDATE_PRODUCT,
        product,
        list
    }),

    newList: () => ({
        type: Types.NEW_LIST
    }),

    getImageSuccess: (product, img) => ({
        type: Types.GET_IMAGE_SUCESS,
        product,
        img
    }),

    getImageFailure: (product, img) => ({
        type: Types.GET_IMAGE_FAILURE,
        product,
        img
    })
};
