import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes/routes';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
