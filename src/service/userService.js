import {https} from "./config"

export const userService={
    postLogin:(loginForm)=>{
        return https.post("/api/auth/signin",loginForm)
    },
    postSignUp:(signUp)=>{
        return https.post("api/auth/signup",signUp)
    }
    
}