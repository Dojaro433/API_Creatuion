import React from 'react'

import axios from 'axios';
import { useState } from 'react';
import { NavLink , Link} from 'react-router-dom';
import "./Myform.css";

const Myform = () => {




    const [firstName , setFirstName] = useState("");

    const [LastName , setLastname] = useState("");

    const [mobNumber, setMobNumber] = useState("");
     const [password, setPassword] = useState('');



     const submitHandler =(e)=>{
        e.preventDefault();
        const dataObj ={
 
         
        firstName:firstName,
        lastName:LastName,
        mobNumber:mobNumber,
        password:password
 
        }
        console.log( dataObj);
         axios.post("http://localhost:7000/vairs",dataObj);
 
 
         setFirstName("");
 
         setLastname('');
 
         setMobNumber('');
 
         setPassword("");
     }

  return (
    <div>
     <NavLink as={Link} to="/"> <button  className="home">Home</button></NavLink>
<h1> Data from user</h1>
      <form onSubmit={submitHandler} className="form">

     <input type="text" placeholder='first name'  onChange={e=>setFirstName(e.target.value) } value={firstName}/><br/>

     <input type="text" placeholder='Lastname' onChange={e=>setLastname(e.target.value)} value={LastName}/><br/>

     <input type="number" placeholder='mobNumber' onChange={e=> setMobNumber(e.target.value) }value={mobNumber}/><br/>

     <input type="text" placeholder='password' onChange={e=> setPassword(e.target.value)} value={password}/><br/>



         <input type="submit"/>


      </form>
    </div>
  )
}

export default Myform;