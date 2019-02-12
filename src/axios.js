import React from 'react';
import * as axios from 'axios';//все что есть аксиос

let axiosInstants = axios.create({
    baseURL:  'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true// согласие на отправку через куки
})



export const loginReguest = (email, password, rememberMe)=>{
    return axiosInstants.post('auth/login', {email, password, rememberMe})

}