import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 17.5rem;
  height: 17rem;
  flex-wrap: wrap;
  padding: 5px;
  margin-left: 2rem;
  border: 1px solid var(--purple);

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    height: 10rem;
    width: 17rem;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
  }
  button {
    width: 8rem;
    height: 2rem;
    font-size: 13px;
  }
  section {
    display: flex;
    flex-direction: column;
    width: 18rem;
  }
`;
