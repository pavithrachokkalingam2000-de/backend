import React from 'react'
import { useState } from 'react'

  //Task1
  function Task1(){

    const [form,setForm]=useState({
      name:" ",
      department:" ",
      salary:" "
    });
    const [employees,setEmployees]=useState([]);
    const [editId,setEditId] =useState(null);

    const handleChange = (e)=>{
      setForm({...form,[e.target.name]:e.target.value});

    };
    const handleAdd =()=>{
      if (
        form.name.trim()===" "||
        form.department.trim()===" "||
        form.salary===" "

      ){
        return;

      }
      if(editId !==null){
        setEmployees(
          employees.map((emp)=>
            emp.id===editId ?{...emp,...form}:emp
          )
        );
        setEditId(null);

      }else{
        setEmployees([
          ...employees,
          {...form,id:Date.now()}
        ]);
      }
      setForm({name:"",department:"",salary:""});

    };
    const handleEdit =(emp)=>{
      setForm({
        name:emp.name,
        departmet:emp.department,
        salary:emp.salary
      });
      setEditId(emp.id);

    };
    const handleDelete=(id)=>{
      setEmployees(employees.filter((emp)=>emp.id!==id));

    };
    return (
    <>
    <div>
      <h2>Employeee Form</h2>

      <input name="name" placeholder="Employeee Name" value={form.name} onChange={handleChange}/>
      <input name="department" placeholder="Employeee Department" value={form.department} onChange={handleChange}/>
      <input name="salary" placeholder="Employeee Salary" value={form.salary} onChange={handleChange}/>

      <button onClick={handleAdd}>{editId !==null ? "update Employee":"Add Employee"}</button>

      <h3>Employee List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp)=>(
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>
                <button onClick={()=>handleEdit(emp)}>Edit</button>
                <button onClick={()=>handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
    </>
    
  )
  }
  //Task2
  function Task2(){
    const [form,setForm]=useState({
      name:" ",
      price:" ",
      quantity:" "
    });
    const [products,setProducts]=useState([]);
    const [editId,setEditId] =useState(null);


    const handleChange=(e)=>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      });
    };

    const handleSubmit=()=>{
      if(
        form.name.trim()===" "||
        form.price.trim()===" "||
        form.quantity.trim()===" "
      ){
        alert("Please fill all fields");
        return;
      }
      if(editId!==null){
        setProducts(
          products.map((product)=>
          product.id===editId?{...product,...form}:product)
        );
        setEditId(null);

      }else{
        setProducts([
          ...products,{
            ...form,id:Date.now
          }
        ]);
      }
      setForm({
        name:" ",
        price:" ",
        quantity:" "

      });
    };
    const handleEdit=(product)=>{
      setForm({
        name:product.name,
        price:product.price,
        quantity:product.quantity
      });
      setEditId(product.id);

    };
    const handleDelete=(id)=>{
      setProducts(
        products.filter((product)=>product.id !==id)
      );
    };
    return(
      <>
      <div>
        <h2>Product Form</h2>
        <input type="name" placeholder="Product Name" value={form.name} onChange={handleChange}/>
        <input type="price" placeholder="Product Price" value={form.price} onChange={handleChange}/>
        <input type="quantity" placeholder="Product Quantity" value={form.quantity} onChange={handleChange}/>


        <button onClick={handleSubmit}>{editId !==null?"update Product":"Add Product"}</button>

        <h3>Product List</h3>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEdit(product)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
      </>
    );

  }
  function App(){
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