import React, { useEffect,useState } from 'react'

const App = () => {
  const [data,setData]=useState([]);
  const [user,setUser]=useState([]);
  



    const fetchdata = async () => {
    
   const datanew = await fetch("https://dummyjson.com/products")

   const datafect = await datanew.json();

  setData(datafect.products)


  }
  useEffect(()=>{

    fetchdata()

  },[])

return (

    <>
    <div>

      <input type="text"/>
      {data.map((e)=>(
        <div key={e.id}>
          <p>name:{e.Name}</p>
          <p>price:{e.price}</p>

        </div>

      ))}
    
    </div>
    </>
    
  )


  }


  

export default App