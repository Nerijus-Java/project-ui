import HTTP from "./index";

export const fetchComments = () => HTTP.get("/public/comment")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchCommentByID = (id) => HTTP.get("/public/comment/" + id)
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchCommentByPostID = (id) => HTTP.get("/public/comment/" + id + "/post")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )