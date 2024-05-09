import {useForm, useFieldArray } from 'react-hook-form'
import Input from '../components/input'
import { createClient,getClientById, updateClient,LisAddresses, deleteAddress } from '../api'
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Form = ({setId}) => {
    const {id} = useParams()
    const addresses = LisAddresses()
    console.log(id)
    const navigate = useNavigate()
    const {register,handleSubmit,control,setValue,reset} = useForm()

    const { fields, append, remove } = useFieldArray({
        name: "addresses",
        control
    });

    useEffect(() => {
        async function loadTask(){
            
            if(id){
                setId(id)
                const response = await getClientById(id)
                console.log(response.data)
                setValue('name', response.data.name)
                setValue('email', response.data.email)
                setValue('phone', response.data.phone)
                setValue('last_name', response.data.last_name)
                const clientAddresses = addresses.filter(address => address.client == id)
                reset({data:addresses})
                await Promise.all(clientAddresses.map(async address => {
                    await append({
                        addressId: address.id,
                        address: address.address,
                        apartment: address.apartment,
                        city: address.city,
                        state: address.state,
                        country: address.country,
                        zip_code: address.zip_code
                    });
                }));
            }
        }
        loadTask()
    },[id,addresses])

    const deleteAddss = (id,index) =>{
        deleteAddress(id)
        remove(index)
    }

    const onSubmit = handleSubmit(data => {
        if(id){
            console.log('holaa')
            updateClient(data,id)
        }else{
            createClient(data)
        }
        navigate('/')
    })

    return(
        <section className='formSection'>
            <h1>CREATE A NEW CLIENT</h1>
            <form action="" onSubmit={onSubmit}>
            <Input 
            name='name'
            label='Name'
            register={register}
            type='text'
            />
            <Input 
            name='last_name'
            label='Last Name'
            register={register}
            type='text'
            />
            <Input 
            name='email'
            label='Email'
            register={register}
            type='email'
            />
            <Input 
            name='phone'
            label='Phone'
            register={register}
            type='number'
            />
            <h1>ADDRESS INFORMATION</h1>
            {fields.map((addresses,index)=> {
            return(
                <div key={addresses.id}>
                <Input
                register={register}
                index={index}
                name='address'
                label='Address'
                type='text'
                />

                <Input
                register={register}
                index={index}
                name='apartment'
                label='Apartment'
                type='text'
                />
                
                <Input
                register={register}
                index={index}
                name='city'
                label='City'
                type='text'
                />

                <Input
                register={register}
                index={index}
                name='state'
                label='State'
                type='text'
                />

                <Input
                register={register}
                index={index}
                name='country'
                label='Country'
                type='text'
                />

                <Input
                register={register}
                index={index}
                name='zip_code'
                label='Zip Code'
                type='text'
                />
                {addresses.addressId ? 
                <Button className='deleteBtn' variant="contained" color='error' type='button' 
                onClick={() => deleteAddss(addresses.addressId,index)}>Remove Address</Button>
                :
                <Button className='deleteBtn' variant="contained" color='error' type='button' 
                onClick={() => remove(index)}>Remove Address</Button>
                }
                </div>

            )
            })}
            
            <div className='createBtn'>
            <Button variant="contained" type='button' onClick={() => append({})}>Add Address</Button>
            
            <Button type='submit' variant="contained" color='success' onClick={onSubmit}>Save</Button>
            </div>
        </form>
        </section>
    )
}


export default Form
