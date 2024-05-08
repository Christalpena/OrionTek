import {useForm, useFieldArray } from 'react-hook-form'
import Input from '../components/input'
import { ListClients, createClient } from '../api'

// eslint-disable-next-line react/prop-types
const Form = () => {
    const clients = ListClients()
    const {register,handleSubmit,control} = useForm({defaultValues: {
        addresses : [{
            address: '',
            apartment: '',
            city: '',
            state: '',
            country: '',
            zip_code : 0
        }]
    }})

    const { fields, append, remove } = useFieldArray({
        name: "addresses",
        control
    });

    const onSubmit = handleSubmit(data => {
        createClient(data,clients)
    })

    return(
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
                <button type="button" onClick={() => remove(index)}>Remove Address</button>
                </div>
            )
            })}
            

            <button type='button' onClick={() => append({})}>Save Address</button>
            
            <button type='submit'>Create</button>
        </form>
    )
}


export default Form
