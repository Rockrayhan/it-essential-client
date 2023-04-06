import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation' ;
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheakoutForm from './CheakoutForm';



const stripePromise = loadStripe('pk_test_51KEGHcLZP8FIlAlHwMgv1xaWGRe5RB6gt1X6u5kyKGgfmtJ2HhBWgrkCJP5UJ3EjBp46oHeaVND8OGUJsne1dxNO00k4gIKh1p')


const Payment = () => {
    const {orderId} = useParams();
    const [order, setOrder] = useState({});
    useEffect( ()=> {
        fetch(`https://assaignment-13-server.vercel.app/orders/${orderId}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    } ,[orderId])
    console.log(order);
    return (
        <div>
            <Navigation></Navigation>
           
           
            <h1>Hello <b>  {order.displayName}</b> </h1>
            <h2>Please pay for <b> {order.productName}</b> </h2>
            
            <h4 className='text-danget'> Price : {order.price} </h4>
            Payment ID : {orderId}

            <Elements stripe={stripePromise}>
      <CheakoutForm 
      order={order}
      />
    </Elements>
        </div>
    );
};

export default Payment;