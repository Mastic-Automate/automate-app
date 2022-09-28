import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3000-masticautom-automateapi-sxtfxx4v7n7.ws-us67.gitpod.io'
})

export {api}