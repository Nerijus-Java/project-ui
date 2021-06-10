import React, {useState} from "react";

import {Box, Button, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Comments from "../../Comments/Comments";
import Container from "@material-ui/core/Container";
import CommentFormik from "../../Formik/CommentFormik/CommentFormik";
import {useSelector} from "react-redux";

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
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    const getDisplayStyle = (show) => {
        let display = "";

        if (show) {
            display += "none";
        } else {
            display += "inline";
        }
        return display;
    }

    const handleAddComment = (show) => {
        setShowCommentForm(!show)
    }

    const handleAddPost = (show) => {
        setShowComments(!show)
    }

    const classes = useStyles();

    return (
        <>
            <Paper style={{padding: "20px 20px", marginTop: 10}} variant="outlined">
                <Grid container wrap="nowrap" spacing={2}>

                    <Grid justifyContent="left" item xs zeroMinWidth>
                        <h3 style={{margin: 0, textAlign: "left"}}>
                            {props.post.postTitle}
                        </h3>
                        <p style={{textAlign: "left"}}>
                            {props.post.postDescription}
                        </p>
                        <div className={classes.root} style={{padding: 0}}>
                            <Button color={"secondary"} style={{margin: 0, padding: 0}} className={classes.button}
                                    size={"small"}
                                    onClick={() => handleAddPost(showComments)}>
                                <ChatBubbleOutlineIcon/>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <Box component="span" display={getDisplayStyle(showComments)}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Container style={{margin: "10px 35px", padding: 3}}>
                        {loggedInUser?.username ?

                            <Button style={{margin: "5px"}} color={"secondary"}
                                    onClick={() => handleAddComment(showCommentForm)}>Comment</Button>

                            :
                            ""
                        }

                        <Box component="span" display={getDisplayStyle(showCommentForm)}>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Container style={{padding: 2, margin: 10}}>
                                    <Paper style={{padding: 10}} variant="outlined">

                                        <CommentFormik id={props.post.id}/>
                                    </Paper>
                                </Container>
                            </Grid>
                        </Box>


                        <Comments id={props.post.id}/>
                    </Container>
                </Grid>
            </Box>
        </>
    )
}

export default Post;