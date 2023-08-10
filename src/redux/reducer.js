import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

const addToReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            return state
                
    }
}})

export const { addTodo } = addToReducer.actions
export const reducer = addToReducer.reducer