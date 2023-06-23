import { https } from "./config";

export const userService = {
  postLogin: (loginForm) => {
    return https.post("/api/auth/signin", loginForm);
  },
  postSignUp: (signUp) => {
    return https.post("/api/auth/signup", signUp);
  },
  getUserList: () => {
    return https.get("/api/users");
  },
  deleteUser: (id) => {
    return https.delete(`/api/users?id=${id}`);
  },
  getUserInfor: (id) => {
    return https.get(`api/users/${id}`);
  },
  putUpdateUserInfo: (id,data) => {
    return https.put(`/api/users/${id}`,data);
  },
  postUploadAvatar:(data)=>{
    return https.post(`api/users/upload-avatar`,data)
  }
};
