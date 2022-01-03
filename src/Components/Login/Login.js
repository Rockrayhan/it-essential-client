import { Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({}) ;
    const {user, loginUser, isLoading} = useAuth() ;

    const location = useLocation();
    const navigate = useNavigate() ;


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate) ;
        e.preventDefault();
        alert('Login SuccessFull');
    }

    return (
       <Container>
            <Box className="mt-5"  >
            <Grid item sm={12} md={12} lg={12}>
                <h1>Please Login</h1>
              { !isLoading && <form onSubmit={handleLoginSubmit}>

                    
                  
                    <TextField
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Your Email"
                        variant="standard"
                        name="email"
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
                    <br />

                    <Button sx={{ width: '50%', m: 2 }} variant="contained" type="submit"> Login </Button>
                    <br />
                    <NavLink style={{ textDecoration: "none" }} to="/register"> <Button variant="text"> New User ? please Register</Button> </NavLink>

                </form> }

                {isLoading && <LinearProgress/>}
               
            </Grid>
        </Box>
       </Container>
    );
};

export default Login;