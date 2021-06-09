import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loggedInUser: null,
    jwt: null
}

const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin(user, {payload}) {
            return payload
        }
    }
})

export default userSlicer.reducer
export const {setLogin} = userSlicer.actions