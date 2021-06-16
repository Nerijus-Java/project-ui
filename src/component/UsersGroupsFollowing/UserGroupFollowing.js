import React, {useEffect, useState} from "react";
import {Card, CardActionArea, CardContent, Container, Divider, Link, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {getUserFollowingGroup} from "../../api/GroupApi";

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

const Groups = () => {

    const [groups, setGroups] = useState([])
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const {t} = useTranslation('Groups');

    useEffect(() => {
        getUserFollowingGroup(loggedInUser.id)
            .then(({data}) => {
                setGroups(data)
            })
    }, [])

    const classes = useStyles();

    return (
        <>

            <Container style={{marginTop: 20, marginBottom:10}}>
                <Paper style={{padding: 20}}>
                    <h1>Following</h1>
                    <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                    {
                        groups.map((group) => (
                            <Link to={"/groups/" + group.id} component={NavLink}>
                                <Card className={classes.root}
                                      style={{display: 'inline-block', minWidth: 301, margin: "3px"}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {group.groupName}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {group.groupBio}
                                            </Typography>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {t("Posts")} {group.postAmount}
                                            </Typography>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {t("Followers")} {group.followerAmount}
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        ))
                    }
                </Paper>
            </Container>
        </>
    );
}

export default Groups;