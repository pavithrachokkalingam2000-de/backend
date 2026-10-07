import React from 'react'
import { useState } from 'react'

//Task 1

     function App (){
      const [name,setName]=useState ("Arun");

      function changeName(){
        setName("Kumar");
        
      }
      
      




        return (
          <>
           <div>
             <h2>Name :{name}</h2>
             <button onClick={changeName}>Change Name</button>
           </div>

           
    
          </>
        );

     }

   
  

  


export default App