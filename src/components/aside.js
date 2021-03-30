import React from 'react';
import MainChannel from './mainChannel';
import SubChannel from './subChannel';
import '../css/aside.css';

export default function Aside (props) {
    return (
        <div >
        <table className="aside">
            <tbody>
            <tr>
                <td className="purple_aside">
                    
                </td>
                <td>
                    <div className="purple_menu_top">
                        <MainChannel name="Buttons For Kittens"/>
                    </div>
                    <div className="purple_menu_bottom">
                        <h3 className="channel_header">Channels</h3>
                        <SubChannel name="A" click1={props.click} click2={props.show} />
                        <SubChannel name="B" click1={props.click} click2={props.show} />
                        <SubChannel name="C" click1={props.click} click2={props.show} />
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

    </div>
    );
}