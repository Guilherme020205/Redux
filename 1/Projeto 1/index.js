const redux = require("redux")
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

// State ---------------
const initialStateTitle = ""
const initialStateTasks = []

// Actions types ---------------
const ADD_TITLE = "ADD_TITLE";
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

// Action Creator => Função que cria a ação 
function addTitle( title ){
    return { type: ADD_TITLE, payload: title } // Actions: objeto => tipo da ação e payload ---------------
}

function addTask( task ){
    return { type:ADD_TASK, payload: task } 
}

function removeTask( task ){
    return { type:REMOVE_TASK, payload: task}
}

// Reducers ---------------
// Recebe o estado atual e a action e retorna como deve ser o novo estado
// Reducer NÃO altera o estado diretamente, o estado é imutável
const reducerTitle = ( state = initialStateTitle, action ) => {
     switch (action.type) {
        case ADD_TITLE: 
            return action.payload
        default:
            return state
     } 
}

const reducerTask = ( state = initialStateTasks, action ) => {
    switch (action.type) {
        case ADD_TASK: 
            return [...state, action.payload]
        case REMOVE_TASK:
            return state.filter((t) => t !== action.payload)
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    title: reducerTitle,
    tasks: reducerTask,
})

// Store ---------------
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger))

console.log("Inital state", store.getState())

const unsubscribe = store.subscribe(() => {}) // Vai observar cada mudança feita

store.dispatch(addTitle("Lista de tarefas do dia 25/05"))
store.dispatch(addTask("Comprar as coisas do almoço!"))
store.dispatch(addTask("Cozinhar almoço"))
store.dispatch(addTask("Comer o almoço :)"))
store.dispatch(removeTask("Comprar as coisas do almoço!"))

// console.log("Final state", store.getState())

unsubscribe()
