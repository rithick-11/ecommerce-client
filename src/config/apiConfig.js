import Cookies from "js-cookie"
import axios from "axios"

const url = {
    vercel : "https://ecommerce-server-zeta-gray.vercel.app",
    localhost: "http://localhost:5000/"
}

const server = axios.create({
    baseURL: url.vercel ,
    headers:{
        Authorization : `breare ${Cookies.get("authEToken")}`,
        "Content-Type":"application/json"
    }
})

export default server