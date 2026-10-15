import React from 'react'
import { useState } from 'react'

function  Task1() {
  const [students,setStudents]=useState([]);
  const [name,setName]= useState(" ");


  const addStudent=()=>{
    if(name.trim()!==" "){
      setStudents([...students,name]);
      setName(" ");

    }
  };

  return (
    <>
    <div>Student Name List</div>

    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}
    placeholder="Enter Student Name"/>

    <button onClick={addStudent}>Add Student</button>

    {students.map((students,index)=>(
      <p key={index}>{students}</p>
    ))}

    </>

  )
}

//Task2
function  Task2(){
  const [courses,setCourses]=useState([])
  const [courseName,setCourseName]=useState(" ");

  const addCourse=()=>{
    if (courseName.trim()  !== " "){
      setCourses({...courseList,courseName});
      setCourseName(" ");

    }
  };
  const deleteCourse=(index)=>{
    setCourses(
      courses.filter((course,i)=>i !==index)
    );
  };
  return(
    <>
    <div>

      <h2>Course Management</h2>

      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Enter course name"
      />

      <button onClick={addCourse}>Add Course</button>

      <h3>Course List</h3>

      {courses.map((course, index) => (
        <p key={index}>
          {course}{" "}
          <button onClick={() => deleteCourse(index)}>
            Delete
          </button>
        </p>
      ))}
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