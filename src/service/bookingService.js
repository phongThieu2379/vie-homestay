import { https } from "./config";

export const roomService = {
  getRoomList: () => {
    return https.get("/api/phong-thue");
  },
  getLocationList: () => {
    return https.get("/api/vi-tri");
  },
  getLocationSeach: (keyword) => {
    return https.get(
      `/api/vi-tri/phan-trang-tim-kiem?pageIndex=1&pageSize=4&keyword=${keyword}`
    );
  },
  getRoomListByLocationId: (id) => {
    return https.get(`/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`);
  },
  
};
