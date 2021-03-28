import React, { useState } from 'react';
import Aside from './aside';
import Reply from './reply';
import Thread from './thread';
import MessageBox from './message';
import '../css/mainView.css';
import threads from '../data/threads';
import messages from '../data/messages';

export default function Main(){
    const [channel, setChannel] = useState('');
    const [repliesList, setRepliesList] = useState([]);
    const [leadingThread, setLeadingThread] = useState('');
    const [showReplies, setShowReplies] = useState(false);
    const placeHolder = 'message #' + channel;

    function giveThreads(channelSelected){
        
        const threadList = Object.values(threads);
        
        const threadRenderList = []
        
        for (let i = 0; i < threadList.length; i += 1){
            if (threadList[i].channel === channelSelected){
                threadRenderList.push(
                <Thread 
                    title={threadList[i].title} 
                    replies={threadList[i].messages} 
                    by={threadList[i].creator} 
                    click1={setRepliesList} 
                    click2={setShowReplies} 
                    click3={setLeadingThread}
                />)
                
            } 
        }
        return threadRenderList;
    }
    
    function renderReplies(mainMessage, messageList) {
        
        let renderRepliesList = [
        <MessageBox 
            message={mainMessage} 
            by='123' />, 
        <p className="">{messageList.length} replies</p>,
        <hr />
        ];

        let temp = '';

        for (let i = 0; i < messageList.length; i += 1 ){
            temp = messages[messageList[i]];
            renderRepliesList.push(
            <MessageBox 
                message={temp.messageBody} 
                by={temp.author} 
            />)
        }
        return renderRepliesList;    
    }

    return (
        <div className="main_view">
            <table>
                <tbody>
                <tr>

                   <td className="mainView_aside">
                        <Aside 
                            click={setChannel} 
                            show={setShowReplies} 
                        />   
                    </td> 

                    <td className={!showReplies ? "feed_only": "feed_thread"}>
                        <div>{giveThreads(channel)}</div>
                        <Reply 
                            class1={!showReplies ? "reply1": "reply2"} 
                            class2={!showReplies ? "textArea1": "textArea2"} 
                        />
                    </td>
                    
                    {showReplies && (
                        <td className="threadContent">
                            <div className="threadContentMessages">
                                {renderReplies(leadingThread, repliesList)}
                            </div>
                            <Reply 
                                class1="reply3" 
                                class2="textArea3" 
                            />
                        </td>)}
                </tr>
                </tbody>
            </table>
        </div>
    )
}