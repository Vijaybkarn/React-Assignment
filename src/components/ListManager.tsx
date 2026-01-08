import { useState } from "react";

export default function ListManager() {
    const [inputValues, setInputValues] = useState<string[]>("");
    const [item, setItem] = useState<string[]>([]);

    const addItem = () => {
        setItem([...item, inputValues]);
        setInputValues("");
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Shift") {
            addItem();      
        }
    }

    return(
        <div>
            <input type="text" placeholder="Enter Item..." value={inputValues} onChange={(e) => setInputValues(e.target.value)} onKeyDown={handleKeyPress}/>
            <button onClick={addItem}>Add Item</button>
            <h2>List Items</h2>
            <ul>
                {item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}