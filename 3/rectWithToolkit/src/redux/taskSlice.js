import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            // return [...state, action.payload]
            state.push(action.payload)
        },
        removeTask: (state, action) => {
            // return state.filter((t) => t !== action.payload)
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    }
})

export default taskSlice.reducer
export const { addTask, removeTask } = taskSlice.actions
