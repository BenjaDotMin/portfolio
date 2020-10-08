import React from 'react';
import Block from "../../Shapes/Block";
import Cylinder from '../../Shapes/Cylinder';
import MessageIcon from '../../Shapes/MessageIcon';
import User from '../../Shapes/User';
import "./Message.scss";

function Message() {
    return (
        <div className="message parent">
            <Block />
            <Block className="title" />
            <Block className="text" />
            <Block className="text" />
            <Block className="text" />
            <MessageIcon amount={20} />
            <User amount="7" />
        </div>
    )
}

export default Message
