import React from 'react';
import '../css/thread.css';
import MessageBox from './message';

export default function Threads(props){
    function handleClick(){

        props.click1(props.replies)
        props.click2(true);
        props.click3(props.title)
    }
    return(
        <div className="threadContainer">
            <MessageBox 
            message={props.title} 
            by={props.by}
            time={'5:30'}
            />
            <table className="replyTable">
                <tr>
            {props.replies.map((reply) => (
            <td className="fakePhotoThread"></td>
            ))}
            <td className="threadReplyCount"><button className="replyButton" type="button" onClick={handleClick}>{props.replies.length} replies</button></td>
            </tr>
            </table>
        </div>
    )
}