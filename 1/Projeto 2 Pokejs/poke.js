const redux = require("redux")

// State
const initialState = {
    pokemons: [],
    loading: false,
    error: ""
}

// Actions Types
const FETCH_REQUEST = "FETCH_REQUEST"
const FETCH_SUCCESS = "FETCH_SUCCESS"
const FETCH_ERROR = "FETCH_ERROR"

// Actions Creators
function fetchRequest() {
    return { type: FETCH_REQUEST }
}

function fetchSuccess (pokemons) {
    return { type: FETCH_SUCCESS, payload: pokemons }
}

function fetchError (error) {
    return { type: FETCH_ERROR, payload: error }
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, loading: true, error: "" };
        case FETCH_SUCCESS:
            return { ...state, loading: false, pokemons: action.payload };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

// Store
const store = redux.createStore(reducer);
console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))

// Dispatch das actions 

unsubscribe()