import {useQuery} from 'react-query';
import { api } from '../services/api';

async function fetchUserInfo(){
    try{
        const {data, status} = await api.get('/userInfo')
        if(status === 401){
            return null
        }
        return data
    } catch(err) {
        console.log(err)
        return null
    }
}

export const useUserInfo = ()=> useQuery('user', fetchUserInfo)