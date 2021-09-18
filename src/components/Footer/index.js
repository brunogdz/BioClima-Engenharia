import React from 'react'
import './styles.css'
import logoMarca from '../../assets/icon.png'
import email from '../../assets/redes sociais/email.png';
import facebook from '../../assets/redes sociais/facebook.png';
import linkD from '../../assets/redes sociais/linkedin.png';
import youtube from '../../assets/redes sociais/youtube.png';
import instagram from '../../assets/redes sociais/instagram.png';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-left">
                <img src={logoMarca} alt="Marca BioClima" />
                <p>Bio Clima Engenharia para todos os serviços, excelência em primeiro lugar!</p>

                <div className="social">
                    <a href="https://www.gmail.com" target="_blank"><img src={email} /></a>
                    <a href="https://www.facebook.com" target="_blank"><img src={facebook} /></a>
                    <a href="https://www.linkedin.com" target="_blank"><img src={linkD} /></a>
                    <a href="https://www.youtube.com" target="_blank"><img src={youtube} /></a>
                    <a href="https://www.instagram.com" target="_blank"><img src={instagram} /></a>
                </div>

            </div>

        </div>
    )
}

export default Footer;