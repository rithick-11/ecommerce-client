import axios from "axios"

const server = axios.create({
    baseURL:"http://localhost:5000/",
    headers:{
        Authorization : "bear",
        "Content-Type":"application/json"
    }
})

export default server