import axios from "axios";

const baseURL = 'http://localhost:5005/api/v1/';

const axiosLogin = axios.create({
    baseURL
});

const axiosPostLogin = axios.create({
    baseURL
})
/** Axios configurations (Interceptors and more) */

// Insert jwt to requests using interceptors

axiosPostLogin.interceptors.request.use((request) => {
    console.log(request)
    const jwtToken = localStorage.getItem('accessToken');
    request.headers['x-auth-token'] = jwtToken;
    return request;
});

// Once a not authorized response is received, apply automatically the refresh token call using response interceptor

axiosPostLogin.interceptors.response.use((response) => {
    return response;
},
    async (error) => {
        const originalConfig = error.config;

        // Here we verify whether the response comes from the endpoint of refresh token
        // If yes, it recognizes that the refresh token has expired and could not be refreshed
        // meaning that the user myst login again
        if (error.response.status === 401 && originalConfig.url === axios.defaults.baseURL + '/account/refresh') {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/';
            return Promise.reject(error);
        }

        if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            const tokens = await RefreshToken(error);
            localStorage.setItem("accessToken", tokens.data.oken);
            localStorage.setItem("refreshToken", tokens.data.refreshToken);
            axios.defaults.headers.common['x-api-token'] = tokens.data.token;
            return axios(originalConfig);
        } else {
            return Promise.reject(error);
        }
    }
);

/** Refresh token function */

async function RefreshToken(error) {
    return new Promise(async (resolve, reject) => {
        try {

            // Load infos saved in the localStorage (Not safe but ok)
            const email = localStorage.getItem('email');
            const currentToken = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            const userId = localStorage.getItem('userId');

            // Post new request to refresh the token
            axiosPostLogin.post(`/account/refreshtoken`, {
                email,
                accessToken: currentToken,
                refreshToken: refreshToken,
                userId
            }).then(async (res) => {
                // If ok, renew all saved tokens

                const newAccessToken = res.data.token
                localStorage.setItem("accessToken", newAccessToken);
                localStorage.setItem("refreshToken", res.data.refreshToken);

                axios.defaults.headers['x-auth-token'] = newAccessToken;
                error.headers['Authorization'] = newAccessToken;

                return axios(error);
            }).catch((err) => {
                return reject(error);
            });
        } catch (err) {
            return reject(err);
        }
    });
};

/** Generic Function using axios */

export async function CreateAccount(body) {
    let data;
    await axiosLogin.post('account/', body)
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

    await axiosLogin.post('account/login', body)
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

export async function Logout(refreshToken) {
    let data = {
        status: 0,
        data: {
            token: "",
            refreshToken: "",
            auth: false
        }
    };

    await axiosPostLogin.post('account/logout', { refreshToken })
        .then(response => {
            console.log(response)
            if (response) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('userId');
                localStorage.removeItem('email');
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
