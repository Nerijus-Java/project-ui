import React, {useEffect, useState} from "react";
import {fetchGroups} from "../../../api/GroupApi";
import {Box, Container, Divider, Grid, Link, Paper,} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import GroupFormik from "../../Formik/GroupFormik/GroupFormik";
import {useTranslation} from "react-i18next";
import GroupCard from "../../GroupCard/GroupCard";

const useStyles = makeStyles((theme) => ({
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
    const [show, setShow] = useState(true);
    const {t} = useTranslation('Groups');

    const getDisplayStyle = () => {
        let display = "";

        if (show) {
            display += "none";
        } else {
            display += "inline";
        }
        return display;
    }

    const handleCreateGroup = () => {
        setShow(!show)
    }

    useEffect(() => {

        const fetchData = async () => {
            fetchGroups()
                .then(({data}) => {
                    setGroups(data)
                })
        }
        const timer = setTimeout(() => {
            fetchData();
        }, 300);

        return () => clearTimeout(timer);
    }, [])

    const classes = useStyles();

    return (
        <>

            <Container>
                <h1>{t('Groups')}</h1>
            </Container>

            {loggedInUser?.username ?
                <Container style={{marginTop: 20}}>
                    <div className={classes.button}>
                        <Button variant="contained" color="secondary" onClick={handleCreateGroup}>
                            {t('CreateGroup')}
                        </Button>
                    </div>

                    <Box component="span" display={getDisplayStyle()}>
                        <Paper style={{padding: "20px 20px", marginTop: 5}} variant="outlined">
                            <Grid container wrap="nowrap" spacing={2}>
                                <GroupFormik/>
                            </Grid>
                        </Paper>
                    </Box>
                </Container>
                :
                ""
            }

            <Container style={{marginTop: 20}}>
                <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                {
                    groups.map((group) => (
                        <Link to={"/groups/" + group.id} component={NavLink}>
                            <GroupCard group={group}/>
                        </Link>
                    ))
                }
            </Container>
        </>
    );
}

export default Groups;