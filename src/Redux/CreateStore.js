// Libraries
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createPromise } from "redux-promise-middleware";
import { createStore, applyMiddleware, compose } from "redux";

// Redux Persist
import ReduxPersist from "./ReduxPersist";

// Services
import Rehydration from "../Services/Rehydration";

// Creation of the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Promise Middleware ------------- */

  middleware.push(
    createPromise({
      promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"]
    })
  );

  /* ------------- Thunk Middleware ------------- */

  middleware.push(thunkMiddleware);

  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = [
    "EFFECT_TRIGGERED",
    "EFFECT_RESOLVED",
    "EFFECT_REJECTED",
    "persist/REHYDRATE"
  ];

  if (process.env.NODE_ENV === "development") {
    // silence these saga-based messages
    // create the logger
    const logger = createLogger({
      predicate: (getState, { type }) =>
        SAGA_LOGGING_BLACKLIST.indexOf(type) === -1
    });

    middleware.push(logger);
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  /* ------------- Run ------------- */

  const store = createStore(rootReducer, compose(...enhancers));

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store);
  }

  return store;
};
