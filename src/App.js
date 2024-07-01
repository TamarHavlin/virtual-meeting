import { Provider } from 'react-redux';
import './App.css';
import Menu from './Components/Menu/Menu';
import Screen from './Components/Screen/Screen';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="menu">
          <Menu></Menu>
        </div>
        <div className="screen">
          <Screen></Screen>
        </div>
      </div>
    </Provider>
  );
}

export default App;
