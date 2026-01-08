import {useState} from 'react'

export default function Toggle() {
    const [isOn, setIsOn]= useState(false);

    return(
        <div>
            <h2>Toggle: {isOn ? "ON" : "OFF"}</h2>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    )
}