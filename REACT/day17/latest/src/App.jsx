import React from 'react'
import { useState,useEffect} from 'react'
//Task1
const Task1 = () => {
  const [count,setCount]=useState(0)

  const [isRunning,setIsRunning]=useState(false);

  useEffect(()=>{
    if(!isRunning){
      return;
    }

    const timer=setInterval(()=>{
      setCount((prev)=>prev+1);
    },1000);
    return()=>clearInterval(timer);
  },[isRunning]);

    const handleStart=()=>{
    setIsRunning(true);
    };

   const handleStop=()=>{
    setIsRunning(false);
   };
   const handleReset=()=>{
    setIsRunning(false);
    setCount(0);
   }

  return (
    <>
     <div>
       <h1>Timer:{count}</h1>

       <button onClick={handleStart}>Start</button>
       <button onClick={handleStop}>Stop</button>
       <button onClick={handleReset}>Reset</button>

     </div>
    </>
    
  );
}
//Task2
function Task2(){
  const[message,setMessage]=useState("Please Wait...");
  const [restartkey,setRestartkey]=useState(0);

  useEffect(()=>{
    const timer =setTimeout(()=>{
      setMessage("Welcome to React!");
    },3000);
    return()=>clearTimeout(timer);
  },[restartkey]);

  const handleRestart=()=>{
    setMessage("Please Wait...");
    setRestartkey((prev)=>prev+1);

  };
  return(
    <>
    <div>
      <h1>{message}</h1>

      <button onClick={handleRestart}>Restart</button>
    </div>
    </>
  );
}
function App (){
  return(
    <>
    <div>
    <Task1/>
    <Task2/>

    </div>
    </>
  )
}




export default App