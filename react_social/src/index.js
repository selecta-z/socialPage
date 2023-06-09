import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './components/redux/redux_store';
import App from './App';
// import {subscribe} from './store'

import { Provider } from 'react-redux'

// export let RerenderTree = (store) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(

    <React.StrictMode>
      <Provider store={store}>
        <App state={store.getState()} changeNicknameF={store.changeNicknameF} addPostF={store.addPostF}/>
      </Provider>
    </React.StrictMode>
  );
// };

// // dispatch={store.dispatch.bind(store)}

// RerenderTree(store);

// store.subscribe(() => {
//   let state = store.getState();
//   RerenderTree(state);
// });