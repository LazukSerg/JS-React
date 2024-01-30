import "./Form.css"
import { useForm } from "react-hook-form"
import React, { useState } from 'react';

function Form(props) {
    const [discountText, setDiscountText] = useState("Get a discount");
    const [discountColor, setDiscountColor] = useState(`button-color-${props.color}`);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        setDiscountText("Request Submitted")
        if(discountColor == `button-color-${props.color}`) {
            setDiscountColor(`${discountColor}-active`)
        }
    }


    return (
        <form className="discount-form" onSubmit={handleSubmit(onSubmit)}>
            <input className="btn-card" placeholder="Name" {...register("name", { required: true })} />
            <input className="btn-card" placeholder="Phone Number" {...register("phone", { required: true })} />
            <input className="btn-card" placeholder="Email" {...register("email", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}
    
            <input className={`button ${discountColor}`} value={discountText} type="submit" />
        </form>
      )
}

export default Form;