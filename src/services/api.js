import axios from 'axios';

const api = axios.create({
    baseURL: 'https://automate-api-deploy.vercel.app'
})

export {api}