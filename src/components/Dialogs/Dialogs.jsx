import React from 'react';
import prof from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={prof.dialog + " " + prof.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={prof.message}>{props.name}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Misha'},
        {id: 2, name: 'Artem'},
        {id: 3, name: 'Motya'},
        {id: 4, name: 'Oksi'},
        {id: 5, name: 'Dasha'}
    ]

    let messageData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "G, learn together!"}
    ]
    let dialogsElement = dialogsData.map(
        d => <DialogItem name={d.name} id={d.id}/>
    )

    let messagesElement = messageData.map(m => <Message name={m.message}/>);
    return (
        <div className={prof.dialogs}>
            <div className={prof.dialogItems}>
                {dialogsElement}
            </div>
            <div className={prof.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;

