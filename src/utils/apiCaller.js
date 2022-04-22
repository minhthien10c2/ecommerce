import axios from "axios"

const callApi = (endPoint, method = 'GET', data) => {
    const token = JSON.parse(localStorage.getItem('access_token'))
    return axios({
        method: method,
        url: `${process.env.REACT_APP_API}/${endPoint}`,
        data: data,
        headers: { Authorization: token ? `Bearer ${token}` : '' }
    }).catch(err => {
        if (err.response.status === 401) {
            localStorage.removeItem('access_token')
            return window.location.href = '/'
        }
    })
}

export default callApi