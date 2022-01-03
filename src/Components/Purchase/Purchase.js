import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Navigation/Navigation';

const Purchase = () => {
    const {user} = useAuth() ;

    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const exactItem = data.filter(td => td.id == id);
    console.log(exactItem[0]?.name);


    return (
        <div>
            <Navigation></Navigation>
            <div className="container">
                <h1 className='mt-5 mb-5 text-primary fw-bold'>Welcome to purchase page</h1>
                <h4>Product Name : {exactItem[0]?.name} </h4>
                <h6 className='mt-3 mb-3'>Description:  {exactItem[0]?.description} </h6>
                <img style={{ width: '40%' }} src={exactItem[0]?.img} alt="" />

                <br />
                <br />
                <br />

                <h3>Purchase Details</h3>
                <br />

                <form className="mb-5">
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue="product Name"
          size="small"
          name="productName"
        //   onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
          name="displayName"
        //   onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Phone number'
          size="small"
          name="phone"
        //   onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
          name="email"
        //   onBlur={handleOnBlur}
          />
        <TextField
          sx={{width:'70%' , m:1}}
          id="outlined-size-small"
          defaultValue='Address'
          size="small"
          name="address"
        //   onBlur={handleOnBlur}
          />
        <br />
        <Button type="submit" variant="contained">Order Now</Button>


        </form>

            </div>



        </div>
    );
};

export default Purchase;