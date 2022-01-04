import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Navigation from '../../Navigation/Navigation';
const Myorders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    return (
        <div>
            <Navigation></Navigation>
<div className="container">
<h1>  {user.displayName} Has {orders.length} Orders </h1>

<TableContainer component={Paper}>
    <Table aria-label="My Orders table">
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone no</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Product Name</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {orders.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.displayName}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}  </TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.productName}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
</div>


</div>







           
            
        
    );
};

export default Myorders;