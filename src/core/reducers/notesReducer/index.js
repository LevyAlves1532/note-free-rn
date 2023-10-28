// TYPEs
import { NOTES_ADD, NOTES_EDIT, NOTES_REMOVE } from "./types";

const INITIAL_STATE = {
  list: [],
}

function notesReducer(state = INITIAL_STATE, action) {
  let newState = { ...state };
  let newList = [ ...newState.list ];

  switch(action.type) {
    case NOTES_ADD:
      newList.push({ id: Math.random(), ...action.payload });
      newState.list = newList;
      return newState;
    case NOTES_EDIT:
      let note = newList.find(note => note.id === action.payload.id);
      note.title = action.payload.title;
      note.description = action.payload.description;
      newState.list = newList;
      return newState;
    case NOTES_REMOVE:
      newList = newList.filter(note => note.id !== action.payload.id);
      newState.list = newList;
      return newState;
    default:
      return newState;
  }
}

export default notesReducer;
