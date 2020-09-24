import React from 'react';
import "./Cylinder.scss";
import Plus from './Plus';

function Cylinder({ child }) {
    return (
        <div className="ortho__cylinder">
            <div className="ortho__shadow"></div>

            {child ? (
                <Plus />
            ) : ""}
        </div>
    )
}

export default Cylinder
