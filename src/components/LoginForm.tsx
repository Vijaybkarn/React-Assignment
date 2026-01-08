import React, {useState} from 'react';

const LoginForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match!");
        } else {
            setError("");
            alert("Form Submitted Successfully");
        }
    }


    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <h2>Login</h2>
                <input type='text' placeholder='Enter Name...' value={name} onChange={(e) => setName(e.target.value)} required/>
                <input type='email' placeholder='Enter Email...' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type='password' placeholder='Enter Password...' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type='password' placeholder='Confirm Password...' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;