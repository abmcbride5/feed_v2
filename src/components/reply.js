import React from 'react';
import '../css/reply.css';

export default function Reply(props){
    return (
        <div className={props.class1}>
                        <textarea 
                        className={props.class2} 
                        placeholder={props.holder}
                        rows="4" 
                        cols="50"
                        />
                    </div>
    )
}