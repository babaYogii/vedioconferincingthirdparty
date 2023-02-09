import React,{useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../assets/logo.svg"

import {Link, useNavigate} from 'react-router-dom'


const drawerWidth = 240;
const navItems = [ 'CreateMeeting', 'Profile'];
const navItemsLogout=['CreateMeeting','Logout',"Profile"]

let token=localStorage.getItem('token');
console.log(typeof token)



function DrawerAppBar(props) {
  const [auth,setAuth]=useState(false);
 

  const Navigate=useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  useEffect(()=>{
    let token=localStorage.getItem('token');
    if(token){
      setAuth(true);
    }
 },[])


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background:'#FFF'}}>
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img src={logo} alt='Loading' style={{height:"4rem"}} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* { !auth 
            ? navItems.map((item) => (
              <Link key={item} to={item} style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant='NavItem' sx={{ color: '#00A86B',fontWeight:600,padding:'16px',fontSize:'18px',paddingRight:"20px" }} >
                {item}
              </Typography></Link>
              
            )):
            navItemsLogout.map((item) => (
              <Link key={item} to={item} style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant='NavItem' sx={{ color: '#00A86B',fontWeight:600,padding:'16px',fontSize:'18px',paddingRight:"20px" }} >
                {item}
              </Typography></Link>
              ))
              
              
} */}
    {
      !auth &&
      navItems.map((item) => (
        <Link key={item} to={item} style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant='NavItem' sx={{ color: '#00A86B',fontWeight:600,padding:'16px',fontSize:'18px',paddingRight:"20px" }} >
          {item}
        </Typography></Link>
      ))
    }
{
      auth &&
      navItemsLogout.map((item) => (
        <Link key={item} to={item} style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant='NavItem' sx={{ color: '#00A86B',fontWeight:600,padding:'16px',fontSize:'18px',paddingRight:"20px" }} >
          {item}
        </Typography></Link>
        ))

      
    }



          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      
    </Box>
  );
}



export default DrawerAppBar;