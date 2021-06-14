import axios from "axios";
import HTTP from "./index"

export const register = (newUser) => HTTP.post('/public/user', newUser)

export const login = (loginData) => axios.post('/login', loginData)

export const updateUser = (user) => HTTP.put('/user', user)

export const fetchUserById = (id) => HTTP.get('/public/user/' + id).finally(response =>
    new Promise((resolve) => resolve(response))
)

const deleteUser = (id) => HTTP.delete('/user/' + id)
