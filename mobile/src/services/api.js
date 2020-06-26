import axios from 'axios'

const ip = axios.create({baseURL: 'https://api.ipify.org?format=json'})

console.log(ip.ip)

const api = axios.create({
    baseURL: 'http://192.168.0.38:3333/api'
})

export default api