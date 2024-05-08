import axios from 'axios'
import { useState,useEffect } from 'react'

const clientApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/client/api/v1/clients/'
})
export const getAllCLients = () => {
    return clientApi.get('/')
}

export function ListClients (){
    const [clients,setClients] = useState([])
    useEffect(() => {
        async function fetchClients() {
            const response = await getAllCLients()
            setClients(response.data)
        }
        fetchClients();
    },[]);

    return clients
}

export const createClient = async (data,clients) => {
    const {name,last_name,phone,email} = data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone', `+${phone}`);


   await clientApi.post('/', formData)
   createAddresses(data,clients)

}


const addressApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/client/api/v1/addresses/'
})
export const getAllAddresses = () => {
    return addressApi.get('/')
}
export const createAddresses = (data,clients) => {
    console.log(clients)
    const clientId = clients && clients.find(client => client.email == data.email)?.id
    console.log(clientId)
}