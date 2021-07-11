import React from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';



const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">Bio Clima Engenharia</Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item,index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true'>Contato</Button>
            </NavBtn>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 1;
    position: fixed;
    width: 100%;
    background: #000;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-size: 24px;
`;

const MenuBars = styled.i`

`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    color: #fff;
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

export default Navbar;
