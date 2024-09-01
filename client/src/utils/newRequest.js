import axios from "axios";

// const newRequest = axios.create({
//     baseURL :"https://renderfamilybackend-c23e.onrender.com",
//     withCredentials:true,
// })

const newRequest = axios.create({
    baseURL :"http://localhost:8081",
    withCredentials:true,
})

export default newRequest  