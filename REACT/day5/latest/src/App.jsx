import React from 'react'
//Task 1
function Task1() {
  const studentName="Arun";
  const age=20;
  const course="React";
  const fees=15000;

  return (
    <div>
     <h2>Student Information</h2>
     
     <p>Age: {age}</p>
     <p>Course: {course}</p>
     <p>Fees: ${fees}</p>
    </div>
  );
}

//Task 2
function Task2(){
  const skills=[
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node"
  ];

  return(
    <div>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill,index)=>(
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
  
//Task 3
function Task3(){
  const student={
    name:"Priya",
    age:21,
    course:"MERN Stack",
    city:"Chennai"
  };
  return(
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>
  );
  
}

function Task4(){
  const students=[
    {id:1,name:"Arun",course:"React"},
    {id:2,name:"Priya",course:"Node"},
    {id:3,name:"kumar",course:"MangoDb"}
  ];

  return(
    <div>
      <h2>Student Details</h2>
      
        {students.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
          </li>
        ))}
      
    </div>
  );
}

function app(){
  return(
    <div>
      <Task1/>
      <Task2/>
      <Task3/>
      <Task4/>
    </div>
  );


}
   

  


  


export default app