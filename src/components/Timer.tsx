import React, {useState, useEffect} from "react"

const Timer: React.FC =() => {
    const [second, setSecond] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond(second + 1);
        }, 5000);

        return ()=> clearInterval(interval);
    }, [])

    return(
        <div>
            <h2>Timer: {second}</h2>
        </div>
    )
}

export default Timer;