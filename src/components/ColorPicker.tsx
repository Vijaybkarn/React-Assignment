import {useState} from "react";

export default function ColorPicker() {
    const [selectedColor, setSelectedColor] = useState("");

    const colors = (color: string) => setSelectedColor(color);
    return(
        <div>
            <button style={{backgroundColor: "red"}} onClick={() => colors("red")}>Red</button>
            <button style={{backgroundColor: "blue"}} onClick={() => colors("blue")}>Blue</button>
            <button style={{backgroundColor: "green"}} onClick={() => colors("green")}>Green</button>
            <button style={{backgroundColor: "yellow"}} onClick={() => colors("yellow")}>Yellow</button>
            <button style={{backgroundColor: "purple"}} onClick={() => colors("purple")}>Purple</button>
            <div style={{backgroundColor: selectedColor, width: "100px", height: "100px"}}></div>
        </div>
    )
}
