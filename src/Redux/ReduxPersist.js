// Libraries
import storage from "redux-persist/lib/storage";

// Services
import immutablePersistenceTransform from "../Services/ImmutablePersistenceTransform";

const REDUX_PERSIST = {
  active: true,
  reducerVersion: "1.0",
  storeConfig: {
    key: "root",
    storage,
    blacklist: ["startup"],
    transforms: [immutablePersistenceTransform]
  }
};

export default REDUX_PERSIST;
