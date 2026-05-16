// Uga uga! Redux é a Grande Árvore onde guardamos todas as nossas bananas (dados).
const redux = require("redux")
// Logger é o Macaco Fofoqueiro: ele grita pra selva toda vez que alguém mexe nas bananas.
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

// State ---------------
// A cesta vazia do macaco no começo do dia. Não tem título nem tarefas (bananas).
const initialStateTitle = ""
const initialStateTasks = []

// Actions types ---------------
// Os gritos que o macaco pode dar na selva para pedir algo:
const ADD_TITLE = "ADD_TITLE";       // "UHA UHA! COLOCA NOME NA CESTA!"
const ADD_TASK = "ADD_TASK";         // "UHA UHA! BOTA UMA BANANA AQUI!"
const REMOVE_TASK = "REMOVE_TASK";   // "UHA UHA! TIRA ESSA BANANA DAQUI!"

// Action Creator => Função que cria a ação
// É o papelzinho com o pedido do macaco. O macaco não sabe falar as regras, então ele entrega um bilhete pronto.
function addTitle( title ){
    // 'type' é o Grito. 'payload' é a banana (ou o nome) que estamos entregando junto com o grito.
    return { type: ADD_TITLE, payload: title }
}

function addTask( task ){
    return { type:ADD_TASK, payload: task }
}

function removeTask( task ){
    return { type:REMOVE_TASK, payload: task}
}

// Reducers ---------------
// O Macaco Sábio (Chefe). Ele pega a cesta velha (state), lê o bilhete (action) e devolve uma cesta NOVA.
// REGRA DE OURO: O macaco sábio NUNCA quebra a cesta velha (estado é imutável). Ele sempre constrói uma do zero baseada na velha.
const reducerTitle = ( state = initialStateTitle, action ) => {
     switch (action.type) {
        case ADD_TITLE:
            return action.payload // Troca a plaquinha da cesta pelo que veio no bilhete (payload)
        default:
            return state // Se o macaco não entender o grito, devolve a cesta do jeito que estava
     } 
}

const reducerTask = ( state = initialStateTasks, action ) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload] // Pega todas as bananas antigas (...state) e bota a banana nova no final
        case REMOVE_TASK:
            return state.filter((t) => t !== action.payload) // Separa e joga fora só a banana que o macaco mandou tirar
        default:
            return state // Se não entender o grito, não faz nada
    }
}

// O Macaco Rei: ele junta o trabalho dos dois macacos sábios (o do título e o das tarefas) num lugar só.
const rootReducer = redux.combineReducers({
    title: reducerTitle,
    tasks: reducerTask,
})

// Store ---------------
// O GRANDE COFRE DE BANANAS! Colocamos o Macaco Rei lá dentro, e chamamos o Macaco Fofoqueiro (logger) pra vigiar.
const store = redux.createStore(rootReducer, redux.applyMiddleware(logger))

console.log("Inital state", store.getState()) // "Olha como a cesta está vazia antes de fazer bagunça!"

const unsubscribe = store.subscribe(() => {}) // Coloca um macaquinho com binóculos pra ficar olhando a cesta o tempo todo.

// DISPATCH: Dar a ordem! "Vai lá, joga o bilhete pro Macaco Sábio trabalhar!"
store.dispatch(addTitle("Lista de tarefas do dia 25/05"))
store.dispatch(addTask("Comprar as coisas do almoço!")) // Bota banana
store.dispatch(addTask("Cozinhar almoço"))              // Bota banana
store.dispatch(addTask("Comer o almoço :)"))            // Bota banana
store.dispatch(removeTask("Comprar as coisas do almoço!")) // Tira banana

// console.log("Final state", store.getState())

// Manda o macaquinho do binóculo ir dormir, já acabou o trabalho.
unsubscribe()
