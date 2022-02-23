import React from 'react';
import about1 from '../../images/about-1.png'
import about2 from '../../images/about2.png'
import about3 from '../../images/about3.png'
const AboutUs = () => {
    return (
        <div className='container'>
            <h1 className='mb-5 fw-bold'>About us</h1>
                <div className="row justify-content-center">
                    <div className="col-lg-4 about-us-box shadow-lg p-4 mb-5 bg-body rounded">
                        <img src={about1} alt="" />

                        <h1 className='fw-bold mt-4'>231</h1>

                        <h6>Valued Client</h6>

                        <h6 className='fw-light mt-3 mb-3'>Our vertical solutions expertise allows your <br /> business to streamline workflow, and <br /> increase productivity.</h6>

                        <h6 className='text-primary textUL fw-bold mt-5'><a href="">Learn More &#8594;</a></h6>

                    </div>

                    <div className="col-lg-4 about-us-box-middle shadow-lg p-4 mb-5 bg-body rounded">
                        <img src={about2} alt="" />

                        <h1 className='fw-bold mt-4'>340</h1>

                        <h6>Experts Around The world</h6>

                        <h6 className='fw-light mt-3 mb-3'>We help top organizations stay competitive, win new markets and increase <br /> shareholder value.</h6>

                        <h6 className='text-primary textUL fw-bold'><a href="">Learn More &#8594;</a></h6>

                    </div>

                     <div className="col-lg-4 about-us-box shadow-lg p-4 mb-5 bg-body rounded">
                        <img src={about3} alt="" />

                        <h1 className='fw-bold mt-4'>$10m</h1>

                        <h6>Revenue In Last 3 years</h6>

                        <h6 className='fw-light mt-3 mb-3'>We transform your organization with a modern, optimized data center and <br /> sophisticated security solutions.</h6>

                        <h6 className='text-primary textUL fw-bold'><a href="">Learn More &#8594;</a></h6>

                    </div>
                </div>
           
        </div>
    );
};

export default AboutUs;