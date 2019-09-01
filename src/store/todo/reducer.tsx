import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TodoState,
  TodoActionTypes
} from "./types";

const initialState: TodoState = {
  todos: [
    {
      index: 1,
      todo: "할일 1",
      isCompleted: false
    }
  ]
};

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      {
        console.log("ADD_TODO");
        state = {
          todos: [
            ...state.todos,
            {
              index: state.todos.length + 1,
              todo: action.text,
              isCompleted: false
            }
          ]
        };
      }
      return state;
    case TOGGLE_TODO: {
      return state;
    }
    case DELETE_TODO: {
      return state;
    }
    default:
      return state;
  }
};

export default todoReducer;
