import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
<div class="py-4 mb-5">
    <h1 className='mb-5 fw-bold'>Contact us</h1>
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
    );
};

export default Contact;