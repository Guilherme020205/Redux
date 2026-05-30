// Configura e inicializa o "Cofre" central de dados da aplicação (A Redux Store).
// Importa a função createStore do Redux 
import { createStore } from "redux";

// Importa o rootReducer, que já contém todas as regras e sub-estados do app.
import rootReducer from "./rootReducer";

// Cria de fato a Store (o banco de dados do Front-end), entregando o rootReducer a ela.
const reduxStore = createStore(rootReducer);

// Exporta a store pronta para que o React possa usá-la (geralmente envolvendo o app com o <Provider>).
export default reduxStore; 