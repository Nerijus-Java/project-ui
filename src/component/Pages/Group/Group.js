import {NavLink, useHistory, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {deleteGroup, fetchGroupById} from "../../../api/GroupApi";
import {Backdrop, Box, CircularProgress, Container, Divider, Grid, Link, Paper} from "@material-ui/core";
import {fetchPostsByGroupId} from "../../../api/PostApi";
import Post from "../Post/Post";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PostFormik from "../../Formik/PostFormik/PostFormik";
import {useSelector} from "react-redux";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {useTranslation} from "react-i18next";

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

const Group = () => {

    let {id} = useParams();
    const classes = useStyles();

    const [group, setGroup] = useState()
    const [post, setPost] = useState([]);

    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(true);
    const {t} = useTranslation('Group');
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const history = useHistory()

    const getDisplayStyle = () => {
        let display = "";

        if (show) {
            display += "none";
        } else {
            display += "inline";
        }
        return display;
    }

    useEffect(() => {
        const fetchData = async () => {
            fetchGroupById(id).then(({data}) => {
                setGroup(data)
            });
            fetchPostsByGroupId(id).then(({data}) => {
                setPost(data)
            }).finally(setOpen(false))
        }

        const timer = setTimeout(() => {
            fetchData();
        }, 300);

        return () => clearTimeout(timer);
    }, [])


    const reload = () => {
        fetchGroupById(id).then(({data}) => {
            setGroup(data)
        });
        fetchPostsByGroupId(id).then(({data}) => {
            setPost(data)
        }).finally(setOpen(false));
    }

    const handleDeleteGroup = (id) => {
        deleteGroup(id).finally(history.push("/groups"));

    };

    const handleCreatePostPost = () => {
        setShow(!show)
    }

    return (
        <>
            {
                group?.groupName ?
                    <>

                        <Container style={{marginTop: 0, paddingTop: 20, paddingBottom: 5}}>
                            <h1>{group.groupName}</h1>
                            <p>{group.groupBio}</p>
                        </Container>

                        <Container>
                            <div style={{paddingBottom: 10}} className="App">

                                <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                                {loggedInUser?.username ?
                                    <>
                                        <div className={classes.root}>
                                            <Button variant="contained" color="secondary"
                                                    onClick={handleCreatePostPost}>
                                                {t('CreatePost')}
                                            </Button>
                                            {
                                                loggedInUser?.id === group.userID || loggedInUser?.roles.includes("ADMIN") ?
                                                    <>
                                                        <Button color={"primary"} variant={"contained"}
                                                                onClick={() => handleDeleteGroup(group.id)}>
                                                            <DeleteOutlineIcon/>
                                                        </Button>

                                                        <Link to={"/groups/update/" + group.id} component={NavLink}>
                                                            <Button color={"primary"} variant={"contained"}>
                                                                <EditIcon/>
                                                            </Button>
                                                        </Link>


                                                    </>
                                                    :
                                                    loggedInUser?.username &&
                                                    <Button color={"primary"} variant={"contained"}>
                                                        {t('Follow')}
                                                    </Button>
                                            }
                                        </div>

                                        <Box component="span" display={getDisplayStyle()}>
                                            <Paper style={{padding: "20px 20px", marginTop: 5}} variant="outlined">
                                                <Grid container wrap="nowrap" spacing={2}>
                                                    <PostFormik id={group.id}/>
                                                </Grid>
                                            </Paper>
                                        </Box>


                                    </>
                                    :
                                    ""
                                }
                                {
                                    post.map((post) => (<Post post={post} reloadData={reload}/>))
                                }
                            </div>
                        </Container>
                    </>
                    :
                    <div>
                        <Backdrop className={classes.backdrop} open={open}>
                            <CircularProgress color="inherit"/>
                        </Backdrop>
                    </div>

            }
        </>
    );
}

export default Group;