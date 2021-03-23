import React from 'react';
import '../css/reply.css';

export default function Reply(props){
    return (
        <div className="reply">
                        <textarea 
                        className={props.class} 
                        placeholder={props.holder}
                        rows="4" 
                        cols="50"
                        />
                    </div>
    )
}