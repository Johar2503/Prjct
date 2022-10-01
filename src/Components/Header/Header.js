import React, {useState} from 'react'
import {AppBar,Button,Tab,Tabs, Toolbar, Typography,useTheme,useMediaQuery} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Header() {
    const [value, setvalue] = useState();
    const theme=useTheme();
    const isMatch=useMediaQuery(theme.breakpoints.down("md"));
    const Pages=[];
  return (
  <React.Fragment>
      <AppBar sx={{background:'#063970',position:'fixed',top:0}}>
        <Toolbar>
           <ShoppingCartCheckoutIcon/>
           {
            isMatch?(
                <>
                <Typography>FASHION SHOPPEE</Typography>
                <DrawerComp/>
                </>
            ):(
                <>
                 <Tabs textColor="inherit" value={value} onChange={(e,value)=>setvalue(value)} indicateColor='secondary'>
                    {
                        Pages.map((page,index)=>(
                            <Tab key={index} label={page}/>
                        ))
                    }
            </Tabs>
            
            <Button sx={{marginLeft:'auto',color:'white'}}><AddShoppingCartIcon /></Button>

            <Button sx={{marginLeft:'10px'}} variant='contained'>Logout</Button>
            
                </>
            )
           }
           
        </Toolbar>
    
        </AppBar>  
    </React.Fragment>
  )
}

export default Header