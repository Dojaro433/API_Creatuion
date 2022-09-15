import React from 'react'
import "./Mytable.css";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import{NavLink, Link} from "react-router-dom"
import e from 'cors';

const Mytable = () => {

    


    

    const [userData ,setUserData] = useState([]);
      useEffect(()=>{

        axios.get("http://localhost:7000/vairs")
        .then((res)=>{

            const Userraw = res.data;
           // console.log(Userraw);
            setUserData(Userraw);
    
    
        })
        .catch(err=>console.log(err))


      },[]);

      console.log(userData);
   
    

    const deletuser = (vairsId) =>{

      axios.delete(`http://localhost:7000/vairs/${vairsId}`);

    }
  

    const Updateuser =(vairsId)=>{

    
      axios.Updateuser(`http://localhost:7000/vairs/${vairsId}`)
    }    
   
    
  return (
    <div>

   <NavLink as={Link} to="Myform"><button className='btn'>Createuser</button></NavLink>
    <table >
        <thead>
         <th>
            FirstName
         </th>

         <th>
            LasttName
         </th>

         <th>
            mobNumber
         </th>

         <th>
            Edit user
         </th>
             

         <th>
            Delete User
         </th>

        </thead>
   {
       userData.reverse().map((display)=>{


        return(
            <tr>
                <td>
                    {display.firstName}
                </td>
    
                <td>
                    {display.lastName}
                </td>
    
                <td>
                    {display.mobNumber}
                </td>
    
    
                <td>
                <button  >Edit user</button>
                </td>
    
                <td>
                <button onClick={deletuser(display._id)}>Delete</button>
                </td>
            </tr>
    
            )


       })
       
    }
       
       
    </table>
      

    </div>
  )
}

export default Mytable;