import React, { useState } from 'react';

export default function Postapi() {

    const[name,setname] = useState("");
    const[lastName,setlastName]= useState("")

const handle = (e)=>{
    console.log({name,lastName});
    let data={name,lastName}
    console.log(data);
    fetch("http://localhost:3000/tasks",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application.json'
      },
      body:JSON.stringfy(data)
    }).then((result)=>{
      console.log("result",result);
    })
}
  return <>
    <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}  />
    <input type="text" name="lastName" value={lastName} onChange={(e)=>{setlastName(e.target.value)}} />
    <button onClick={handle}>submit</button>
  </>;
}
