import React from 'react';
import contactUS from '../../images/Contact-us.png'
const Contact = () => {
    return (
        <div className='container'>
          <h1 className='mb-5 mt-5 fw-bold'>Contact us</h1>
        <div className="row justify-content-evenly">
          

          <div className="col-lg-4">
              <div>
              <img className='img-fluid' src={contactUS} alt="" />
              </div>
          </div>
          <div className="col-lg-4">
          <div class="py-4 mb-5">
          <form id="contactForm">
            <div class="mb-3">
              <input class="form-control border border-primary" id="name" type="text" placeholder="Name" />
            </div>
            <div class="mb-3">
              
              <input class="form-control border border-primary" id="emailAddress" type="email" placeholder="Email Address" />
            </div> 
            <div class="mb-3">
              <textarea class="form-control border border-primary" id="message" type="text" placeholder="Message" style={{height: "10rem"}}></textarea>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>

          </form>

        </div>
          </div>
        </div>
        </div>
    );
};

export default Contact;