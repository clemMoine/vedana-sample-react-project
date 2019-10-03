// @flow

// Libraries
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { reducer as formReducer } from "redux-form";

// Sagas
import rootSaga from "../Sagas";

// Store
import configureStore from "./CreateStore";

// Reducer
import { reducer as startupReducer } from "./StartupRedux";

// Redux Persist
import ReduxPersist from "./ReduxPersist";

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  let rootReducer = combineReducers({
    startup: startupReducer,
    form: formReducer
  });

  /* ------------- Config persistant store ------------- */
  if (ReduxPersist.active) {
    rootReducer = persistReducer(ReduxPersist.storeConfig, rootReducer);
  }

  return configureStore(rootReducer, rootSaga);
};
