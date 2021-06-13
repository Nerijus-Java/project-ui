import React, {useEffect, useState} from "react";
import {deleteComment, fetchCommentByPostID} from "../../api/CommentsApi";
import {Paper} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";

export default (props) => {

    const [comments, setComments] = useState([]);
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const history = useHistory()
    const location = useLocation()

    useEffect(() => {
        fetchCommentByPostID(props.id).then(({data}) => {
            setComments(data)
        });

    }, [])

    const handleDelete = (id) => {
        deleteComment(id).finally(history.push(location))
    }

    return (
        <>
            {!!comments.length ?
                <>
                    {
                        comments.map((comment) => (
                            <Paper style={{padding: "10px", marginTop:5}} variant="outlined">
                                <div>
                                    <h2 style={{margin:0}}><b>{comment.username}</b></h2>
                                    <span>{comment.description}</span>
                                </div>

                                {loggedInUser?.id === comment.userID ?
                                    <>
                                        <IconButton variant={"contained"} color={"primary"} size={"small"} style={{marginRight:5}}>
                                            <EditOutlinedIcon/>
                                        </IconButton>

                                        <IconButton variant={"outlined"} color={"primary"} size={"small"}  onClick={() => handleDelete(comment.id)}>
                                            <DeleteOutlineIcon/>
                                        </IconButton>
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