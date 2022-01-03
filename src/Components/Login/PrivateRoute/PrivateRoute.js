import { LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest}) => {

    const {user, isLoading} = useAuth();
    let location = useLocation();
    if (isLoading) {return <LinearProgress/>}
    if (!user?.email)  {
        return <Navigate to='/login' state={{from:location}} />
    }
    return children ;
};

export default PrivateRoute;