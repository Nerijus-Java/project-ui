import HTTP from "./index";

export const fetchGroups = () => HTTP.get("/public/group")

export const fetchGroupById = (id) => HTTP.get("/public/group/" + id)

export const createGroup = (group) => HTTP.post("/group", group);

export const updateGroup = (group) => HTTP.put("/group", group);

export const deleteGroup = (id) => HTTP.delete("/group/" + id);

export const getGroupsById = (id) => HTTP.get("/group/" + id + "/user")

export const getUserFollowingGroup = (id) => HTTP.get("/group/follow/" + id + "/user")

