import React from 'react';
import './styles.css';
import trab1 from '../../assets/work/trab1.jpeg';
import trab2 from '../../assets/work/trab2.jpeg';
import trab3 from '../../assets/work/trab3.jpeg';
import trab4 from '../../assets/work/trab4.jpeg';
import trab5 from '../../assets/work/trab5.jpeg';
import trab6 from '../../assets/work/trab6.jpeg';

const Work = () => {

    const reveal = () => {
        var reveals = document.querySelectorAll('.reveal')

        for (var i = 0; i < reveals.length; i++) {
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('active');
                // }else{
                //     reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal) 

    return (
        <div className="Work reveal">
            <div className="container">
                <div className="Textos">
                    <h1>Com o que trabalhamos</h1>
                    <div className="sub-text">
                        <p>Trabalhamos com excelência, queremos mostrar aqui um pouco do que fazemos e com o que trabalhamos, lembrando que todos os serviços são todos consultados e revisados e com total segurança.</p>
                    </div>
                </div>
                <div className="Tipos">
                    <div className="service col-md-4 col-sm-6 col-xs-12">
                        <div className="content">
                            <div className="image">
                                <a href="#">
                                    <img src={trab1} />
                                </a>
                            </div>
                            <h2>Tubulações</h2>
                        </div>
                    </div>
                    <div className="service col-md-4 col-sm-6 col-xs-12">
                        <div className="content">
                            <div className="image">
                                <a href="#">
                                    <img src={trab2} />
                                </a>
                            </div>
                            <h2>Modelagem 3D</h2>
                        </div>
                    </div>
                    <div className="service col-md-4 col-sm-6 col-xs-12">
                        <div className="content">
                            <div className="image">
                                <a href="#">
                                    <img src={trab3} />
                                </a>
                            </div>
                            <h2>Infraestrutura</h2>
                        </div>
                    </div>
                    <div className="service col-md-4 col-sm-6 col-xs-12">
                        <div className="content">
                            <div className="image">
                                <a href="#">
                                    <img src={trab4} />
                                </a>
                            </div>
                            <h2>Tubulações</h2>
                        </div>
                    </div>
                    <div className="service col-md-4 col-sm-6 col-xs-12">
                        <div className="content">
                            <div className="image">
                                <a href="#">
                                    <img src={trab5} />
                                </a>
                            </div>
                            <h2>Ventilação</h2>
                        </div>
                    </div>
                    <div className="service col-md-4 col-sm-6 col-xs-12">
                        <div className="content">
                            <div className="image">
                                <a href="#">
                                    <img src={trab6} />
                                </a>
                            </div>
                            <h2>Termo estática</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;