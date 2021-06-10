import HTTP from "./index";

export const fetchPosts = () => HTTP.get("/public/post")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchPostsByGroupId = (id) => HTTP.get("/public/post/" + id + "/group")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchPostById = (id) => HTTP.get("/public/post/" + id )
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )