import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Purchase = () => {

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
                <img style={{width:'40%'}} src={exactItem[0]?.img} alt="" />


            </div>

        </div>
    );
};

export default Purchase;