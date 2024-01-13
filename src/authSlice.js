import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error: null
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        signInStart: state => {
            state.isLoading = true
        },
        signInSuccess: (state, action) => {
            state.loggedIn = true
            state.isLoading = false
            localStorage.setItem('token', action.payload.token)
        },
        signInErr: state => {
            state.isLoading = false
            state.error = "error"
        }
    }
});

export const { signInStart, signInSuccess, signInErr } = authSlice.actions;
export default authSlice.reducer;