import React from 'react';
import '../css/user.css';
import users from '../data/users';

export default function User(props){
    return(
        <h4 className="userName">{users[props.by].name}</h4>
    )
}