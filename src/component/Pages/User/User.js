import React, {useEffect, useState} from "react";
import {fetchUserById} from "../../../api/UserApi";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Backdrop, CircularProgress, Container, Divider, Paper} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import ProfilePicFormik from "../../Formik/ProfilePicUpload/ProfilePicFormik";


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
    const {t} = useTranslation('User');
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const [user, setUser] = useState();

    useEffect(() => {
        fetchUserById(loggedInUser?.id).then(({data}) => {
            setUser(data)
        });

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

                        <ProfilePicFormik/>

                        <Container>
                            <Paper style={{padding: 5, marginBottom: 10}}>
                                <h1>123</h1>
                            </Paper>
                        </Container>

                        <Container>
                            <Paper style={{padding: 5, marginBottom: 10}}>
                                <h1> 123</h1>
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
}

export default User;