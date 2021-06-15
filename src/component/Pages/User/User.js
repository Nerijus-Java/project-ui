import React, {useEffect, useState} from "react";
import {fetchUserById} from "../../../api/UserApi";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {Avatar, Backdrop, CircularProgress, Container, Divider, Paper} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import ProfilePicFormik from "../../Formik/ProfilePicUpload/ProfilePicFormik";
import MyAvatar from "../../Avatar/MyAvatar";
import {fetchPicByUserID} from "../../../api/ProfilePicApi";
import UsersGroups from "../../UserGroups/UsersGroups";
import UserGroupFollowing from "../../UsersGroupsFollowing/UserGroupFollowing";


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
    const [profilePic, setProfilePic] = useState();

    const handleFileOnSubmit = () => {
        fetchPicByUserID(loggedInUser?.id).then((data) => {
            setProfilePic(data);
        });
    }

    useEffect(() => {
        fetchUserById(loggedInUser?.id).then(({data}) => {
            setUser(data)
        });
        fetchPicByUserID(loggedInUser?.id).then((data) => {
            setProfilePic(data);
        });

    }, [])



    const classes = useStyles();

    return (
        <>
            {
                user?.username ?
                    <>

                        <Container style={{marginTop: 0, paddingTop: 20, paddingBottom: 5}}>

                            <MyAvatar user={user} profilePic={profilePic}></MyAvatar>
                            <Divider variant="fullWidth" style={{margin: "20px 0"}}/>

                        </Container>

                        <ProfilePicFormik handleFileOnSubmit={() => handleFileOnSubmit()}/>

                        <UsersGroups/>

                        <UserGroupFollowing/>
                    </>
                    :
                    <div>
                        <Backdrop className={classes.backdrop} open={true}>
                            <CircularProgress color="inherit"/>
                        </Backdrop>
                    </div>

            }
        </>
    )
};

export default User;