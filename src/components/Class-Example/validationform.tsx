import {useState} from "react"

export default function RegisterForm(){
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("") 
    const [error, setError]=useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!email.includes("@")){
           setError("Invalid Email!")
        }else{
            setError("");
            alert("Form Submitted")
        }
        
    }
        
    
    return(
        <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        
        
        {error && <p style={{color:"red"}}>{error}</p>}
        
        <button type="submit">Submit</button>
        
        </form>
        
        )
}