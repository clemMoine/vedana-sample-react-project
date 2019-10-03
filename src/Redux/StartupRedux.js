import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupDone: null,
  startupFailed: ["error"]
});

export const StartupTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  started: false,
  error: {}
});

/* ------------- Reducers ------------- */

export const startupDone = state => {
  return state.merge({
    started: true
  });
};

export const startupFailed = (state, { error }) => {
  return state.merge({ error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [StartupTypes.STARTUP_DONE]: startupDone,
  [StartupTypes.STARTUP_FAILED]: startupFailed
});
