import React from 'react';
import { NavBar, NavBarItemsList, NavBarListItem } from './styled';
import Icon from '../icons';

const navBarData = [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }];

function Navigation() {
  return (
    <>
      <NavBar>
        <Icon name='logo' />
        <NavBarItemsList>
          {navBarData.map(({ name }, index) => (
            <NavBarListItem key={index}>{name}</NavBarListItem>
          ))}
        </NavBarItemsList>
      </NavBar>
    </>
  );
}

export default Navigation;
