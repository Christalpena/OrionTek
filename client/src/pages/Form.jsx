import {useForm, useFieldArray } from 'react-hook-form'
import Input from '../components/input'
import { createClient,getClientById, updateClient,LisAddresses, deleteAddress } from '../api'
import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


// eslint-disable-next-line react/prop-types
const Form = ({setId}) => {
    const [error,setError] = useState()
    const {id} = useParams()
    const addresses = LisAddresses();
    const navigate = useNavigate();
    const {register,handleSubmit,control,setValue,reset} = useForm();

    const { fields, append, remove } = useFieldArray({
        name: "addresses",
        control
    });

    useEffect(() => {
        async function loadTask(){
            if(id){
                setId(id)
                const response = await getClientById(id)
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

    const deleteFunction  = (id,index) =>{
        if(id){
            deleteAddress(id);
            remove(index);
        }else{
            remove(index);
        }
    };

    const onSubmit  = async (data) => {
        if(id){
            try{
                await updateClient(data,id)
            }catch(error){
                console.log('holaa')
            }
        }else{
            try {
                await createClient(data);
              } catch (error) {
                setError('Please Check your data, somenthin is wrong')
              }
        }
        //navigate('/')
    }

    return(
        <section className='formSection'>
            <h1>CREATE A NEW CLIENT</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Input 
            name='name'
            label='Name'
            register={register}
            type='text'
            placeholder='Maria'
            />
            <Input 
            name='last_name'
            label='Last Name'
            register={register}
            type='text'
            placeholder='Antonieta'
            />
            <Input 
            name='email'
            label='Email'
            register={register}
            type='email'
            placeholder='mariaantonia18@gmail.com'
            />
            <Input 
            name='phone'
            label='Phone'
            register={register}
            type='tel'
            placeholder='+18098795133'
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
                placeholder='123 Main Street'
                
                />

                <Input
                register={register}
                index={index}
                name='apartment'
                label='Apartment'
                type='text'
                placeholder='Apt 101'
                />
                
                <Input
                register={register}
                index={index}
                name='city'
                label='City'
                type='text'
                placeholder='Cityville'
                />

                <Input
                register={register}
                index={index}
                name='state'
                label='State'
                type='text'
                placeholder='Stateville'
                />

                <Input
                register={register}
                index={index}
                name='country'
                label='Country'
                type='text'
                placeholder='Countryland'
                />

                <Input
                register={register}
                index={index}
                name='zip_code'
                label='Zip Code'
                type='text'
                placeholder='12345'
                />
                <Button className='deleteBtn' variant="contained" color='error' type='button' onClick={() => deleteFunction(addresses.addressId,index)}>
                Remove Address
                </Button>
                </div>

            )
            })}
            
            <div className='createBtn'>
            <Button variant="contained" type='button' onClick={() => append({})}>Add Address</Button>
            
            <Button type='submit' variant="contained" color='success' onClick={onSubmit}>Save</Button>
            </div>
        </form>
        <div className='error'>
                <h1>{error}</h1>
        </div>
        </section>
    )
}


export default Form
