import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {fetchPicByUserID} from "../../api/ProfilePicApi";


export default (props) => {

    const [profilePic,setProfilePic] = useState();

    useEffect(() => {
        fetchPicByUserID(props.userid).then((data) => {
            setProfilePic(data);
        });

    }, [])

    return (
        <>

            {
                props.profilePic !== null ?

                    <div style={{display: "flex", marginBottom:10}}>

                        <Avatar style={{height: 40, width: 40}} src={profilePic}/>

                        <span style={{margin: 6,padding:0}}>
                            <h2 style={{margin: 0, padding: 0}}>{props.username}</h2>
                         </span>
                    </div>

                    :

                    <div style={{display: "flex"}}>
                        <Avatar style={{height: 150, width: 150}}>
                            <h1>
                                {props.username.charAt(0).toUpperCase()}
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