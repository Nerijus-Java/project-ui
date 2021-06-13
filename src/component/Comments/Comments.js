import React, {useEffect, useState} from "react";
import {deleteComment, fetchCommentByPostID} from "../../api/CommentsApi";
import {Link, Paper} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

export default (props) => {

    const comments = props.comments;
    const loggedInUser = useSelector(state => state.user.loggedInUser)

    const handleDelete = (id) => {
        deleteComment(id).finally(props.reloadComments())
    }

    return (
        <>
            {comments?.length ?
                <>
                    {
                        comments.map((comment) => (
                            <Paper style={{padding: "10px", marginTop:5}} variant="outlined">
                                <div>
                                    <h2 style={{margin:0}}><b>{comment.username}</b></h2>
                                    <span>{comment.description}</span>
                                </div>

                                {loggedInUser?.id === comment.userID || loggedInUser?.roles.includes("ADMIN") ?
                                    <>
                                        <IconButton variant={"outlined"} color={"primary"} size={"small"}  onClick={() => handleDelete(comment.id)}>
                                            <DeleteOutlineIcon/>
                                        </IconButton>

                                        <Link to={"/comment/update/" + comment.id} component={NavLink}>
                                            <IconButton variant={"outlined"} color={"primary"} size={"small"}  >
                                                <EditIcon/>
                                            </IconButton>
                                        </Link>

                                    </>
                                    :
                                    ""
                                }
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