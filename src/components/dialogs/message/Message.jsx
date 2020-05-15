import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
        if (props.id == 1 ) {
            return <div className={`${s.message} ${s.interlocutor1}`}>{props.message}</div>
        } else {
            return <div className={`${s.message} ${s.interlocutor2}`}>{props.message}</div>
        }
}

export default Message