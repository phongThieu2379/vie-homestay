export const localStore ={
    get:()=>{
        let dataJson = localStorage.getItem("USER_INFOR")
        return JSON.parse(dataJson)

    },
    set:(data)=>{
        let dataJSON = JSON.stringify(data)
        return localStorage.setItem("USER_INFOR",dataJSON)
    },
    remove:(data)=>{
        let dataJSON = JSON.stringify(data)
        return localStorage.removeItem("USER_INFOR",dataJSON)
    }
}