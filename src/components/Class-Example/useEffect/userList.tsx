import {useEffect,useState} from "react"

function UserList(){
    const [users, setUsers]=useState([])
    
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/users").then((res)=> res.json()).then((data)=>setUsers(data));
        // console.log(data)
        fetch("https://jsonplaceholder.typicode.com")
           .then((response)=>{
               return response.json()
           }).then((result)=>{
               setUsers(result);
           })
            .catch((error)=>{
                console.log("Error:"error)
            });
        
    },[])
    
    return(
        <div>
        <h2>User List</h2>
        
        
        {users.map((user)=>{
            <p key={user.id}>{user.name}</p>
        })}
        
        </div>
        
        )
}

export default UserList
