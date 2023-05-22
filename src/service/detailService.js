import { https } from "./config"

export const detailService ={
    getDetail:(id) => { 
        return https.get(`/api/phong-thue/${id}`)
     },
    
    getCmt:(id) => { 
        return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`)
     },
    getLocation:(maViTri)=>{
        return https.get(`/api/vi-tri/${maViTri}`)
    },
    getComment:(id) => { 
        return https.get(`/api/binh-luan/lay-binh-luan-theo-phong/${id}`)
     },
     postComment:(formPostCmt) => { 
        return https.post(`/api/binh-luan`,formPostCmt)
      },
    postBooking:(formBooking) => { 
        return https.post(`/api/dat-phong`,formBooking)
     }

    
}

