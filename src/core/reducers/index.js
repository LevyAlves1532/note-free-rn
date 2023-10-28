// LIBs
import { combineReducers } from "redux";

// REDUCERs
import notesReducer from "./notesReducer";

const reducers = combineReducers({
  notes: notesReducer,
});

export { reducers };