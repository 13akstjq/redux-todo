import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./types";

export const AddTodoAction = (text: string) => {
  return {
    tyep: ADD_TODO,
    text
  };
};

export const ToggleTodoAction = (index: number) => {
  return {
    type: TOGGLE_TODO,
    index
  };
};

export const DeleteTodoAction = (index: number) => {
  return {
    type: DELETE_TODO,
    index
  };
};
