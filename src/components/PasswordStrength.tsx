import React, {useState} from 'react';

const PasswordStrength: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [strength, setStrength] = useState<string>('');

    const handleStrength = () => {
        const length = password.length >= 8;
        const upper = /[A-Z]/.test(password);
        const lower = /[a-z]/.test(password);
        const special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        if(length && upper && lower && special) {
            setStrength("Strong") ;
        } else if (length && ((upper && lower) || (upper && special) || (lower && special))) {
            setStrength("Medium");
        } else {
            setStrength("Weak");
        }
    }

    return(
        <form onChange={handleStrength}>
            <input type='text' placeholder='Enter Password...' value={password} onChange={(e) => setPassword(e.target.value) } />
             {strength && (<p style={{color: strength==="Strong" ? "green" : strength ==="Medium" ? "orange" : "red"}}> Password Strength: {strength}</p>)}
        </form>
    )
}

export default PasswordStrength;