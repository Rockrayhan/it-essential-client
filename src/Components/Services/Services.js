import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-scrubland-98995.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container  mt-5'>
            <h1 className='fw-bold'>Our Services</h1>
           <h6> (Same price same Quality)</h6>
            <div className='row service-card d-flex justify-content-evenly'>

                {
                    services.map(service => <Service
                        services={service}
                        key={service._id}
                    ></Service>).slice(4)
                }

            </div>
            
               {/*  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={4}>
                    {
                    services.map(service => <Service
                        services={service}
                        key={service.id}
                    ></Service>).slice(4)
                }

                    </Grid>
                    </Grid> */}
            



        </div>
    );
};

export default Services;