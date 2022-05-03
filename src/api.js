import axios from 'axios'

const API_URL = "http://localhost:8291/api"
const LOGIN_PATH = "/login"
const REGISTER_PATH = "/register"

async function login(username, password) {
    const response = await axios.post(API_URL + LOGIN_PATH, {username, password})

    return response.data
}

async function register(username, password) {
    const response = await axios.post(API_URL + REGISTER_PATH, {username, password})

    return response.data
}

export { login, register }