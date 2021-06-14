import React, {useEffect, useState} from "react";
import {fetchUserById} from "../../../api/UserApi";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {Backdrop, CircularProgress, Container, Divider, Link, Paper} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

const User = () => {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const [user, setUser] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchUserById(loggedInUser?.id).then(({data}) => {
            setUser(data)
        }).then(setIsLoaded(true))
    }, [])

    const classes = useStyles();

    return (
        <>
            {
                user?.username ?
                    <>

                        <Container style={{marginTop: 0, paddingTop: 20, paddingBottom: 5}}>
                            <h1>{user.username}</h1>
                            <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                        </Container>


                        <Container>
                            <Paper style={{padding:5 , marginBottom:10}}>
                                <h1>My Groups</h1>
                            </Paper>
                        </Container>

                        <Container>
                            <Paper style={{padding:5, marginBottom:10}}>
                                <h1>Following</h1>
                            </Paper>
                        </Container>
                    </>
                    :
                    <div>
                        <Backdrop className={classes.backdrop} open={true}>
                            <CircularProgress color="inherit"/>
                        </Backdrop>
                    </div>

            }
        </>
    );
};

export default User;