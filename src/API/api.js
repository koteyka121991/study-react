import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "5905da2b-6481-40f8-a674-105c423438e0" }
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
     // промис
    const response = await instance.get(`users?page=${currentPage}
        &count=${pageSize}`);
    return response.data;
  },
  follow(userId) {
     // промис
    return instance.post(`follow/${userId}`, {},
    )
  },
  unfollow(userId) {
     // промис
    return instance.delete(`follow/${userId}`, )
  },
  getProfile(userId) {
     // промис
    return instance.get(`profile/`+ userId);
    }
}

export const authAPI = {
  me() {
    // промис
    return instance.get(`auth/me`, ) }
 
}


