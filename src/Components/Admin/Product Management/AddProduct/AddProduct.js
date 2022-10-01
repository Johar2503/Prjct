import { Avatar, Breadcrumbs, Button, Link, TextField, Typography } from '@mui/material';
import React, {  useState } from 'react';
import "./AddProduct.css";
import Header from '../../../Header/Header';
import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../Header/AdminHeader'

export default function AddProduct() {
   /* const [product, setproduct] = useState({
        productId: '',
        productName: '',
        productImageUrl: '',
        productDescription: '',
        productLocation: '',
        productCapacity: '',
        productDataarr: []
    });*/
    
       
    const breadcrumbs = [
        <Typography key="1" color="inherit">
            Admin
        </Typography>,
        <Link
            key="2"
            color="inherit"
            underline="hover"
            //onClick={()=>{ navigate("/admin/viewproduct")}}
        >
            Products
        </Link>,
        <Typography key="3" color="text.primary">
            Add Product
        </Typography>
    ];
    return (
        <div>
       <AdminHeader/>
        <div className="Addproduct-Nav">
          <Avatar sx={{width: 30, height: 30, marginRight: '8px'}}>
         
          </Avatar>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className="Addproduct-Form">
        <TextField 
        type="text" 
        className='Addproduct-Input'  
        id="productName"  
        label="Enter product name"  
        variant="standard" 
        required/>
        <TextField 
        type="text" 
        className='Addproduct-Input'  
        id="capacityOfproduct" 
        label="Enter the capacity of the product" 
        variant="standard" 
        required/>
                
        <TextField 
        type="text" 
        className='Addproduct-Input'  
        id="imageurl" label="Enter the product Image Url"  
        variant="standard" 
        required/>
        
        <TextField 
        type="text" 
        className='Addproduct-Input' 
        minRows={3}
            multiline  id="productDescription" 
            label="Enter the product Description"   
            variant="standard" 
            required/>
          <div className="Addproduct-ButtonWrapper">
          <Button variant="contained" className="Addproduct-Button" id="addproduct">Add</Button>
          </div>
        </div>
    </div>
    )
}
