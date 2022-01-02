import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';



export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
        <NavLink to='/home'>
        <Button variant="contained">Home</Button>
        </NavLink>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            IT Essential
          </Typography>
         <NavLink to='/login'>
         <Button variant="contained">Login</Button>
         </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
