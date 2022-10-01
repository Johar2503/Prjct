import { Alert, Avatar, Breadcrumbs, Button, Link, TextField, Typography } from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './EditProduct.css';
import Header from '../../../Header/Header';
import AdminHeader from '../../Header/AdminHeader'

export default function EditProduct() {
  
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
      Edit product
    </Typography>
  ];
  return (
    <div>
     <AdminHeader/>
      <div className="Editproduct-Nav">
        <Avatar sx={{ width: 30, height: 30, marginRight: '8px' }}>
          
        </Avatar>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div className="Editproduct-Form">
        
        <TextField  
        type="text" 
        className='Editproduct-Input' 
        id="productName" 
        label="Enter product name" 
        variant="standard" 
        required />
        <TextField  
        type="text" 
        className='Editproduct-Input' 
        id="capacityOfproduct" 
        label="Enter the capacity of the product" 
        variant="standard" 
        required />

        <TextField 
         type="text" 
         className='Editproduct-Input' 
         id="imageurl" 
         label="Enter the product Image Url" 
         variant="standard" 
         required />

        <TextField 
        type="text" className='Editproduct-Input' minRows={3} 
        multiline 
        id="productDescription" 
        label="Enter the product Description" 
        variant="standard" 
        required />
        <div className="Editproduct-ButtonWrapper">
          <Button variant="contained" className="Editproduct-Button" id="editproduct" >Update</Button>
        </div>
      </div>
    </div>
  )
}
