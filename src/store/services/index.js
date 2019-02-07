import axios from "axios";

export const services = {
    getImages: product => {
        const params = {
            key: "AIzaSyCsrq-7gx91oKewPcp0R0TZd5jihESxYDM",
            cx: "018387760533813446568:witcojjxjbg",
            searchType: "image",
            lr: "lang_pt",
            num: 1,
            q: product
        };

        return axios
            .get("https://www.googleapis.com/customsearch/v1", { params })
            .then(resp => resp.data.items[0].link)
            .catch(err => err);
    }
};
