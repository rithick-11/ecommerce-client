import Cookies from "js-cookie"
import axios from "axios"

const server = axios.create({
    baseURL:"http://localhost:5000/",
    headers:{
        Authorization : `breare ${Cookies.get("authEToken")}`,
        "Content-Type":"application/json"
    }
})

export default server