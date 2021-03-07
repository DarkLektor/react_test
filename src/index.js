import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'

import App from './components/App';

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

console.log(store.getState());
// store.dispatch(changeLocaleEn());
// store.dispatch(changeLocaleRu());
// store.dispatch(changeLocaleEn());

window.store = store;



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

