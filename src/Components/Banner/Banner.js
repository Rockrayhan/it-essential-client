import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../Banner.PNG';
import './Banner.css'
const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width:'100%',       
    }
    const fontStyle={
        color: 'white',
        padding: "70px 0",
        textAlign:" center",
        marginTop:'200px'
       
    }
    
    return (
        <div style={bannerStyle}  className='banner-container'>
            <div   className='row'>
            <div className='col-lg-12'>
           
            <div style={fontStyle}>
               <div>
               <h1>Welcome to <span className='fw-bold'>IT Essentials</span></h1>
               </div>
                <br />
                <h6>Get your Required IT services at Resonable price</h6>
                <br />
                <NavLink to='/explore'>
                <button className='btn btn-primary'>
                    Explore More
                </button>
                </NavLink>
                </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;