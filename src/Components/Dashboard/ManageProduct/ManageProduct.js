import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Navigation/Navigation';

const ManageProduct = () => {

    const [data, setData] = useState([])
    useEffect(  ()=>{
        fetch('https://assaignment-13-server.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setData(data))
    } ,[])



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to Delete..!!');

        if (proceed) {
            window.location.reload();
            const url = `https://assaignment-13-server.vercel.app/services/${id}` ;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount > 0) {
                
                const remaining = data.filter(product => product._id !== id) ;
                setData(remaining);
            }
        });

        }        
    }; 


    return (
        <div className="manageProduct-body">
            <Navigation></Navigation>
            <h1 className='mt-5 mb-5'>
                Welcome to Product Manager
            </h1>
            <div className="row ms-5">

            {
                data.map(product => <div className="col-lg-6 col-md-8"
                key={product._id}
                > 
<Container>
<Card sx={{ maxWidth: 345, my:'20px'}}>
      <CardMedia
        component="img"
        height="140"
        image={product.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        Price: {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button onClick={() => handleDelete (product._id) }  variant='contained' sx={{mx:'auto'}} color="error">Delete</Button>
        
      </CardActions>
    </Card>
    </Container>

                </div>)
            }

            </div>

           

        </div>
    );
};

export default ManageProduct;