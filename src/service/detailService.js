import { https } from "./config"

export const detailService ={
    getDetail:(id) => { 
        return https.get(`/api/phong-thue/${id}`)
     },
    getRoom:() => { 
        return https.get("/api/phong-thue/lay-phong-theo-vi-tri?maViTri=7")
     },
    getCmt:(id) => { 
        return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`)
     },
    getLocation:()=>{
        return https.get(`/api/vi-tri/7`)
    }
    
}

