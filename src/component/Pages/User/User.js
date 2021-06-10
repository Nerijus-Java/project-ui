import React, {useEffect, useState} from "react";
import {fetchUserById} from "../../../api/UserApi";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

const User = () => {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchUserById(loggedInUser.id).then(({data}) => {
            setUser(data)
        }).then(setIsLoaded(true))
    }, [])


        return (
            <Container>
                {
                    user?.username ?
                        <>
                            <h1>{user.username}</h1>
                        </>
                        :

                        <h1>1234124</h1>
                }
            </Container>
        )
}


export default User;