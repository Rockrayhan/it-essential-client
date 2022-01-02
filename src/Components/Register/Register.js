import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
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

        e.preventDefault();
        alert('Login SuccessFull');
    }

    return (
       <Container>
            <Box className="mt-5"  >
            <Grid item sm={12} md={12} lg={12}>
                <h1>Register Please</h1>
                {/*  {!isLoading && */} <form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Your Email"
                        variant="standard"
                        name="email"
                        type='email'
                        onBlur={handleOnChange}
                    />
                    <br />
                    <TextField
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Your Password"
                        variant="standard"
                        type="password"
                        name="password"
                        onBlur={handleOnChange}

                    />
                    <TextField
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Resubmit Your Password"
                        variant="standard"
                        type="password"
                        name="password2"
                        onBlur={handleOnChange}

                    />
                    <br />

                    <Button sx={{ width: '50%', m: 2 }} variant="contained" type="submit"> Login </Button>
                    <br />
                    <NavLink style={{ textDecoration: "none" }} to="/login"> <Button variant="text"> Already registered ? please Login</Button> </NavLink>

                </form>  {/* } */}
                {/* {isLoading && <LinearProgress />} */}
            </Grid>
        </Box>
       </Container>
    );
};

export default Register;