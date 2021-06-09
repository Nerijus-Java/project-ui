import React, {useEffect, useState} from "react";
import {fetchGroups} from "../../../api/GroupApi";
import {Card, CardActionArea, CardActions, CardContent, Container, Link, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';

const Groups = () => {

    const [groups, setGroups] = useState([])

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    }));

    useEffect(() => {
        fetchGroups()
            .then(({data}) => {
                setGroups(data)
            })

    }, [])

    const classes = useStyles();

    return (
        <>

            <Paper style={{marginTop: 0, paddingTop: 40, paddingBottom: 5}}>
                <Container>
                    <h1>Groups</h1>
                </Container>
            </Paper>

            <Container>
                {
                    groups.map((group) => (
                        <Link to={"/groups/" + group.id} component={NavLink}>
                            <Card className={classes.root}
                                  style={{marginTop: 10, display: 'inline-block', minWidth: 320}}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {group.groupName}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {group.groupBio}
                                        </Typography>
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

export default Groups;