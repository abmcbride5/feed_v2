import React, { useState } from 'react';
import User from '../components/user';
import '../css/message.css';

export default function MessageBox(props){
    const [likes, setLikes] = useState(0);

    return(
        <div className="messageContainer">
            <div className="fakePhoto"></div>
            <User by={props.by} />
            <span className="messageText">{props.message}</span>
        </div>
    )
}