import React, {useState} from 'react'
/*import "jquery";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";*/
import {AppBar,Button,Tab,Tabs, Toolbar, Typography,useTheme,useMediaQuery} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LoginDrawer from './LoginDrawer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function LoginHeader() {
  const [value, setvalue] = useState();
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down("md"));
   // const Pages=["Admin"];
  return (
    <React.Fragment>
    <AppBar sx={{background:'#063970',position:'fixed',top:0}}>
        <Toolbar>
           <ShoppingCartCheckoutIcon/>
           {
            isMatch?(
                <>
                <Typography>FASHION SHOPPEE</Typography>
                <LoginDrawer/>
                </>
            ):(
                <>
                 <Tabs textColor="inherit" value={value} onChange={(e,value)=>setvalue(value)} indicateColor='secondary'>
                
            </Tabs>
            <Button sx={{marginLeft:'auto'}} variant='contained' href='/admin/login'>Admin</Button>

                </>
            )
           }
           
        </Toolbar>
        </AppBar>  
    </React.Fragment>
  );
}

export default LoginHeader