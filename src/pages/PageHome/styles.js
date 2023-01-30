import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1000px;

  flex-wrap: wrap;
  margin-top: 2rem;
  margin-left: 0.4rem;
  gap: 2rem;

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
  }
`;
