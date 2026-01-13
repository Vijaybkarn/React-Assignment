import React, {useState} from 'react';

const CreditCardInput: React.FC = () => {
    const [cardNumber, setCardNumber] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        setCardNumber(value);
    };

    return(
        <div>
            <label htmlFor='credit-card'>Credit Card Number:</label>
            <input 
                type='text'
                id='credit-card'
                value={cardNumber}
                onChange={handleChange}
                maxLength={16}
                placeholder='Enter your credit card number'
            />
            <p>Your card number is: {cardNumber}</p>
        </div>
    )
}

export default CreditCardInput;