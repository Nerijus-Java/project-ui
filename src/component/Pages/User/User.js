import React, {useEffect, useState} from "react";
import {fetchUserById} from "../../../api/UserApi";
import {useSelector} from "react-redux";
import {Container, Divider} from "@material-ui/core";
import ProfilePicFormik from "../../Formik/ProfilePicUpload/ProfilePicFormik";
import MyAvatar from "../../Avatar/MyAvatar";
import {fetchPicByUserID} from "../../../api/ProfilePicApi";
import UsersGroups from "../../UserGroups/UsersGroups";
import UserGroupFollowing from "../../UsersGroupsFollowing/UserGroupFollowing";
import BackDrop from "../../BackDrop/BackDrop";


const User = () => {
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


    return (
        <>
            {
                user?.username ?
                    <>

                        <Container style={{marginTop: 0, paddingTop: 20, paddingBottom: 5}}>

                            <MyAvatar user={user} profilePic={profilePic}/>
                            <Divider variant="fullWidth" style={{margin: "20px 0"}}/>

                        </Container>

                        <ProfilePicFormik handleFileOnSubmit={() => handleFileOnSubmit()}/>

                        <UsersGroups/>

                        <UserGroupFollowing/>
                    </>
                    :
                    <BackDrop/>

            }
        </>
    )
};

export default User;