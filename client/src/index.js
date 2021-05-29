import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { ModalManager } from './common/modals/ModalManager';

const store = configureStore();
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <ModalManager />
    <ToastContainer position="bottom-right" />
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
