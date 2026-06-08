import { Provider } from 'react-redux'
import store from './redux/store'
import Tasks from './components/Tasks'

function App() {

  return (
    <Provider store={store}>
      <p>Olá mundo!</p>
      <Tasks/>
    </Provider>
  )
}

export default App
