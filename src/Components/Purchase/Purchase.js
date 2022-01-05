import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Navigation/Navigation';

const Purchase = () => {
    const {user} = useAuth() ;

    const price = 10000 ;

    const initialInfo = {displayName: user.displayName, email : user.email, phone : '', address: '', productName: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo) ;

    const handleOnBlur = e => {
      const field = e.target.name ;
      const value = e.target.value ;
      const newInfo = {...orderInfo} ;
      newInfo[field] = value ;
      setOrderInfo(newInfo) ;
    }


    // get data
    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    console.log(data)
    // const exactItem = data.filter(td => td.id == id);
    // console.log(exactItem[0]?.name);




    const handleOrderSubmit = e => {
      // collect data
      const order = {
        ...orderInfo,
        price,
      }
      //send data to the server
      console.log(order);
      fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

      alert('order confirmed') ;
      e.preventDefault();
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <h1 className='mt-5 mb-5 text-primary fw-bold'>Welcome to purchase page  </h1>
                <h4>Product Name : {data.name} </h4>
                <h6 className='mt-3 mb-3'>Description:  {data.description} </h6>
                <img style={{ width: '40%' }} src={data.img} alt="" />

                <br />
                <br />
                <br />

                <h3>Purchase Details</h3>
                <br />

                <form className="mb-5" onSubmit={handleOrderSubmit}>
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Enter Product name'
          size="small"
          name="productName"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
          name="displayName"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Enter Phone number'
          size="small"
          name="phone"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
          name="email"
          onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={price}
          size="small"
          onBlur={handleOnBlur}
          disabled
          />
          <br />
        <Button type="submit" variant="contained">Order Now</Button>


        </form>

            </div>



        </div>
    );
};

export default Purchase;