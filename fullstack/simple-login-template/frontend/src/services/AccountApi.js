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