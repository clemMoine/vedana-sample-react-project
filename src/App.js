// Libraries
import React from "react";
import { Provider } from "react-redux";

// Views
import Sample from "./Views/Sample"

// Redux Store
import createStore from "./Redux";

// Création du store
const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Sample />
    </Provider>
  );
}

export default App;
