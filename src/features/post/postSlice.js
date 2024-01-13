import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
    posts: [],
    status: 'idle',
    error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const res = await axios.get(POSTS_URL);
        return [...res.data];
    } catch (error) {
        return error.message;
    }
});

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.posts.push(action.payload)
        }
    }
});

export const selectAllPosts = state => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;