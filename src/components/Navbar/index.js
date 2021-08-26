/**
 * BIBLIOTECAS
 */
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

/**
 * IMAGENS
 */
import logo from '../../assets/logo.svg'

/**
 * CSS
 */
import './styles.css'
import styled from 'styled-components';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    // function toggleMenu(){
    //     const menuToggle = document.querySelector('.menuToggle');
    //     const navigation = document.querySelector('.navigation');
    //     menuToggle.classList.toggle('active');
    // }
    const changeBackground = () => {
        // console.log(window.scrollY)
        if(window.scrollY >= 90){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <Link offset={50} onClick={scrollToTop}>
                <img href="/" src={logo} className="logo"></img>
            </Link>

            {/* <div className="MenuBars" onClick={toggle} /> */}
            <MenuBars className="menuToggle" onClick={toggle} />
            <DropdownContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <DropdownMenu>
                    <ul className="navigation">
                        <li><Link spy={true} to="About">Sobre nós</Link></li>
                        <li><a onClick={() => scroll.scrollTo(750)}>Trabalhos</a></li>
                        <li><a href="#project">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </DropdownMenu>
            </DropdownContainer>
            <ul className="navigation">
                <li><a onClick={() => scroll.scrollTo(850)}>Sobre nós</a></li>
                <li><a onClick={() => scroll.scrollTo(850)}>Trabalhos</a></li>
                <li><a href="#project">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </div>
    )
}

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        color: #fff;
        height: 28px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        right: 32px;
        transform: translateY(-50%,25%);
    }
`
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 101;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`;

const DropdownMenu = styled.div`
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem; */
    
    
    
    .navigation {
        display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem;
        
        li {
                a {
                text-decoration: none;
                color: black;
            }
        }
    }

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4,60px);
    }
`;

export default Navbar;