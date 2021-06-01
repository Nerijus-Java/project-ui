import HTTP from "./index";

const fetchGroups = () => HTTP.get("/groups")
    .finally(response =>
        new Promise((resolve) => resolve(response))
    )

export {fetchGroups}