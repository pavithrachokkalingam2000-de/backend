import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {
    const navigate = useNavigate()
    const [login,setLogin]=useState({useremail:"",userpassword:""})

    const handleChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});

    }

    const handleLogin=(e)=>{
      e.preventDefault();

    }

   
   const getDatas=JSON.parse(localStorage.getItem("registerdatas"));
   

   const user = getDatas.find((data)=>{
    return(
      data.useremail === login.useremail && data.userpassword === login.userpassword
    );
   });

   if (user) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }


  return (
    <>
    <input type="email" placeholder='Enter the Email' onChange={handleChange} value={login.useremail} name="useremail"/>
   <input type="password" placeholder='Enter the password' onChange={handleChange} value={login.userpassword} name="userpassword"/>
    
    </>
   
    

   
  )
}

export default login