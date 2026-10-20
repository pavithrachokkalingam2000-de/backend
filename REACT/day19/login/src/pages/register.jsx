import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const register =()=>{

    const navigate = useNavigate()

    const [registerdata,setRegisterData]=useState({username:"",useremail:"",userpassword:""})


    const handleChange =(e)=>{
        setRegisterData({...registerdata,[e.target.name]:e.target.value})
    }


const getDatas = JSON.parse(localStorage.getItem("registerdatas"))

return(
    <>
    <input type="email" placeholder='Enter the Email' onChange={handleChange} value={register.useremail} name="useremail"/>
   <input type="password" placeholder='Enter the password' onChange={handleChange} value={register.userpassword} name="userpassword"/>
    

    
    </>
)
}
