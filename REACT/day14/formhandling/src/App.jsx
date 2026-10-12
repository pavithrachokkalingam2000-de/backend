import React from 'react'
import { useState } from 'react'
//Task 1
function  Task1 () {

  const [isOn,setisOn]=useState(false);

  const handleClick =()=>{
    setisOn(!isOn);
    
  };

  return (

    <>
    <div>
      <h3>Status:{isOn ? "Turn OFF" :"Turn ON"}</h3>
      <button onClick={handleClick}>{isOn ? "Turn OFF" :"Turn ON"}</button>
    </div>
  
    </>
   
  )
}

//Task2
  function Task2(){
     const [isLiked,setIsLiked]=useState(false);


    const handleClick=()=>{
      setIsLiked(!isLiked);


    }

    return(
      <>
      <div>
        <h3>My post</h3>
        <p>Click the Like Button</p>
        <button onClick={handleClick}>{isLiked?"Liked":"Like"}</button>
        {isLiked && <p>You Liked this Post</p>}
      </div>
      </>
    )

  }

  //Task3
  function Task3(){
    const[user,setUser]=useState({
      name:"Rahul",
      age:22,
      city:"Chennai"
  });
  const changeName=()=>{
    setUser({...user,name:"Arjun"});
    
  };
  const IncreaseAge=()=>{
    setUser({...user,age:user.age+1})
  };
  const changeCity=()=>{
    setUser({...user,city:"Bangalore"})
  }

  return(
    <>
    <div>
      <h3>User Details</h3>

      <p>name:{user.name}</p>
      <p>age:{user.age}</p>
      <p>city:{user.city}</p>

      <button onClick={changeName}>Change Name</button>
      <button onClick={IncreaseAge}>Increase Age</button>
      <button onClick={changeCity}>Change City</button>

    </div>
    
    </>
  )


  }
  //Task4
  function Task4(){
    const [products,setProducts]=useState([
      {id:1,name:"Laptop",price:50000,inStock:true},
      {id:2,name:"Phone",price:20000,inStock:false},
      {id:3,name:"Tablet",price:15000,inStock:true}
      
    ]);
    const toggleStock = (id)=>{
      setProducts(
        products.map((product)=>
          product.id===id?
        {...product,inStock:!product.inStock}
        :product
        )
      );
    };
    return(
      <>
      <h2>Product Details</h2>

      {products.map((product)=>(
        <div key={product.id}>
         <h3>{product.name}</h3>
         <p>price:{product.price}</p>
         <p>{product.inStock ? "In stock" :"Out of Stock"}</p>
         <button onClick={()=>toggleStock(product.id)}> Toggle Stock</button>
        </div>
      ))}
      </>
     
    );
  }
  
  
  

function App(){
  return(
    <>

    <div>
      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
    </div>
    </>
  )
}

export default App