import axios from 'axios'
//import {API_BASE_URL} from '@env'

const api = axios.create({
    baseURL: 'https://3000-masticautom-automateapi-sxtfxx4v7n7.ws-us67.gitpod.io'
})

export {api}