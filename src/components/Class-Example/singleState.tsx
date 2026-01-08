import {useState} from "react"

export default function ProfileForm(){
    const [form, setForm]=useState({
        name:"",
        age:""
    })
    const handleChange()=>{
        setForm(...form ,[e.target.value]:e.target.value)
    }
    return(
        <div>
        <input name="name"/>
        <input name="age"/>
        <p>{form.name} - {form.age}</p>
        </div>
        
        )
}