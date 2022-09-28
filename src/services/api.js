import axios from 'axios';
import {setup} from 'axios-cache-adapter';
//import {API_BASE_URL} from '@env'

const api = setup({
    baseURL: 'https://3000-masticautom-automateapi-sxtfxx4v7n7.ws-us67.gitpod.io'
})

export {api}