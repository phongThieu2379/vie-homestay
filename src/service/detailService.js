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
     postComment:() => { 
        return https.post(``)
      },
    postBooking:(formBooking) => { 
        return https.post(`/api/dat-phong`,formBooking)
     }

    
}

