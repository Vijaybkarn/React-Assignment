import { useState } from "react";

export default function TextDisplay() {
    const [text, setText] = useState("");

    const handleText= (e) => setText(e.target.value);

    return (
        <div>
            <input 
                type="text"
                value={text}
                placeholder="Type Something..."
                onChange={handleText}
             />
             <p>Character Count: {text}</p>   
        </div>
    )
}