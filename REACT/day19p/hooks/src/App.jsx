import React, { useRef } from 'react'

const App = () => {

  
  const data =useRef(null)

  const handleClick=()=>{


    data.current.innerHTML = "Welcome"
  
    data.current.style.color="black"

  

    
  }







  return (
    <>
    <div>

      <h2 ref={data}></h2>
       <button onClick={handleClick}>Click</button>

    </div>
    
    </>
    
  )
}

export default App