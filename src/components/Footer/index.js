import React from 'react'
import './styles.css'
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../../assets/logo.png';
import { FaFacebook, FaYoutubeSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'

import logoMarca from '../../assets/icon.png'
import email from '../../assets/redes sociais/email.png';
import facebook from '../../assets/redes sociais/facebook.png';
import linkD from '../../assets/redes sociais/linkedin.png';
import youtube from '../../assets/redes sociais/youtube.png';
import instagram from '../../assets/redes sociais/instagram.png';
import { orange } from '@material-ui/core/colors';



const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-left">
                <img src={logo} alt="Marca BioClima" />
                <p>Bio Clima Engenharia para todos os serviços, excelência em primeiro lugar!</p>

                <div className="social">
                    <a href="https://www.gmail.com" target="_blank"><AiOutlineMail color='orange' size={24} /></a>
                    <a href="https://www.facebook.com" target="_blank"><FaFacebook color='orange' size={24} /></a>
                    <a href="https://www.linkedin.com" target="_blank"><FaLinkedin color='orange' size={24} /></a>
                    <a href="https://www.youtube.com" target="_blank"><FaYoutubeSquare color='orange' size={24} /></a>
                    <a href="https://www.instagram.com" target="_blank"><FaInstagramSquare color='orange' size={24} /></a>
                </div>

            </div>
            <div className="footer-right">
                <li>
                    <h2>Atalhos</h2>
                    <ul className="box">
                        <li><Link spy={true} to="About">Sobre nós</Link></li>
                        <li><Link spy={true} to="Projects">Projetos</Link></li>
                        <li><Link spy={true} to="Work">Trabalhos</Link></li>
                        <li><Link spy={true} to="Footer">Contato</Link></li>
                    </ul>
                </li>
                <li className="services">
                    <h2>Serviços</h2>
                    <ul className="box">
                        <li>Tubulações</li>
                        <li>Modelagem 3D</li>
                        <li>Infraestrutura</li>
                        <li>Ventilação</li>
                        <li>Termo estática</li>
                    </ul>
                </li>
                <li className="final">
                    <h2>Endereço</h2>
                    <ul className="box">
                        <li>RUA CHOPIN</li>
                        <li>BARRO VERMELHO</li>
                        <li>VITORIA-ES</li>
                        <li>bioclimaengenharia@gmail.com</li>
                    </ul>
                </li>
            </div>
        </div>
    )
}

export default Footer;