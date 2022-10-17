import axios from 'axios'

const API_URL = `${process.env.REACT_APP_API_URL}/api`
const FILE_API_URL = process.env.REACT_APP_API_URL


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !originalRequest._isRetry){
        originalRequest._isRetry = true
        try{
            const response = await axios.get(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)

            return $api.request(originalRequest)
        } catch (e){
            console.log('Unauthorized')
        }
    }
    throw error
})

export {
    API_URL,
    FILE_API_URL,
    $api
}
