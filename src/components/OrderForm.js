import "./Form.css"
import "./OrderForm.css"
import { useForm } from "react-hook-form"
import React, { useState } from 'react';
import store from './../store.js';

function OrderForm(props) {
    const [discountText, setDiscountText] = useState("Order");
    const [discountColor, setDiscountColor] = useState(`button-color-${props.color}`);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        } = useForm()

    const onSubmit = async(data) => {
        setDiscountText("The order is placed")
        if(discountColor == `button-color-${props.color}`) {
            setDiscountColor(`${discountColor}-active`)
        }

        const count = store.getState().cart.map(item => item.quantity).reduce((acc, quantity) => acc + quantity)
        const total = store.getState().cart.map(item => item.quantity * (item.discont_price ? item.discont_price : item.price)).reduce((acc, quantity) => acc + quantity)

        data.count = count
        data.total = total
        data.productIds = store.getState().cart.map(item => item.id)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:3333/order/send', requestOptions);
        const rs = await response.json();
    }


    return (
        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
            <a className="order-header">Order details</a>
            <a className="count">{store.getState().cart.map(item => item.quantity).reduce((acc, quantity) => acc + quantity)} items</a>
            <div className="total-flex">
                <a className="total">Total</a>
                <a className="total-value">{store.getState().cart.map(item => item.quantity * (item.discont_price ? item.discont_price : item.price)).reduce((acc, quantity) => acc + quantity)}</a>
            </div>
            <input className="btn-card form-border color" placeholder="Name" {...register("name", { required: true })} />
            <input className="btn-card form-border color" placeholder="Phone Number" {...register("phone", { required: true })} />
            <input className="btn-card form-border color" placeholder="Email" {...register("email", { required: true })} />

            {errors.exampleRequired && <span>This field is required</span>}
    
            <input className={`button ${discountColor}`} value={discountText} type="submit" />
        </form>
      )
}

export default OrderForm;