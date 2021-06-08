import HTTP from "./index";

const fetchGroups = () => HTTP.get("/groups")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

const fetchGroupById = (id) => HTTP.get("/groups/" + id)
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

const createGroup = (group) => HTTP.post("/groups", group);

const updateGroup = (group) => HTTP.put("/groups", group);

const deleteGroup = (id) => HTTP.delete("groups/" + id);


export {fetchGroups, fetchGroupById, createGroup, deleteGroup, updateGroup}