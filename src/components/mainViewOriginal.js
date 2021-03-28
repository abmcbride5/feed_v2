import React, { useState } from 'react';
import Aside from './aside';
import Reply from './reply';
import Thread from './thread';
import MessageBox from './message';
import '../css/mainView.css';
import threads from '../data/threads';
import messages from '../data/messages';


export default function Main() {
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
                threadRenderList.push(<Thread title={threadList[i].title} replies={threadList[i].messages} by={threadList[i].creator} click1={setRepliesList} click2={setShowReplies} click3={setLeadingThread}/>)
                
            } 
        }
        return threadRenderList;
    }
    function renderReplies(mainMessage, messageList) {
        let renderRepliesList = [<MessageBox message={mainMessage} by='123' />, <p className="">{messageList.length} replies</p>,<hr />]
        let temp = '';
        for (let i = 0; i < messageList.length; i += 1 ){
            temp = messages[messageList[i]];
            renderRepliesList.push(<MessageBox message={temp.messageBody} by={temp.author} />)
        }
        return renderRepliesList;    
    }
 
   return (
    <div className="main">
        <table>
            <tr>
                <td className="aside">
                <Aside click={setChannel} show={setShowReplies}/>
                </td>
                <td className="feed">
                    <div>{giveThreads(channel)}</div>
                   <div>
                       <Reply holder={placeHolder} class={!showReplies ? 'textArea': 'textAreaShort'} />
                       </div>
                </td>
                {showReplies &&( 
                <td className="threadContent">
                    <div className="threadContentMessages">
                        {renderReplies(leadingThread, repliesList)}
                    </div>
                        <div className="bottom_background">
                            <Reply holder="#reply" class='textAreaShowReplies' />
                        </div>
                </td> )}
            </tr>
        </table>
    </div>
    );
}