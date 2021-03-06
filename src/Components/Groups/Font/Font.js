import React from 'react';
import Text from "../../Shapes/Text";
import Block from "../../Shapes/Block";
import "./Font.scss";

function Font() {
    return (
        <div className="font __3d">
            <Block />
            <Block />
            <Text text="A" amount={15} />
        </div>
    )
}

export default Font
