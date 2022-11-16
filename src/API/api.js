import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "5905da2b-6481-40f8-a674-105c423438e0"}
  });

  export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`)
        .then(response=>{
            return response.data;});
    }
  }

export const getUsersFollow = (currentPage, pageSize) => {
    return instance.get(`follow?page=${currentPage}
    &count=${pageSize}`)
    .then(response=>{
        return response.data;});
}
