import React from 'react';
import Heart from "../../Shapes/Heart";
import "./Window.scss";

function Window() {
    return (
        <div className="window">
            <Heart clickable />
        </div>
    )
}

export default Window
