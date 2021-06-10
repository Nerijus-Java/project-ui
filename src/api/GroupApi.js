import HTTP from "./index";

export const fetchGroups = () => HTTP.get("/public/group")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const fetchGroupById = (id) => HTTP.get("/public/group/" + id)
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export const createGroup = (group) => HTTP.post("/groups", group);

export const updateGroup = (group) => HTTP.put("/groups", group);

export const deleteGroup = (id) => HTTP.delete("groups/" + id);


