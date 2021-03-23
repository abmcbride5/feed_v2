import React from 'react';
import '../css/subChannel.css';
import threads from '../data/threads';

export default function SubChannel( props ) {
    function handleClick() {
        props.click1(props.name);
        props.click2(false);
        
    }

    return (
        <div>
        <button type="button" className="sub_channel_button" name={props.name} onClick={handleClick}>
         # {props.name}
        </button>
        </div>
    )
}