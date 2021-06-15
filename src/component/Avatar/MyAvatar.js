import React from 'react';
import Avatar from '@material-ui/core/Avatar';


export default (props) => {


    return (
        <>

            {
                props.profilePic !== null ?

                    <div style={{display: "flex"}}>

                        <Avatar style={{height: 150, width: 150}} src={props.profilePic} >
                        </Avatar>

                        <span style={{margin: 0, padding: 10}}>
                            <h1 style={{margin: 0, padding: 0}}>{props.user.username}</h1>
                         </span>
                    </div>

                    :

                    <div style={{display: "flex"}}>
                        <Avatar style={{height: 150, width: 150}}>
                            <h1>
                                {props.user.username.charAt(0).toUpperCase()}
                            </h1>
                        </Avatar>

                        <span style={{margin: 0, padding: 10}}>
                            <h1 style={{margin: 0, padding: 0}}>{props.user.username}</h1>
                         </span>
                    </div>
            }

        </>
    )
}