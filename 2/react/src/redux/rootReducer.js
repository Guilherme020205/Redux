// O "Cérebro Maior" que junta todos os reducers menores da aplicação em um único objeto de estado global.
// Importa a função combineReducers da biblioteca Redux.
import { combineReducers } from "redux";

// Importa o titleReducer. (Aviso: neste projeto ele está buscando do arquivo titleReducer, que atualmente tem as actions).
import titleReducer from "./Title/titleReducer";
import taskReducer from "./Task/taskReducer";

// Usa a função combineReducers para empacotar todas as fatias de estado da nossa aplicação.
const rootReducer = combineReducers({
    // Define que a chave "title" do estado global será cuidada e atualizada pelo "titleReducer".
    title: titleReducer, 
    tasks: taskReducer
})

// Exporta este reducer unificado para ser entregue à Store.
export default rootReducer;