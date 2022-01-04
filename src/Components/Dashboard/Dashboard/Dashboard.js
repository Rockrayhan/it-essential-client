import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Myorders from '../MyOrders/Myorders';
import { Button, Grid } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 200;



function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user, logOut } = useAuth();



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <h6><b> <u>DashBoard Menu</u> </b></h6>
            <List>

                {
                    !admin && <Box>


                        <Link to='/payment'> <Button variant='contained'> Payment</Button>  </Link>
                        <Link to='/myorders'> <Button sx={{marginTop:'10px', marginBottom:'10px'}} variant='contained'> My Orders</Button></Link>


                    </Box>
                }
                {admin && <Box>

                    <Link to='/makeadmin'> <Button variant='contained'> Make Admin</Button></Link>
                    <Link to='/manageproduct'> <Button sx={{marginTop:'10px', marginBottom:'10px'}} variant='contained'> Manage Products</Button></Link>
                    <Link to='/addproduct'> <Button variant='contained'> Add Products</Button></Link>

                </Box>}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to='/'><Button variant="contained">Home</Button></Link>
                    <Typography sx={{ mx: 'auto', fontWeight: 'bold' }} variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>

                    {
                        user?.email ?

                            <Box>

                                <Button onClick={logOut} variant="contained">Logout</Button>

                            </Box>

                            :
                            <Link to='/login'>
                                <Button variant="contained">Login</Button>
                            </Link>
                    }


                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            {/* <Outlet/> */}
                        </Grid>

                    </Grid>
                </Typography>

            </Box>

        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
