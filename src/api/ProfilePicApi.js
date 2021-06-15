import HTTP from "./index";

export const fetchPicByUserID = (id) => HTTP.get("/public/picture/" + id + "/user")

export const postPic = (multipartFile) => {
    let formData = new FormData();

    const {file} = multipartFile;

    const blob = new Blob([{multipartFile}],{type: file.type});

    formData.append('multipartFile', file);
    return HTTP.post("/picture", formData);
}
