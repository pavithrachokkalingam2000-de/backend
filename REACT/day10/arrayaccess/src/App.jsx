import React from "react";
import {useState} from "react";

//Task 1
function Task1() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);
  function addreact(){
    setSkills([...skills, 'React']);
  }
  function updateJavaScript() {
    setSkills(
      skills.map((skill) => {
        if (skill === "JavaScript") {
          return "Advanced JavaScript";
        } else {
          return skill;
        }
      })
    );
  }

  return (
    <div>
      <h1>My Skills</h1>
      
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
        <button onClick={addreact}>Add React</button>
        <button onClick={updateJavaScript}>Update JavaScript</button>  
    </div>
  
    
  );
}

//Task 2
function Task2(){
    const [student,setStudent]=useState({
      name:"Arun",
      age:20,
      course:"REACT"
    });

    function updateCourse(){
      setStudent({
        ...student,
        course:"MERN"
      });

    }

    function addCity(){
      setStudent({
        ...student,
        city:"Chennai"

      });
    }

    return(
      <div>
        <h1>Student Details</h1>
        <p>Name:{student.name}</p>
        <p>Age:{student.age}</p>
        <p>Course:{student.course}</p>
        {student.city && <p>City:{student.city}</p>}
        <button onClick={updateCourse}>Update Course</button>
        <button onClick={addCity}>Add City</button>
      </div>
    );
  }


  function App(){
    return(
      <div>
        <Task1/>
        <Task2/>
      </div>
    );
  }



export default App