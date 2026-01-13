import React, {useState} from 'react';

const ContactForm: React.FC =() => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input 
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea 
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default ContactForm; 