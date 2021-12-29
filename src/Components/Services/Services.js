import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]) ;
    useEffect( ()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setServices(data) )
    } , [] ) 

    return (
        <div className='container mt-5'>
            <h1 className='fw-bold'>Our Services</h1>
            <div className='service-card'>
                
                    {
                        services.map(service => <Service
                        services={service}
                        key={service.id}
                        ></Service>).slice(4)
                    }
                
            </div>
        </div>
    );
};

export default Services;