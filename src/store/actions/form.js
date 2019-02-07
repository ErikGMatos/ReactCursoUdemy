export const Types = {
    START_UPDATE: "form_START_UPDATE",
    FINISH_UPDATE: "form_FINISH_UPDATE",
    START_ADD: "form_START_ADD",
    FINISH_ADD: "form_FINISH_ADD"
};

export const Creators = {
    startUpdate: (list, product) => ({
        type: Types.START_UPDATE,
        product: product,
        list: list
    }),

    finishUpdate: product => ({
        type: Types.FINISH_UPDATE
    }),

    startAdd: list => ({
        type: Types.START_ADD
    }),

    finishAdd: () => ({
        type: Types.FINISH_ADD
    })
};
