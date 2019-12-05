import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject =>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const deleteUser = userId =>{
    const request = axios.delete(baseUrl+"/"+userId)
}

export default {
    getAll,
    create,
    deleteUser
}