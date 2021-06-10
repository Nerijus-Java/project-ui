import React, {useEffect, useState} from "react";
import {fetchCommentByPostID} from "../../api/CommentsApi";

export default (props) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchCommentByPostID(props.id).then(({data}) => {
            setComments(data)
        });

    }, [])


    return (
        <div>
            {
                comments.map((comment) => (
                    <>
                        <p>{comment.username}</p>
                        <p>{comment.description}</p>
                    </>
                ))
            }
        </div>
    )
}