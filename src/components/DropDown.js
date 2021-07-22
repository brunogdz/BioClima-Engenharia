import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';


const DropDown = ({isOpen, toggle}) => {
    function raiseOnClick(){
        const url = 'https://api.whatsapp.com/send?phone=5527997871146&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AAs.%20';
        window.open(url, '_blank');
    }

    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button primary="true" round="true" big="true" to="" onClick={raiseOnClick}>
                        Contato
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}
const DropdownContainer = styled.div`
    position: fixed;
    z-index: 101;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
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

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const DropdownWrapper = styled.div`

`;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4,60px);
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000d1a;
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export default DropDown;
