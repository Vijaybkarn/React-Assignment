import { useState } from "react"

 export default function CharacterCounter() {
    const [text, setText] = useState("");

    
    return(
        <div>
            <input 
                type="text"
                value={text}
                placeholder="Type Something..."
                onChange={(e) => setText(e.target.value)}
             />
             <p>Character Count: {text.length}</p>   
        </div>
    )
}