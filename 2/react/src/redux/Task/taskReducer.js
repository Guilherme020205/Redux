import { ADD_TASK, REMOVE_TASK } from "./taskTypes"

const initialStateTask = []

function taskReducer(state = initialStateTask, action) {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]
        case REMOVE_TASK:
            return state.filter(task => task !== action.payload)
        default:
            return state
    }
}

export default taskReducer;