import React from 'react';
import { NavLink } from 'react-router-dom';

const Register2 = () => {
    return (
        <div>
            {/* find css on Banner.css  */}

            <h1 className='texty mt-5 mb-5'>Register with NodeJS</h1>

           <h6>
           Already Registered ? Please <NavLink to='/login2'>  <button> Login</button> </NavLink>
           </h6>
        </div>
    );
};

export default Register2;