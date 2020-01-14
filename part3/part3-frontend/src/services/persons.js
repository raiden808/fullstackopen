import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () =>{
    const request.get(baseUrl)
    return request.then(response => response.data)
}