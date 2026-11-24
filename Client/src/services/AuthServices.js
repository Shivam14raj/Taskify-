// import axios from 'axios'

// // const API = '/api/v1/user'
// const API = `${import.meta.env.VITE_API_URL}/api/v1/user`

// export const registerUser = (data) => axios.post(`${API}/register`, data)

// export const loginUser = (data) => axios.post(`${API}/login`, data)


import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || ''
const API = `${API_URL}/api/v1/user`

export const registerUser = (data) => axios.post(`${API}/register`, data)

export const loginUser = (data) => axios.post(`${API}/login`, data)
