import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': 'ac2014d3-6f32-428a-bf2c-7421a4112813' },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 17) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
} 

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
} 