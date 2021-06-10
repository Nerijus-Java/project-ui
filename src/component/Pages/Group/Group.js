import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchGroupById} from "../../../api/GroupApi";
import {Backdrop, Box, CircularProgress, Container, Divider, Grid, Paper} from "@material-ui/core";
import {fetchPostsByGroupId} from "../../../api/PostApi";
import Post from "../Post/Post";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PostFormik from "../../Formik/PostFormik/PostFormik";

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

        const fetchData = async () =>  {
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

    const handleAddPost = () =>{
        setShow(!show)
    }

    return (
        <>
            {
                group?.groupName ?
                    <>
                        <Paper style={{marginTop : 0 , paddingTop: 40 , paddingBottom: 5}} variant="outlined">
                            <Container>
                                <h1>{group.groupName} </h1>
                                <h3>{group.groupBio}</h3>
                            </Container>
                        </Paper>

                        <Container>
                            <div style={{paddingBottom: 10}} className="App">
                                <h1>Posts</h1>

                                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

                                <Paper style={{padding:10, marginTop:10}} variant="outlined">

                                    <div className={classes.root}>
                                        <Button variant="outlined" color="secondary" onClick={handleAddPost}>
                                            Add Post
                                        </Button>
                                    </div>
                                </Paper>

                                <Box component="span" display={getDisplayStyle()}>
                                    <Paper style={{padding: "20px 20px", marginTop: 5}} variant="outlined">
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <PostFormik id={group.id}/>
                                        </Grid>
                                    </Paper>
                                </Box>

                                {
                                    post.map((post) => (<Post post={post}/>))
                                }
                            </div>
                        </Container>
                    </>
                    :
                    <div>
                        <Backdrop className={classes.backdrop} open={open}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </div>

            }
        </>
    );
}

export default Group;