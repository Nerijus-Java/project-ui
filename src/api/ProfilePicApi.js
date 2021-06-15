import HTTP from "./index";

export const fetchPicByUserID = (id) => HTTP.get("/public/picture/" + id + "/user")

export const postPic = (multipartFile) => {
    let formData = new FormData();

    var file = new Blob([
        JSON.stringify({multipartFile})
    ], { type: 'application/json' });

    formData.append('multipartFile', file, "filename")
    return HTTP.post("/picture", formData);
}
