import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'
function Message() {
    return (
        <div className="message">
           <Avatar />
           <div className="message__info">
               <h4>
                   shazali
                   <span className="message__timestamp">this is message timestamp</span>
               </h4>
               <p>this is message</p>
           </div>
        </div>
    )
}

export default Message
