import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
        <Nav>
            <Logo>Bio Clima Engenharia</Logo>
            <MenuBars />
            <NavMenu>

            </NavMenu>
            <h1>Aqui é o nav</h1>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 60px;
    background: red;
`;
const Logo = styled(Link)`
    color: #fff;
`;

const MenuBars = styled.i`

`;

const NavMenu = styled.div`

`;


export default Navbar;
