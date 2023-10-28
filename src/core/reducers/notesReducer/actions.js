// TYPEs
import { NOTES_ADD, NOTES_EDIT, NOTES_REMOVE } from "./types";

export const addNotes = (note) => ({
  type: NOTES_ADD,
  payload: note,
});

export const editNotes = (note) => ({
  type: NOTES_EDIT,
  payload: note,
});

export const delNotes = (note) => ({
  type: NOTES_REMOVE,
  payload: note,
});