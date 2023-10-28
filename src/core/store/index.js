// LIBs
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// REDUCERs
import notesReducer from "../reducers/notesReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, notesReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };