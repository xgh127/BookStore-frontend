import axios from "axios";

let postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

let postRequest = (url,callback) => {
    fetch(url)
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then((data) => {
           console.log(data);
            callback(data);
        })
        .catch((error) => {
            console.log(error);
        });
};


export {postRequest,postRequest_v2};