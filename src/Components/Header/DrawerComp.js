import { IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React,{useState} from 'react'
import {Drawer} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
function DrawerComp() {
    const [openDrawer, setopenDrawer] = useState(false);
    const Pages=["Logout"];
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
            <List>
                {
                    Pages.map((page,index)=>(
                        <ListItemButton onClick={() => setopenDrawer(false)} key={index}>
                        <ListItemIcon>
                        <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                    ))
                }
                
            </List>
        </Drawer>
        <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=>setopenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
        </React.Fragment>
  )
}

export default DrawerComp