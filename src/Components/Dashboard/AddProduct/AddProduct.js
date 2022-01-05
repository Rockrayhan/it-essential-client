import React, { useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {
    // const [image, setImage] = useState(null)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);


        // if (!image) {
        //     return;
        // }
        // const formData = new FormData();
        // formData.append('image',image);
    

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product Added Successfully');
                    reset();
                }
            })

            
    

    }



    const price = 10000 ;
    return (
        <div>
            <Navigation></Navigation>
            <h1 className='mt-5 mb-5'>  Add a Product  </h1>

            <div className="container add-product">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type='number' {...register("price")} placeholder={price} ></input>
                <input {...register("img")} placeholder="img url" />
                {/* <input {...register("img")}  type="file" name='picture'
                onChange={e=>setImage(e.target.files[0])}
                /> */}

                <input type="submit" />
            </form>
            </div>
            


        </div>
    );
};

export default AddProduct;