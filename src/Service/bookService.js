import {postRequest, postRequest_v2} from "../utils/ajax";

export const getBooks = (data, callback) => {
    const url = `http://localhost:8080/getBooks`;
    postRequest(url, data, callback);
};