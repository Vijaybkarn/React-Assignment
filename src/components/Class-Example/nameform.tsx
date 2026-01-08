import {useState} from "react";


export default function NameForm(){
    const [name, setName]=useState("")
    return (
        <div>
        <h2> Input Form</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value.toUpperCase())}
          
        />
        <p>You Typed:{name} </p>
        </div>
        
        )
}