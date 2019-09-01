import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

interface IHeaderProps {
  text: string;
}

export const Header: FunctionComponent<IHeaderProps> = ({ text }) => (
  <Wrapper> {text}</Wrapper>
);
