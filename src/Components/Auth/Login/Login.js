import React,{useState} from 'react';
import './Login.css';
import { useStateValue } from "../../../functions/Utils/StateProvider";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { validateUser } from '../../../functions/Auth/Login';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from "../../../functions/Utils/Reducer";
import Header from '../../Header/Header';
import LoginHeader from '../../Header/LoginHeader';


function Login() {
  return (
    <React.Fragment>
      <LoginHeader/>
    <div className='Login-Container'>
        <div className='Login-Wrapper'>
            <div className='Login-Left'>
                <img className='Login-Image'/>
            </div>

            <div className="Login-Right">
            <h2 className="Login-Header">User Login</h2>

            
                    
          
            <FormControl className="Login-Input" variant="standard">
            <TextField id="email" htmlFor="email" label="UserName" variant='standard'
            required autoComplete='off'/>
              
              <TextField id="password" htmlFor="password" label="Password" variant='standard'
              required
              type="password"
               endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                   // onClick={handleClickShowPassword}
                   // onMouseDown={(e) => {e.preventDefault()}}
                  >
                    {/*values.showPassword ? <span className="material-icons">visibility_off</span> : <span className="material-icons">visibility</span>*/}
                  </IconButton>
                  
                </InputAdornment>
              }
              
            />
            
          </FormControl>
         <p> <Button id="loginButton" variant="contained" className="Login-Button" onClick={()=>alert("Login Successfully")}>Login</Button></p>
          <p className="Login-Text">Don't have an account? <a id="signupLink" href="/user/signup" className="Login-Link">Signup</a></p>
        
        </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Login;