import HTTP from "./index";

export const fetchPosts = () => HTTP.get("/post")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchPostsByGroupId = (id) => HTTP.get("/post/" + id + "/group")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchPostById = (id) => HTTP.get("/post/" + id )
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )