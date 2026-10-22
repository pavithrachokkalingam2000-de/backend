import React from 'react'
import { useRef } from 'react'

const Task1 = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);


  const focusName = ()=>{
    nameRef.current.focus();
  
   };
   const focusEmail = ()=>{
    emailRef.current.focus();

   };
   const clearInputs =()=>{
    nameRef.current.value = " ";
    emailRef.current.value= " ";

   };
   const handleSubmit = (e)=>{
    e.preventDefault();

    alert(
      "Name: " + nameRef.current.value + "\nEmail: " + emailRef.current.value

    );

   };

  return (
    <>
    <div>
      <h2>Input Focus and  Clear</h2>

      <form onSubmit={handleSubmit}></form>

      <input type="text" placeholder='Enter Name' ref={nameRef}/>

      <input type="text" placeholder='Enter Email' ref={emailRef}/>


      <button onClick={focusName}>Focus Name</button>

      <button onClick={focusEmail}>Focus Email</button>

      <button onClick={clearInputs}>Clear</button>

      <button>submit</button>

    </div>
    </>
    
  )
}

//Task2
const Task2=()=>{
  const passwordRef = useRef(null);

  
  const showPassword =()=>{
    passwordRef.current.type = "text";

  };


  const hidePassword =()=>{
    passwordRef.current.type = "password";

  };
  return(
    <>
    <div>
      <h2>Password Show / Hide </h2>

      <input type="password" placeholder='Enter Password' ref={passwordRef}/>


      <button type="button" onClick={showPassword}>Show</button>

      <button type="button" onClick={hidePassword}>Hide</button>
    </div>
    
    </>
  );

}
//Task3
const Task3 =()=>{
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);


  const  goHome=()=>{
    homeRef.current.scrollIntoView({behavior:"smooth"});

  };

  const goAbout =()=>{
    aboutRef.current.scrollIntoView({behavior:"smooth"});
  };
  const goServices=()=>{
    serviceRef.current.scrollIntoView({behavior:"smooth"});
  };
  const goContact =()=>{
    contactRef.current.scrollIntoView({behavior:"smooth"});
  };

  return(
    <>
    <div>
      <h2>Single Page Navigation</h2>

      <nav>
        <button onClick={goHome}>Home</button>
        <button onClick={goAbout}>About</button>
        <button onClick={goServices}>Services</button>
        <button onClick={goContact}>Contact</button>

      </nav>

      <section ref={homeRef} style={{height:"100vh",background:"LightBlue"}}>

        <h1>Home Section</h1>
        <p>Welcome to Home Page</p>
        
      </section>
      <section ref={aboutRef} style={{height:"100vh",background:"Lightgreen"}}>

        <h1>About Section</h1>
        <p>About Our Company</p>
        
      </section>

      <section ref={serviceRef} style={{height:"100vh",background:"Lightyellow"}}>

        <h1>Services Section</h1>
        <p>Our Services</p>

      </section>

      <section ref={contactRef} style={{height:"100vh",background:"Lightgray"}}>

        <h1>Contact Section</h1>
        <p>Contact Us</p>

      </section>

    </div>
    </>
  );

}



const App =()=>{
  return(
    <>
    <div>
      <Task1/>
      <Task2/>
      <Task3/>
    </div>
    
    </>
  )
}


export default App