// 1. IMPORTAÇÕES (Trazendo as ferramentas que vamos usar)
// Redux: a biblioteca principal que gerencia o "estado" (dados) da nossa aplicação.
const redux = require("redux")
// Axios: biblioteca para fazer requisições à internet (pegar dados da API do Pokémon).
const axios = require("axios")

// Redux-Logger: um "ajudante" (middleware) que mostra no console (terminal) toda vez que o estado muda.
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

// Redux-Thunk: outro "ajudante". O Redux por padrão só entende ações síncronas (imediatas).
// O Thunk ensina o Redux a lidar com ações assíncronas (como esperar a resposta de uma API da internet).
const thunk = require("redux-thunk").thunk

const POKEMON_AMOUNT = 5;
const API_URL = `<https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_AMOUNT}>`;

// 2. ESTADO INICIAL (O ponto de partida dos nossos dados)
// Pense nisso como um banco de dados temporário inicializado.
const initialState = {
    pokemons: [],    // Lista onde guardaremos os pokémons vindos da API
    loading: false,  // Avisa se estamos esperando a resposta da API ("carregando...")
    error: ""        // Guarda uma mensagem caso algo dê errado
}

// 3. TIPOS DE AÇÕES (Action Types)
// São como "etiquetas" que identificam o que está acontecendo na aplicação.
const FETCH_REQUEST = "FETCH_REQUEST" // "Ei, comecei a buscar os dados!"
const FETCH_SUCCESS = "FETCH_SUCCESS" // "Oba, consegui buscar os dados!"
const FETCH_ERROR = "FETCH_ERROR"     // "Deu ruim, a busca falhou."

// 4. CRIADORES DE AÇÕES (Action Creators)
// São funções simples que preparam e entregam a "ação" (um objeto com a etiqueta acima e os dados).
function fetchRequest() {
    return { type: FETCH_REQUEST }
}

function fetchSuccess (pokemons) {
    // payload é a "carga", ou seja, a informação útil que estamos enviando (os dados dos pokémons)
    return { type: FETCH_SUCCESS, payload: pokemons }
}

function fetchError (error) {
    return { type: FETCH_ERROR, payload: error }
}
  
// 5. AÇÃO ASSÍNCRONA / THUNK (Onde a mágica da internet acontece)
// Essa função não retorna uma ação comum, ela retorna OUTRA função.
function fetchPokemons() {
    return (dispatch) => {
        // 1º Passo: Avisamos ao Redux que o carregamento começou (loading fica true)
        dispatch(fetchRequest())
        
        // 2º Passo: Vamos até a API na internet buscar os pokémons usando o Axios
        axios
            .get(API_URL)
            .then((res) => {
                // Se deu certo (.then), enviamos a lista de pokémons recebida para o estado
                dispatch(fetchSuccess(res.data.results))
            })
            .catch((err) => {
                // Se deu erro (.catch), avisamos enviando a mensagem do erro
                dispatch(fetchError(err.message))
            });
    }    
}

// 6. REDUCER (O "cérebro" que atualiza os dados)
// O Reducer é o ÚNICO que pode alterar o estado. Ele recebe o estado atual e a ação que foi despachada.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            // Copia o estado atual (...state), liga o "carregando" e limpa erros antigos.
            return { ...state, loading: true, error: "" };
        case FETCH_SUCCESS:
            // Copia o estado, desliga o "carregando" e guarda a lista de pokémons (payload).
            return { ...state, loading: false, pokemons: action.payload };
        case FETCH_ERROR:
            // Copia o estado, desliga o "carregando" e guarda a mensagem de erro (payload).
            return { ...state, loading: false, error: action.payload };
        default:
            // Se não reconhecer a ação, devolve o estado como já estava.
            return state;
    }
}

// 7. STORE (O grande "cofre" de dados)
// Junta o nosso estado (gerenciado pelo Reducer) e os ajudantes (Logger e Thunk).
const store = redux.createStore(reducer, redux.applyMiddleware(logger, thunk));
console.log("Initial State", store.getState())

// 8. OBSERVAR E DESPACHAR (Subscribe e Dispatch)
// O subscribe fica "olhando" a store. Toda vez que o estado mudar, ele pode avisar a tela (aqui deixamos vazio).
const unsubscribe = store.subscribe(() => {})

// O Dispatch é como o "correio". Ele envia a nossa ação assíncrona para o Redux, iniciando a requisição da API.
store.dispatch(fetchPokemons())

// O unsubscribe para de observar mudanças. Como a requisição assíncrona demora, 
// talvez você queira remover esta linha depois, senão o Logger pode não mostrar o resultado final no console!
unsubscribe()
