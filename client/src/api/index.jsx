/* eslint-disable no-useless-catch */
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

export const getClientById = (id) => {
    return clientApi.get(`/${id}`)
}

export const createClient = async (data) => {
    const {name,last_name,phone,email} = data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone', `+${phone}`);
    
    try {
        const clientResponse = await clientApi.post('/', formData);
        const clientId = clientResponse.data.id;
        if (clientId) {
            createAddresses(data,clientId)
        } 
        return clientResponse.data; 
    } catch (error) {
        throw error;
    }

}
export const updateClient = async (data,id) => {
    const {name,last_name,phone,email} = data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('last_name', last_name);
    formData.append('email', email);
    formData.append('phone', `+${phone}`);
    console.log(data)

   try {
    const clientResponse = await clientApi.put(`/${id}/`, formData);
    const clientId = clientResponse.data.id;
    if (clientId) {
        updateAddresses(data,clientId)
    } 
    return clientResponse.data; 
    } catch (error) {
        throw error;
    }
}
export const deleteClient = (id) => {
    return clientApi.delete(`/${id}/`)
}








const addressApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/client/api/v1/addresses/'
})
export const getAllAddresses = () => {
    return addressApi.get('/')
}

export function LisAddresses (){
    const [addresses,setAddresses] = useState([])
    useEffect(() => {
        async function fetchAddresses() {
            const response = await getAllAddresses()
            setAddresses(response.data)
        }
        fetchAddresses();
    },[]);

    return addresses
}

export const createAddresses = (data,id) => {
    const addresses = data.addresses;

    for(const address of addresses){
        const formData = new FormData();
        formData.append('address',address.address)
        formData.append('apartment',address.apartment)
        formData.append('city',address.city)
        formData.append('state',address.state)
        formData.append('country',address.country)
        formData.append('zip_code',address.zip_code)
        formData.append('client',id)
        addressApi.post('/',formData)
    }
}

const updateAddresses = (data,clientId) => {
    const addresses = data.addresses;

    for(const address of addresses){
        if(address.id){
            const formData = new FormData();
            formData.append('id',address.id)
            formData.append('address',address.address)
            formData.append('apartment',address.apartment)
            formData.append('city',address.city)
            formData.append('state',address.state)
            formData.append('country',address.country)
            formData.append('zip_code',address.zip_code)
            formData.append('client',clientId)
            addressApi.put(`/${address.id}/`,formData)
        }else{
            createAddresses(data,clientId)
        }
    }
}

