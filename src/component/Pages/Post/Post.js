import React, {useState} from "react";

import {Box, Button, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ChatBubbleOutlineSharpIcon from '@material-ui/icons/ChatBubbleOutlineSharp';

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

    const handleAddPost = () => {
        setShow(!show)
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
                            <Button color={"secondary"} style={{marginLeft: 0}} className={classes.button} size={"small"}
                                    onClick={handleAddPost}>
                                <ChatBubbleOutlineSharpIcon/>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <Box component="span" display={getDisplayStyle()}>
                <Paper style={{padding: "20px 20px", marginTop: 5}} variant="outlined">
                    <Grid container wrap="nowrap" spacing={2}>
                        buttons for comments
                    </Grid>
                </Paper>
            </Box>
        </>
    )
}

export default Post;