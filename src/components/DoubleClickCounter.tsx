import React, {useState} from "react"

const DoubleClickCounter: React.FC = () => {
    const [count, setCount] = useState(0);

    return(
        <div> 
            <h2>Double Click Counter: {count}</h2>
            <button onDoubleClick={() => setCount(count + 1)}>Increase</button>
            <button onDoubleClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrease</button>
        </div>
    )
}

export default DoubleClickCounter