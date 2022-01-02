import Navigation from '../Navigation/Navigation';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Explore = () => {
    const[services,setServices] = useState([]) ;
    useEffect(  ()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])

    return (
        <div>
            <Navigation></Navigation>
            <h1 className='mt-5'>Here is Our All Products</h1>
                <div className='service-card'>

                        {
                            services.map(service => <Service
                            services={service}
                            key={service.id}
                            >

                            </Service>)
                        }
                </div>
        </div>
    );
};

export default Explore;