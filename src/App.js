
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BuyProduct from './Components/Product/BuyProduct/BuyProduct';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import Login from './Components/Auth/Login/Login'
import LoginHeader from './Components/Header/LoginHeader';
import SignUp from './Components/Auth/Signup/Signup'
import AdminLogin from './Components/Admin/Auth/AdminLogin';
import AdminProduct from './Components/Admin/Product Management/ViewProduct/AdminProduct'
import EditProduct from './Components/Admin/Product Management/Edit Product/EditProduct'
import AddProduct from './Components/Admin/Product Management/AddProduct/AddProduct'
import DisplayUser from './Components/Admin/UserManagement/DisplayUser/DisplayUser';
import EditUser from './Components/Admin/UserManagement/EditUser/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
       
          <Routes>
            <Route exact path = "/user/signup" element={<SignUp/>}/>
            <Route exact path="/user/login" element={<Login/>}/>
            <Route exact path="/" element={<Navigate replace to="/user/login"/>}/>
            <Route exact path="/login" element={<Navigate replace to="/user/login"/>}/>
            <Route exact path="/admin/login" element={<AdminLogin/>}/>
            <Route exact path="/user/products" element={<Product/>}/>
            <Route exact path="/user/buyproduct" element={<BuyProduct/>}/>
            <Route exact path="/admin/products" element={<AdminProduct/>}/>
            <Route exact path="/admin/editproduct" element={<EditProduct/>}/>
            <Route exact path="/admin/addproduct" element={<AddProduct/>}/>
            <Route exact path="/admin/displayusers" element={<DisplayUser/>}/>
            <Route exact path="/admin/edituser" element={<EditUser/>}/>
            <Route exact path="/user/buyproduct" element={<BuyProduct/>}/>

          </Routes>
          </Router>
     
    </div>
  );
}

export default App;
