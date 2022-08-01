import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavLinkMenu = styled(NavLink)`
    color: #a3a3a3;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    margin-right: 15px;
    &.${props => props.activeClassName} {
        color: #fff;
    }
`

export default NavLinkMenu;
