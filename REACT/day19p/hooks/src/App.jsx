import React, { useRef } from 'react'

const App = () => {

  const data=useRef(null)

  const handleClick=()=>{
    data.current.innerHTML="pavi"
    data.current.style.color="red"
    
    
  }





  return (
    <>
    <div>
      <h2 ref={data}></h2>

      <button onClick={handleClick}>click</button>
      
    </div>
    
    </>
    
  )
}

export default App