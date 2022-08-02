import React from 'react'
import NavLinkMenu from '../../styles/menu/Menu__Link';

const menu = () => {
  return (
    <ul>
        <li>
            <NavLinkMenu to="/rick-and-morty" activeClassName="selected">Rick & Morty</NavLinkMenu>
            <NavLinkMenu to="/harry-potter" activeClassName="selected">Harry Potter</NavLinkMenu>
        </li>
    </ul>
  )
}

export default menu;