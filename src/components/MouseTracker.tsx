import React, {useState} from "react";

const MouseTracker: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY})
        
    }

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0});
    }

    return(
        <div>
            <div style={{width:100, height:100, backgroundColor:"blue"}} 
                onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            </div>
            <p>Mouse Position: {mousePosition.x}, {mousePosition.y}</p>


        </div>
    )
}

export default MouseTracker;