import React, {useEffect, useState} from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    Container,
    Divider,
    Link,
    Typography
} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {deleteUser, getAllUsers} from "../../../api/UserApi";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    button: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
    media: {
        height: 140,
    },
}));

export default () => {

    const [users, setUsers] = useState([])
    const {t} = useTranslation('Users');
    const loggedInUser = useSelector(state => state.user.loggedInUser)

    useEffect(() => {
        getAllUsers()
            .then(({data}) => {
                setUsers(data)
            })

    }, [])

    const deleteUserById = (id) =>{
        if (id !== loggedInUser.id){
            deleteUser(id).finally(
                getAllUsers()
                    .then(({data}) => {
                        setUsers(data)
                    })
            )
        }
    }

    const classes = useStyles();

    return (
        <>
            <Container>
                <h1>{t("Users")}</h1>
            </Container>

            <Container style={{marginTop: 20}}>
                <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                {
                    users.map((user) => (
                        <Link>
                            <Card className={classes.root}
                                  style={{display: 'inline-block', minWidth: 301, margin: "3px"}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {user.id}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {user.username}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {user.name}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {user.surname}
                                        </Typography>

                                        <Button onClick={() => deleteUserById(user.id)} color={"primary"} variant={"contained"}>
                                            {t("Delete")}
                                        </Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    ))
                }
            </Container>
        </>
    );
}
