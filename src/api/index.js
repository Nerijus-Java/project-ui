import axios from "axios";

const HTTP = axios.create({
    baseURL: "/project/api"
});

export default HTTP