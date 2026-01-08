import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    let increase=() => setCount(count + 1);
    let decrease=() => setCount(count>0 ? count - 1 : 0);

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase} >Increase</button>
            <button onClick={decrease} >Decrease</button>
        </div>
    )
}