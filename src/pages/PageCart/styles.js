import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 960px) {
    flex-direction: row;
    max-width: 100rem;
  }
`;

export const ContainerProdutos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow-y: scroll;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap: 2rem;
  @media (min-width: 960px) {
    overflow-y: hidden;
  }
`;

export const ContainerResumo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-width: 20rem;
  height: 15rem;
  padding: 11px;
  gap: 2rem;

  P {
    font-weight: 900;
    font-size: 1.7rem;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
    }
  }
`;

////
export const Header = styled.div`
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
    font-weight: 700;
    font-size: 1rem;
    width: auto;

    @media (min-width: 425px) {
      font-size: 1.7rem;
    }
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

export const ContainerVazio = styled.div`
  display: flex;
  justify-content: center;
`;
