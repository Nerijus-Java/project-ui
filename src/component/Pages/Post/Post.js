import React from "react";

import {Button, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        marginBottom:0,
        marginTop:0
    }
}));

const Post = (props) => {

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
                        <p style={{textAlign: "left"}} >
                            random Text
                        </p>
                        <div className={classes.root} style={{padding:0}}>

                            <Button color={"secondary"} style={{marginLeft:0}} className={classes.button}>
                                <ChatBubbleOutlineSharpIcon/>
                            </Button>

                        </div>

                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default Post;