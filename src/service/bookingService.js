import { https } from "./config";

export const roomService = {
  getRoomList: () => {
    return https.get("/api/phong-thue");
  },

};
