import { Provider } from 'react-redux' 

import Tasks from "./components/Tasks";

import reduxStore from "./redux/store";

export default function App (){
  return(
    <Provider store={reduxStore}>
      <Tasks/>
    </Provider>
  ); 
}
