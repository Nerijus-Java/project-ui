import React, {useEffect, useState} from "react";
import {fetchCommentByPostID} from "../../api/CommentsApi";
import {Paper} from "@material-ui/core";
import Container from "@material-ui/core/Container";

export default (props) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentByPostID(props.id).then(({data}) => {
            setComments(data)
        });

    }, [])


    return (
        <>
            {!!comments.length ?
                <>
                    {
                        comments.map((comment) => (
                            <Paper style={{padding: "10px", margin:5}} variant="outlined">
                                <span><b>{comment.username}</b></span>
                                <br/>
                                <span>{comment.description}</span>
                            </Paper>
                        ))
                    }
                </>
                :
                <Paper style={{padding: "10px", margin:5}} variant="outlined">
                    <span><b>No Comments</b></span>
                </Paper>

            }
        </>
    )
}