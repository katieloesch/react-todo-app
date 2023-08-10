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
        },
        updateTodo: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item
                    }
                } else {
                    return todo
                }
            })
        },
        completeTodo: (state, action) => {
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true
                    }
                } else {
                    return todo
                }
            })
        }
}})

export const { addTodo, removeTodo, updateTodo, completeTodo } = addToReducer.actions
export const reducer = addToReducer.reducer