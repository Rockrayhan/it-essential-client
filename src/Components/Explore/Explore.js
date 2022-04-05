import Navigation from '../Navigation/Navigation';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Explore = () => {
    const[services,setServices] = useState([]) ;
    useEffect(  ()=>{
        fetch('https://mysterious-scrubland-98995.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])

    return (
        <div>
            <Navigation></Navigation>
           <div className="container">
           <h1 className='mt-5'>Here is Our All Products</h1>
           <h6> (Same price same Quality)</h6>
                <div className='row service-card justify-content-evenly ms-5'>

                        {
                            services.map(service => <Service
                            services={service}
                            key={service.id}
                            >

                            </Service>)
                        }
                </div>
           </div>
        </div>
    );
};

export default Explore;