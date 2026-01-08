import {useState} from 'react';

export default function ProductCard() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div>
            <div>
                <b>Apple</b>
                <p>Price: $1.50</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>Add</button>
                <button onClick={() => setQuantity(quantity>0 ? quantity - 1 : 0)}>Remove</button>
            </div>
            <p>Total Price: ${quantity * 1.50}</p>
        </div>
    )
}