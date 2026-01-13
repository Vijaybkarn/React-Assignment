import React, {useState} from 'react';
 
const EmailValidator: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@') || !email.includes('.')) {
            setError("Invalid Email Address!");
        } else {
            setError(" ");
            alert("Login Sucessful");
        }
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Your Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && <p style={{color: "red"}}>{error}</p>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EmailValidator;