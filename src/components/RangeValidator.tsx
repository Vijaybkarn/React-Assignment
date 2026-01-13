import React, {useState} from 'react';

const RangeValidator: React.FC = () => {
    const [number, setNumber] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleInput = () => {
        const num = Number(number);
        if (num < 1 || num > 100 || isNaN(num)) {
            setError("Enter a Number between 1 to 100");
        } else {
            setError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error && number !== "") {
            alert("Submitted Value is ${number}")
        }
    }

    const isDisabled = error !== "" || number === "";

    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter Number...' value={number} 
            onChange={(e)=>setNumber(e.target.value)} onBlur={handleInput} />
            {error && <p style={{color: "red"}}>{error}</p>}

            <button type='submit' disabled={isDisabled}>Submit</button>
        </form>
    )
}

export default RangeValidator;