import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { TodoState, TOGGLE_TODO, DELETE_TODO } from "../store/todo/types";

const Wrapper = styled.div`
  min-height: 500px;
  border: 1px solid black;
`;

const Todo = styled.div``;

const Text = styled.span<{ isCompleted: boolean }>`
  color: ${props => (props.isCompleted ? "#999" : "black")};
`;
const TodoList: FunctionComponent = () => {
  const todos = useSelector((state: TodoState) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <Wrapper>
      {todos.map(todo => (
        <Todo key={todo.index}>
          <Text isCompleted={todo.isCompleted}>{todo.text}</Text>
          <button
            onClick={() => dispatch({ type: TOGGLE_TODO, index: todo.index })}
          >
            완료
          </button>{" "}
          <button
            onClick={() => dispatch({ type: DELETE_TODO, index: todo.index })}
          >
            삭제
          </button>
        </Todo>
      ))}
    </Wrapper>
  );
};

export default TodoList;
