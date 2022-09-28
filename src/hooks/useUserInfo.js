import {useQuery} from 'react-query';
import { api } from '../services/api';

async function fetchUserInfo(){
    try{
        const {data} = await api.get('/userInfo')
        return data
    } catch(err) {
        console.log(err)
        return null
    }
}

export const useUserInfo = ()=> useQuery('user', fetchUserInfo)