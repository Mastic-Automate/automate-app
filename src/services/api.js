import axios from 'axios'
import {API_BASE_URL} from '@env'

const api = axios.create({
    baseURL: API_BASE_URL
})

export {api}