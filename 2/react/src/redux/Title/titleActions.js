// Cria os criadores de ações (Action Creators) do "Title" 
// Importa a constante de tipo de ação ADD_TITLE para garantir que o nome da ação esteja exato.
import { ADD_TITLE } from "./titleTypes";

// Cria e exporta a função addTitle, que vai receber o novo título por parâmetro (quando o usuário digitar, por exemplo).
export function addTitle( title ) {
    // Retorna um objeto "ação", contendo a etiqueta da ação (type) e a informação de fato (payload).
    return { type: ADD_TITLE, payload: title }
}