import React from 'react';
import './assets/styles/main.scss'
import ClientApp from "./ClientApp";
import {configureStore} from "./store";
import {Provider} from "react-redux";

function App() {
    const store = configureStore();
  return (
      <Provider store={store}>
        <ClientApp/>
      </Provider>
  );
}

export default App;
