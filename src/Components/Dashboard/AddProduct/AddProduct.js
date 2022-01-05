import React from 'react';
import Navigation from '../../Navigation/Navigation';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })

    }

    return (
        <div>
            <Navigation></Navigation>
            <h1 className='mt-5 mb-5'>  Add a Product  </h1>

            <div className="container add-product">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="img url" />

                <input type="submit" />
            </form>
            </div>
            


        </div>
    );
};

export default AddProduct;