import React, { FunctionComponent, useState, InputHTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ADD_TODO } from "../store/todo/types";

const Input = styled.input``;

const TodoInput: FunctionComponent = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValue("");
    dispatch({ type: ADD_TODO, text: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <Input value={value} onChange={onChange}></Input>
    </form>
  );
};

export default TodoInput;
