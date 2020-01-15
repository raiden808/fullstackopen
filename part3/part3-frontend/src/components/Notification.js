import React from 'react'


const Notification = ({message,notifStatus}) =>{

    let errorClass;

    if(message == null){
        return null;
    }

    if(notifStatus == "add"){
        errorClass = "notification add"
    }
    else{
        errorClass = "notification delete"
    }

    return(
        <div className={errorClass}>
            {message}
        </div>
    )

}

export default Notification