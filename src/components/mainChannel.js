import React from 'react';
import '../css/mainChannel.css';

export default function MainChannel(props) {
    return (
        <div className="main_channel_name">
        {props.name}
        </div>
    );
};