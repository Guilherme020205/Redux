// State ---------------
const initialStateTitle = ""
const initialStateTask = []

// Actions types ---------------
const ADD_TITLE = "ADD_TITLE";
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";

// Função que cria a ação => Action Creator
function addTitle(title){
    return { type: ADD_TITLE, payload: title } // Actions: objeto => tipo da ação e payload ---------------
}

function addTask(task){
    return { type:ADD_TASK, payload: task } 
}

function removeTask(task){
    return { type:REMOVE_TASK, payload: task}
}