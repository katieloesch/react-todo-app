import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

const addToReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            return state        
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.id!== action.payload)
        }
}})

export const { addTodo, removeTodo } = addToReducer.actions
export const reducer = addToReducer.reducer