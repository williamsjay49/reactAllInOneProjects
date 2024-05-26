import styled from "styled-components";

export const Main = styled.div`
  min-height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  padding: 0.5rem 1rem;
  color: #edf6f9;
  flex: 0 1 20%;

  background-color: #006d77;
  display: flex;
  flex-direction: ${(props) => props.pos[0] || "row"};
  justify-content: space-between;
  align-items: center;
`;

export const Menus = styled.ul`
  margin-left: auto;
  display: flex;
  flex-direction: ${(props) => props.pos};
  justify-content: flex-end;
  gap: 1rem;
`;
