import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'

  function calculateDouble(num){
    console.log("calculation running...");

    for (let i=0;i<1000000;i++){

    }
    return num*2;
  }

  function app(){
    const [number,setNumber]=useState(0);
    const [dark,setDark]=useState(false);


    const result =useMemo (()=>{
      return calculateDouble(number);

    },[number]);
    
  return (
    <>

    <div style={{backgroundColor:dark? "black":"white",
      color:dark? "white":"black",
      minHeight:"100vh",
      padding:"30px"
    }}>

      <h1>Number Multiplication</h1>

      <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} placeholder='Enter a Number'/>

      <h2>Double:{result}</h2>

      <button onClick={()=>setDark(!dark)}>Change Theme</button>
      
    </div>

    </>
   
  );
}

export default app