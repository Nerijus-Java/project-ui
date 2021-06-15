import HTTP from "./index";

export const fetchCommentByID = (id) => HTTP.get("/public/comment/" + id)

export const fetchCommentByPostID = (id) => HTTP.get("/public/comment/" + id + "/post")

export const createComment = (comment, id) => HTTP.post("/comment/" + id, comment);

export const updateComment = (comment) => HTTP.put("/comment/", comment);

export const deleteComment = (id) => HTTP.delete("/comment/" + id);