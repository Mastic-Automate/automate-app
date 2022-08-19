import axios from 'axios'
//import {API_BASE_URL} from '@env'

const api = axios.create({
    baseURL: 'https://automate-api-backend.herokuapp.com'
})

export {api}