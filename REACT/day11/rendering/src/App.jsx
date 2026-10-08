import React from 'react'
import {useState} from 'react'


//Task 1
function Task1(){
  const [employeeName,setemployeeName]=useState("Arun");
  const [salary,setSalary]=useState(25000);
  function increaseSalary(){
    setSalary(salary+5000);

  }

  return (
    <div>
      <h2>Employee salary</h2>
      <p>name:{employeeName}</p>
      <p>salary:${salary}</p>
      <button onClick={increaseSalary}>Increase Salary</button>
    </div>
  )
}

//Task 2
  function Task2(){ 
  const [courses,setCourses]=useState([
    "HTML",
    "CSS",
    "JAVASCRIPT"
  ]);
  function addReact(){
    setCourses([...courses,"React"]);

  }
  function updateCSS(){
    setCourses(
      courses.map((course)=>{
        if (course==="CSS"){
          return "Advanced CSS";
        }else{
          return course;
        }
      })
    );
  }

  return (
    <div>
      <h2>Course List</h2>
      {courses.map((course,index)=>{
        return <p key={index}>{course}</p>
      })}
      <button onClick={addReact}>Add React</button>
      <button onClick={updateCSS}>Update CSS</button>
    </div>
  );
}

function App(){
  return(
    <div>
      <Task1/>
      <Task2/>
    </div>
  )
}





export default App