import React from 'react';
import appointmentBg from '../../images/AppointmentBG.webp';

const Appointment = () => {

    const appintmentBgStyle = {
        backgroundImage: `url(${appointmentBg})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        opacity: '.90'
    }
    return (
        <div style={appintmentBgStyle} className='banner-container mt-5'>
                <h1 style={{color:'white', fontWeight:'bold', marginTop:'40px', marginBottom:'40px', fontSize:'60px', fontFamily:'cursive'}}>Make An Appointment</h1>

            <div className="row">
                <div className="col-lg-6">

                    <div class="container mt-5 mb-5 d-flex justify-content-center">
                        <div class="card px-1 py-4">
                            <div class="card-body">

                                <h6 class="information mt-4">Please provide following information For appointment</h6>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <input class="form-control" type="text" placeholder="Name" /> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <div class="input-group"> <input class="form-control" type="text" placeholder="Mobile" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <div class="input-group"> <input class="form-control" type="text" placeholder="Email ID" /> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <div class="input-group"> <input class="form-control"
                                            type="text" placeholder="Description" /> </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small class="agree-text">By Booking this appointment you agree to the</small> <a href="#" class="terms">Terms & Conditions</a> </div> 
                                
                                <button style={{width:'100%'}} class="btn btn-primary  confirm-button">Confirm</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div>
                        <h2 style={{color:'white', fontWeight:'bold', marginTop:'120px'}}>
                        Excellent IT <br /> services for your <br /> success.
                        </h2>

                        <p style={{color:'white', marginTop:'40px'}}>
                        Your business can save money and time today with Outsourceo’s managed services, <br /> network solutions, IT support and more.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Appointment;