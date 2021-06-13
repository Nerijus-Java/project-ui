import React, {useEffect, useState} from "react";
import IconButton from '@material-ui/core/IconButton';
import {Box, Button, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Comments from "../../Comments/Comments";
import Container from "@material-ui/core/Container";
import CommentFormik from "../../Formik/CommentFormik/CommentFormik";
import {useSelector} from "react-redux";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {deletePostById} from "../../../api/PostApi";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {fetchCommentByPostID} from "../../../api/CommentsApi";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        marginBottom: 0,
        marginTop: 0
    }
}));

const Post = (props) => {

    const [showComments, setShowComments] = useState(true);
    const [showCommentForm, setShowCommentForm] = useState(true);
    const [comments, setComments] = useState([]);
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    useEffect(() => {
        fetchCommentByPostID(props.post.id).then(({data}) => {
            setComments(data)
        });
    }, [])

    const getDisplayStyle = (show) => {
        let display = "";

        if (show) {
            display += "none";
        } else {
            display += "inline";
        }
        return display;
    }

    const reloadComments = () => {
        fetchCommentByPostID(props.post.id).then(({data}) => {
            setComments(data)
        });
    }

    const handleAddComment = (show) => {
        setShowCommentForm(!show)
    }

    const handleAddPost = (show) => {
        setShowComments(!show)
    }

    const handleDeletePost = (id) => {
        deletePostById(id).finally(props.reloadData())
    }

    const classes = useStyles();

    return (
        <>
            <Paper style={{padding: "20px 20px", marginTop: 10}} variant="outlined">
                <Grid container wrap="nowrap" spacing={2}>

                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h2 style={{margin: 0, textAlign: "left"}}>
                            {props.post.username}
                        </h2>

                        <h3 style={{margin: 0, textAlign: "left"}}>
                            {props.post.postTitle}
                        </h3>

                        <p style={{textAlign: "left"}}>
                            {props.post.postDescription}
                        </p>

                        <div className={classes.root}>
                            <IconButton color={"secondary"} style={{margin: 0}} className={classes.button}
                                        size={"small"} variant={"outlined"}
                                        onClick={() => handleAddPost(showComments)}>
                                <ChatBubbleOutlineIcon/>
                            </IconButton>

                            {loggedInUser?.id === props.post.userId || loggedInUser?.roles.includes("ADMIN") ?
                                <IconButton color={"primary"} style={{margin: 0}} className={classes.button}
                                            size={"small"} variant={"outlined"}
                                            onClick={() => handleDeletePost(props.post.id)}>
                                    <DeleteOutlineIcon/>
                                </IconButton>
                                :
                                ""
                            }
                        </div>
                    </Grid>
                </Grid>
            </Paper>

            <Box component="span" display={getDisplayStyle(showComments)}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Container style={{margin: "10px 35px", padding: 3}}>
                        {loggedInUser?.username ?
                            <Button style={{border: "1px solid black"}} color={"secondary"} variant={"contained"}
                                    onClick={() => handleAddComment(showCommentForm)}>
                                <AddCircleOutlineIcon/>
                            </Button>
                            :
                            ""
                        }
                        <Box component="span" display={getDisplayStyle(showCommentForm)}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Container style={{padding: 2, margin: 5}}>
                                    <Paper style={{padding: 10}} variant="outlined">
                                        <CommentFormik id={props.post.id} reloadComments={reloadComments}/>
                                    </Paper>
                                </Container>
                            </Grid>
                        </Box>
                        <Comments comments={comments} reloadComments={reloadComments}/>
                    </Container>
                </Grid>
            </Box>
        </>
    )
}

export default Post;