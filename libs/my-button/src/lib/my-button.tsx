import { PropsWithChildren } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MyButtonProps {
  onClick: () => void;
}

const StyledMyButton = styled.div`
  display: flex;
  color: white;
  background: #2196f3;
  padding: 0.5em 2em;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

export function MyButton(props: PropsWithChildren<MyButtonProps>) {
  return (
    <StyledMyButton onClick={props.onClick}>{props.children}</StyledMyButton>
  );
}

export default MyButton;
