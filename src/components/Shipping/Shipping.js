import userEvent from '@testing-library/user-event';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Shipping.css'


const Shipping = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = values => {
    console.log(values)
    };


    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                
                <input placeholder = "Name" defaultValue={user.displayName} {...register("name")} />

                <input placeholder = "Email" defaultValue={user.uid} {...register("email", { required: true })} />
                <input placeholder ="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />

                <input placeholder = "Phone"defaultValue="" {...register("phone")} />


                
                {errors.exampleRequired && <span className ="error">This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;