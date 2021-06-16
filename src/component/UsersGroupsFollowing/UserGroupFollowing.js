import React, {useEffect, useState} from "react";
import {Container, Divider, Link, Paper} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getUserFollowingGroup} from "../../api/GroupApi";
import GroupCard from "../GroupCard/GroupCard";

const Groups = () => {

    const [groups, setGroups] = useState([])
    const loggedInUser = useSelector(state => state.user.loggedInUser)

    useEffect(() => {
        getUserFollowingGroup(loggedInUser.id)
            .then(({data}) => {
                setGroups(data)
            })
    }, [])

    return (
        <>

            <Container style={{marginTop: 20, marginBottom: 10}}>
                <Paper style={{padding: 20}}>
                    <h1>Following</h1>
                    <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                    {
                        groups.map((group) => (
                            <Link to={"/groups/" + group.id} component={NavLink}>
                                <GroupCard group={group}/>
                            </Link>
                        ))
                    }
                </Paper>
            </Container>
        </>
    );
}

export default Groups;