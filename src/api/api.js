import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'ce8a87aa-30e2-4320-86d2-b1029b457e9b' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 17) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    }
} 

