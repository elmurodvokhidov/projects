import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import usersSlice from "../features/post/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postSlice,
        users: usersSlice,
    }
});