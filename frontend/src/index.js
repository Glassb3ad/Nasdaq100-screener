import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store' 
import App from './App'

ReactDOM.render(
  <div>
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById('root')
)