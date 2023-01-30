import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  box-shadow: 0px 4px 30px -10px;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  h1 {
    color: var(--purple);
    padding-right: 5.3rem;
    font-weight: 700;
    font-size: 1.7rem;
  }
`;
export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  button {
    margin-right: 1rem;
    width: 6rem;
    height: 1.7rem;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;
