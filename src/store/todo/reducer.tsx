import {
  TodoState,
  TodoActionTypes,
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO
} from "./types";

const initialState: TodoState = {
  todos: [{ index: 1, text: "할일1", isCompleted: false }]
};

const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO: {
      console.log("ADD_TODO");
      return {
        todos: [
          ...state.todos,
          {
            index: state.todos.length + 1,
            text: action.text,
            isCompleted: false
          }
        ]
      };
    }
    case TOGGLE_TODO: {
      console.log("TOGGLE_TODO");
      return {
        todos: state.todos.map(todo => {
          if (todo.index === action.index) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        })
      };
    }
    case DELETE_TODO: {
      console.log("DELETE_TODO");
      return {
        todos: state.todos.filter(todo => todo.index !== action.index)
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
