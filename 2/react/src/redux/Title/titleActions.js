// Gerencia o estado (dados) relacionado ao "Title" (Note que o arquivo chama "Actions", mas o código é de um Reducer).
// Importa a constante de tipo de ação ADD_TITLE.
import { ADD_TITLE } from "./titleTypes"

// Define o estado inicial do título como uma string vazia (nenhum título por padrão).
const initialStateTitle = ""

// Cria a função do reducer, que recebe o estado atual (ou o inicial) e a ação despachada.
function titleReducer(state = initialStateTitle, action) {
    // Verifica qual o tipo da ação (action.type) que o Redux despachou.
    switch (action.type) {
        // Se a ação for do tipo ADD_TITLE...
        case ADD_TITLE:
            // ...retorna o novo título, que está guardado no "payload" (carga útil) da ação.
            return action.payload
        // Caso a ação não seja reconhecida por este reducer...
        default:
            // ...retorna o estado exatamente como ele já estava, sem fazer alterações.
            return state
    }
}

// Exporta este reducer para que ele possa ser conectado ao Root Reducer.
export default titleReducer;