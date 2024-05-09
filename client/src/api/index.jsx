/* eslint-disable no-useless-catch */
import axios from 'axios'
import { useState,useEffect } from 'react'

const clientApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/client/api/v1/clients/'
})
export const getAllCLients = () => {
    return clientApi.get('/')
}

/**
 * 
 * @returns A list with all the clients
 */
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
/**
 * 
 * @param {*} id 
 * @returns The client that was obtained by the id
 */
export const getClientById = (id) => {
    return clientApi.get(`/${id}`)
}

/**
 * 
 * @param {*} data An array of objects
 * @returns this function create a client
 */
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
        throw error
    }

}
/**
 * 
 * @param {*} data the new data
 * @param {*} id the client id
 * @returns cUpdate an existing client in the database
 */
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
        console.log(error);
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

/**
 * 
 * @returns All the addresses in the data base
 */
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

/**
 * 
 * @param {*} data The addresses
 * @param {*} id The client id
 * @returns Create a new (few) addresses in the data base
 */
export const createAddresses = (data,id) => {
    const addresses = data.addresses;

    addresses.map((address) => {
        const formData = new FormData();
        formData.append('address',address.address)
        formData.append('apartment',address.apartment)
        formData.append('city',address.city)
        formData.append('state',address.state)
        formData.append('country',address.country)
        formData.append('zip_code',address.zip_code)
        formData.append('client',id)
        return addressApi.post('/',formData)
    })
}

/**
 * 
 * @param {*} data The new address data
 * @param {*} clientId 
 */
const updateAddresses = async (data,clientId) => {
    const addresses = await data.addresses;

    addresses.map((address)  => {
        console.log(address)
        if(address.addressId){
            const formData = new FormData();
            formData.append('id',address.addressId)
            formData.append('address',address.address)
            formData.append('apartment',address.apartment)
            formData.append('city',address.city)
            formData.append('state',address.state)
            formData.append('country',address.country)
            formData.append('zip_code',address.zip_code)
            formData.append('client',clientId)
            addressApi.put(`/${address.addressId}/`,formData)
        }else{
            createAddresses(data = {'addresses' : [{
                'id':address.addressId,
                'address':address.address,
                'apartment':address.apartment,
                'city':address.city,
                'state':address.state,
                'country':address.country,
                'zip_code':address.zip_code,
                'client':clientId
            }]},clientId)
        }
    })

}


export const deleteAddress = (addressId) => {
    return addressApi.delete(`/${addressId}/`)
}