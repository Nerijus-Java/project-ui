import HTTP from "./index";


export const fetchPicByUserID = (id) => HTTP.get("/public/picture/" + id + "/user", {responseType: "blob"}).then(resp => {
    const url = URL.createObjectURL(resp.data);
    return url;
});


export const postPic = (multipartFile) => {
    let formData = new FormData();

    const {file} = multipartFile;

    formData.append('multipartFile', file);
    return HTTP.post("/picture", formData);
}
