import { Button, Container, Grid, LinearProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
        alert('Registration SuccessFull..!!');
    }

    return (
        <Container>
            <Box className="mt-5"  >
                <Grid item sm={12} md={12} lg={12}>
                    <h1>Register Please</h1>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                        />

                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                            name="email"
                            type='email'
                            onBlur={handleOnBlur}
                        />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            variant="standard"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}

                        />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Resubmit Your Password"
                            variant="standard"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}

                        />
                        <br />

                        <Button sx={{ width: '50%', m: 2 }} variant="contained" type="submit"> Register </Button>
                        <br />
                        <NavLink style={{ textDecoration: "none" }} to="/login"> <Button variant="text"> Already registered ? please Login</Button> </NavLink>

                    </form>}
                    {isLoading && <LinearProgress />}

                </Grid>
            </Box>
        </Container>
    );
};

export default Register;