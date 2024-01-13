import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isLogged: false,
    error: null,
    user: null
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.isLoading = true
        },
        loginSuccess: (state, action) => {
            state.isLogged = true
            state.isLoading = false
            state.user = action.payload
            localStorage.setItem("token", action.payload.token)
        },
        loginError: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        logoutUser: (state, action) => {
            state.isLogged = false
            state.user = null
        }
    }
});

export const {
    loginStart,
    loginSuccess,
    loginError,
    logoutUser
} = AuthSlice.actions;
export default AuthSlice.reducer;