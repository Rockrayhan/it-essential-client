import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Navigation/Navigation';

const MakeAdmin = () => {
    const [email, setEmail] = useState('') ;
    const handleOnBlur = e => {
        setEmail(e.target.value) ;
    } 

    const handleAdminSubmit = e => {
        const user = {email} ;
        fetch ('https://mysterious-scrubland-98995.herokuapp.com/users/admin' , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        alert('admin added ');
        e.preventDefault()
    }

    return (
        <div>
            <Navigation></Navigation>
            <h1 className='mt-5 mb-5'>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width:'35%'}} label="Email" 
            variant="standard" 
            onBlur={handleOnBlur}
            type="email"/>
            <Button sx={{marginTop:'10px'}} type="submit" variant="contained">Make Admin</Button>


            </form>
        </div>
    );
};

export default MakeAdmin;