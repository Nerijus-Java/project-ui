import HTTP from "./index";

export const isFollowing = (id) => HTTP.get("/follow/" + id)

export const unFollow = (id) => HTTP.delete("/follow/" + id)

export const Follow = (id) => HTTP.post("/follow/" + id)
