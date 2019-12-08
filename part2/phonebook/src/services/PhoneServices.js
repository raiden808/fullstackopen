import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

/**
 * retireves all user in json db
 * @method
 */
const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

/** 
 * create new person object
 * @method  
 */ 
const create = newObject =>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

/**
 * delete selected user
 * @method
 */
const deleteUser = userId =>{
    const request = axios.delete(baseUrl+"/"+userId)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    deleteUser
}