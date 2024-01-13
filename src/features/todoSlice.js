import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

const ToDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodos(state, action) {
            state.data = action.payload
        },
        errorHandling(state, action) {
            state.error = action.payload
        }
    }
});

export const selectAllTodo = state => state.data;

export const { errorHandling, setTodos } = ToDoSlice.actions;
export default ToDoSlice.reducer;