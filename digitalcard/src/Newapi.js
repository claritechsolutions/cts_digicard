import React,{useEffect,useState} from 'react';

export default function Newapi() {

    const[user,setUser]=useState([])


useEffect(()=>(
    fetch("http://localhost:3000/tasks").then((result)=>{
result.json().then((resp)=>{
// console.log(resp)
setUser(resp)
})
    })
),[])
console.log(user);


function deleteUser (id)
{
fetch(`http://localhost:3000/tasks/$(id)`,{
    method:'DELETE'
}).then((result)=>{
    result.json().then((resp)=>{
        console.log(resp)
    })
})
}

  return <>
      <table border="1">  
<tr>
    <td>ID</td>
    <td>name</td>
    <td>lastname</td>
</tr>
{
    user.map((item)=>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td><button onClick={()=>{deleteUser(item.id)}}>Delete</button></td>
        </tr>
    )
}
      </table>
  </>;
}
