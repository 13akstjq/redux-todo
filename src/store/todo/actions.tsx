import { ADD_TODO, TodoActionTypes, TOGGLE_TODO, DELETE_TODO } from "./types";

export const AddTodoAction = (text: string): TodoActionTypes => {
  return {
    type: ADD_TODO,
    text
  };
};

export const ToggleTodoAction = (index: number): TodoActionTypes => {
  return {
    type: TOGGLE_TODO,
    index
  };
};

export const DeleteTodoAction = (index: number): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    index
  };
};
