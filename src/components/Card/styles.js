import styled from "styled-components";

export const Container = styled.li`
  gap: 1rem;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 16rem;
  max-height: 23rem;
  border: 1px solid var(--white);

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    height: 10rem;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
  }
  button {
    height: 30%;
    padding: 4px;
  }
`;
