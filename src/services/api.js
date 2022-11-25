import axios from 'axios'
//import {API_BASE_URL} from '@env'

const api = axios.create({
    baseURL: 'https://automate-api-deploy.vercel.app'
})

export {api}