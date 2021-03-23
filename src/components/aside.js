import React from 'react';
import MainChannel from './mainChannel';
import SubChannel from './subChannel';
import '../css/aside.css';

export default function Aside (props) {
    return (
        <div>
        <table>
            <tr>
                <td className="purple_aside">
                    
                </td>
                <td>
                    <div className="purple_menu_top">
                        {/* <img src="../images/buttons.png" width="15" height="15" /> */}
                        <MainChannel name="Buttons For Kittens"/>
                    </div>
                    <div className="purple_menu_bottom">
                        <h3>Channels</h3>
                        <SubChannel name="A" click1={props.click} click2={props.show} />
                        <SubChannel name="B" click1={props.click} click2={props.show} />
                        <SubChannel name="C" click1={props.click} click2={props.show} />
                    </div>
                </td>
            </tr>
        </table>

    </div>
    );
}