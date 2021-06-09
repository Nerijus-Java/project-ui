import axios from "axios";
import HTTP from "./index"

const register = (newUser) => HTTP.post('/user', newUser)

export const login = (loginData) => axios.post('/login', loginData)

const updateUser = (user) => axios.put('/user', user)

const userById = (id) => axios.get('/user' + id)

const deleteUser = (id) => axios.delete('/user' + id)
