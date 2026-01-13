import React, {useState} from 'react';

const RegistrationForm: React.FC =() => {
    const [userName, setUserName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    
    const [userNameError, setUserNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');

    const handleUserName = (userName: string) => {
        if(userName.length < 3 || userName.length > 25) {
            setUserNameError("Username must be between 3 to 25 Characters!");
        } else {
            setUserNameError(" ");
        }
    }

    const handleEmail = (email: string) => {
        if (!email.includes("@") || !email.includes(".")) {
            setEmailError("Invalid Email! Email must contain @ & .");
        } else {
            setEmailError(" ");
        }
    }

    const handlePassword = (password: string) => {
        const length = password.length >= 8;
        const upper = /[A-Z]/.test(password);
        const lower = /[a-z]/.test(password);
        const special = /[!@#$%^&*(),.?":{}|,.]/.test(password);

        if (length && upper && lower && special) {
            setPasswordError("Strong");
        } else if (length && ((upper && lower) || (upper && special) || (lower && special))){
            setPasswordError("Medium");
        }else {
            setPasswordError("Weak");
        }
    }

    const handleConfirmPassword = (confirmPassword: string) => {
        if (confirmPassword !== password) {
            setConfirmPasswordError("confirmPassword does not match Password!");
        } else {
            setConfirmPasswordError("");
        }
    }

    const handleSubmit = () => {
        alert("Registered Sucessfully");
    }
 
    return(
        <form  onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Username...' value={userName} onChange={(e)=> {setUserName(e.target.value); handleUserName(e.target.value)}} required/>
            {userNameError && (<p style={{color: "red"}}>{userNameError}</p>)}
            <input type='text' placeholder='Enter Email...' value={email} onChange={(e)=> {setEmail(e.target.value); handleEmail(e.target.value)}} required/>
            {emailError && (<p style={{color: "red"}}>{emailError}</p>)}
            <input type='text' placeholder='Enter Password...' value={password} onChange={(e)=> {setPassword(e.target.value); handlePassword(e.target.value)}} required/>
            {passwordError && (<p style={{color: "red"}}>{passwordError}</p>)}
            <input type='text' placeholder='Confirm Password...' value={confirmPassword} onChange={(e)=> {setConfirmPassword(e.target.value); handleConfirmPassword(e.target.value);}} required/>
            {confirmPasswordError && (<p style={{color: "red"}}>{confirmPasswordError}</p>)}

            <button type='submit'>Register</button>
        </form>
    )
}

export default RegistrationForm;