import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './api/Contact';
import axios from 'axios';



export default function Fcomp() {
    const [name, setname] = useState("");
    const [task, settask] = useState([]);

    const retriveData = async() =>{
        const response = await api.get("/tasks");
        return response;
        console.log(response)
    }

    const addTask = async(task) =>{
        const request ={
            name
        }
        console.log(request);
        const res = await api.post("/tasks",request);
        settask([...task,res.data])
    }
    const deleteTask = async(id) =>{
      const resp = await api.delete(`/tasks/${id}`);
      const newTask = task.filter((e)=>{
        return e.id !== id;
      })
      settask(newTask)
    } 

    const editTask =async() =>{

    }

    useEffect(()=>{
        const allTasks = async() =>{
            const allTask = await retriveData();
            console.log("**",allTask);
            if(allTask){
                settask(allTask.data)
            }
        }
        allTasks();
    },[])

  return <div>
      <h1>Task List</h1>
      <input value={name} onChange={(e)=>{setname(e.target.value)}}/>
      <button onClick={addTask}>ADD</button>
      {
        task.map((e)=>{
          return <div key={e.id}>{e.id} {e.name} <button onClick={()=>deleteTask(e.id)}>Delete</button> <Link to={{pathname:`/edit`,state:{task:e}}}>edit</Link></div>
        })
      }
  </div>
}