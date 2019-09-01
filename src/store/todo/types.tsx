/*
type을 정의하고 todoAction의 type을 정의하는 곳  
*/

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  index: number;
  text: string;
  isCompleted: boolean;
}

export interface TodoState {
  todos: Todo[];
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  index: number;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  index: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;
