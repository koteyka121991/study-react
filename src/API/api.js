import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { "API-KEY": "5905da2b-6481-40f8-a674-105c423438e0" }
});

export const usersAPI = {
  async getUsers(currentPage, pageSize) {
    // промис
    // get параметры ставим вопросительный знак
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
    return instance.delete(`follow/${userId}`,)
  },
  getProfile(userId) {
    console.warn("Obsolute method. Please profileAPI objet")
    return profileAPI.getProfile(userId);
  }
}
export const profileAPI = {
  getProfile(userId) {
    // промис
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    // получаем стаутс пользователя
    return instance.get(`/profile/status/` + userId);
  },
  updateStatus(status) {
    // изменяем стаутс пользователя
    return instance.put(`/profile/status`, {status} );
  },
  
}

export const authAPI = {
  me() {
    // промис
    return instance.get(`auth/me`,)
  }

}


