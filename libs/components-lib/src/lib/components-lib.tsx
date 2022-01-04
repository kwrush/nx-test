import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentsLibProps {}

const StyledComponentsLib = styled.div`
  color: pink;
`;

export function ComponentsLib(props: ComponentsLibProps) {
  return (
    <StyledComponentsLib>
      <h1>ComponentsLib!</h1>
    </StyledComponentsLib>
  );
}

export default ComponentsLib;
