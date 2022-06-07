import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5005/api/v1/';

export async function CreateAccount(body) {
    let data;
    await axios.post('account/', body)
        .then(response => {
            console.log(response)
            if (response) {
                data = {
                    status: response.status,
                    data: response.data
                }
            }
        })
        .catch(err => {
            if (err) {
                data = {
                    status: err.response.status,
                    errorMessage: err.response.data,
                    fullMessage: err
                }
            }
        });

    return data;
};

export async function PostLogin(body) {
    let data = {
        status: 0,
        data: {
            token: "",
            refreshToken: "",
            auth: false
        }
    };

    await axios.post('account/login', body)
        .then(response => {
            console.log(response)
            if (response) {
                data = {
                    status: response.status,
                    data: response.data
                }
            }
        })
        .catch(err => {
            if (err) {
                data = {
                    status: err.response.status,
                    errorMessage: err.response.data,
                    fullMessage: err
                }
            }
        });

    return data;
}