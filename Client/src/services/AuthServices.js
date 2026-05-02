import axios from 'axios'

const API = '/api/v1/user'

export const registerUser = (data) => axios.post(`${API}/register`, data)

export const loginUser = (data) => axios.post(`${API}/login`, data)
