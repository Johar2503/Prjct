import React, { useState } from 'react';
import './Signup.css'
import { useStateValue } from "../../../functions/Utils/StateProvider";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { validateFields } from '../../../functions/Auth/Signup';


function Signup() {
  

  return (
    <div className="Signin-Container">
      <div className="Signin-Wrapper">
        <div className="Signin-Left">
         <div className="Signin-Image"/>
        </div>
        <div className="Signin-Right">
          <h2 className="Signin-Header">Register</h2>
          
          {/* <FormControl variant="standard" className="Signin-Input" error = {values.showError}>
            <InputLabel id="admin/user-label">Admin/User *</InputLabel>
            <Select
              labelId="admin/user-label"
              id="admin/user"
              value={values.type}
              label="Admin/User *"
              onChange={handleChange('type')}
            >
              <MenuItem value={'admin'}>Admin</MenuItem>
              <MenuItem value={'user'}>User</MenuItem>
            </Select>
          </FormControl> */}
          <TextField
          required
            //error = {values.showError}
            id="email"
            type={"email"}
            className="Signin-Input"
            label="Email"
            //value={values.email}
            //onChange={handleChange('email')}
            variant="standard"
          />
          <TextField
          required
           // error = {values.showError}
            id="username"
            type={"text"}
            className="Signin-Input"
            label="Username "
           // value={values.username}
           // onChange={handleChange('username')}
            variant="standard"
          />
          <TextField
          required
           // error = {values.showError}
            id="address"
            type={"text"}
            className="Signin-Input"
            label="Address"
           // value={values.username}
           // onChange={handleChange('username')}
            variant="standard"
          />
          <TextField
          required
            //error = {values.showError}
            id="mobileNumber"
            type={"text"}
            className="Signin-Input"
            label="Mobile Number "
            //value={values.mobileno}
            //onChange={handleChange('mobileno')}
            variant="standard"
          />
          <TextField
          required
            //error = {values.showError}
            id="password"
            type={"password"}
            className="Signin-Input"
            label="Password "
           // value={values.password}
            //onChange={handleChange('password')}
            variant="standard"
          />
          <TextField
          required
            //error = {values.showError}
            id="confirmPassword"
            type={"password"}
            className="Signin-Input"
            label="Confirm Password "
           // value={values.cpassword}
           // onChange={handleChange('cpassword')}
            variant="standard"
          />

          <Button id="submitButton" variant="contained" className="Signin-Button">Submit</Button>
          <p className="Signin-Text">Already a user? <a id="signupLink" href="/user/login" className="Signin-Link">Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup