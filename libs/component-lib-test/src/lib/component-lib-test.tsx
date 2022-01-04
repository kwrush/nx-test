import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ComponentLibTestProps {}

const StyledComponentLibTest = styled.div`
  background: #2196f3;
`;

export function ComponentLibTest(props: ComponentLibTestProps) {
  return (
    <StyledComponentLibTest>
      <h1>ComponentLibTest!</h1>
    </StyledComponentLibTest>
  );
}

export default ComponentLibTest;
