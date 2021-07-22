import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'
import logo from '../assets/BioClima.svg'

const Navbar = ({ toggle }) => {

    function raiseOnClick() {
        const url = 'https://api.whatsapp.com/send?phone=5527997871146&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AAs.%20';
        window.open(url, '_blank');
    }

    return (
        <Nav>
            <Logo to="/">
                <img src={logo} alt="Bio Clima Engenharia" />
            </Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="" primary='true' onClick={raiseOnClick}>Contato</Button>
            </NavBtn>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #023e80;
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
    img{
        width: 50%;
        
    }
`;

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        color: #fff;
        height: 28px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        right: 32px;
        transform: translateY(-50%,25%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -48px; */

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
    color: #fff;
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export default Navbar;
