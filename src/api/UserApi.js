import axios from "axios";
import HTTP from "./index"

export const register = (newUser) => HTTP.post('public/user', newUser)

export const login = (loginData) => axios.post('/login', loginData)

const updateUser = (user) => HTTP.put('/user', user)

const userById = (id) => HTTP.get('/user' + id)

const deleteUser = (id) => HTTP.delete('/user' + id)
