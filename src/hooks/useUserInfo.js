import {useQuery} from 'react-query';
import { api } from '../services/api';

async function fetchUserInfo(){
    const {data} = await api.get('/userInfo')
    return data
}

export const useUserInfo = ()=> useQuery('user', fetchUserInfo)