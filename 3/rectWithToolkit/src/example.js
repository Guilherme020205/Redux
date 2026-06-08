// Apenas um exemplo 
const inicialState = {
    user: {
        name: "Guilherme",
        email: "seemannguilherme@gmail.com",
        preferences: {
            theme: "dark",
            notifications: true,
        }
    }
}

export function changeTheme(theme) {
    return { type: "CHANGE_THEME", payload: theme }
}

const userReducer = (state = inicialState, action) => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {
                ...state,
                user: {
                    ...state.user,
                    preferences: { 
                        ...state.user.preferences,
                        theme: action.payload
                    }
                }
            }
            // immer => eu escrevo do jeito de baixo e o immer converte pro jeito de cima 
            // state.user.preferences.theme = action.payload
        default:
            return state
    }

}