import HTTP from "./index";

export const createPost = (postData, id) => HTTP.post('/post/' + id, postData)

export const fetchPosts = () => HTTP.get("/public/post")

export const fetchPostsByGroupId = (id) => HTTP.get("/public/post/" + id + "/group")

export const fetchPostById = (id) => HTTP.get("/public/post/" + id )

export const deletePostById = (id) => HTTP.delete("/post/" + id )
