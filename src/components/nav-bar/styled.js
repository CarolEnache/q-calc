import styled from 'styled-components';

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 40px;
    margin-left: 10px;
  }
`;

export const NavBarItemsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 20%;
  padding: 0;
  margin: 0;
`;

export const NavBarListItem = styled.li`
  padding: 15px;
  border-bottom: 6px solid transparent;

  &:hover {
    border-bottom: 6px solid rgb(83, 183, 0);
  }
`;
