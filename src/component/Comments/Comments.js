import React, {useEffect, useState} from "react";
import {deleteComment, fetchCommentByPostID} from "../../api/CommentsApi";
import {Link, Paper} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import SmallAvatar from "../Avatar/SmallAvatar";
import {useTranslation} from "react-i18next";


export default (props) => {

    const comments = props.comments;
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const {t} = useTranslation('Comments');

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
                                    <SmallAvatar username={comment.username} userid={comment.userID}/>
                                    <span style={{marginLeft:5}}>{comment.description}</span>
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
                    <span><b>{t('NoComments')}</b></span>
                </Paper>

            }
        </>
    )
}