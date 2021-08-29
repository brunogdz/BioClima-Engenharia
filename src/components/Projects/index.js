import React from 'react'
import './styles.css';
import Proj1 from '../../assets/projetos/projeto1.jpeg';
import Proj2 from '../../assets/projetos/projeto2.jpeg';
import Proj3 from '../../assets/projetos/projeto3.jpeg';

const Projects = () => {

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

    const ViewProject = () => {
        var popViews = document.querySelectorAll('.popup-view');
        var popupBtns = document.querySelectorAll('.popup-button');
        var closeBtn = document.querySelectorAll('.close-btn');

        var popup = function (popupClick) {
            popViews[popupClick].classList.add('active');

        }
        popupBtns.forEach((popupBtn, i) => {
            popupBtn.addEventListener("click", () => {
                popup(i);
            })
        });

        closeBtn.forEach((closeBt) => {
            closeBt.addEventListener("click", () => {
                popViews.forEach((popViews) => {
                    popViews.classList.remove('active')
                })
            })
        })
    }
    window.addEventListener('click', ViewProject)
    window.addEventListener('scroll', reveal)

    return (
        <div className="Project">
            <div className="Title">
                <h2>Nossos Projetos</h2>
            </div>
            <div className="Projects reveal">
                <div className="Project1">
                    <h3 className="name">Projeto 1</h3>
                    <a className="popup-button">Veja Mais</a>
                    {/* <img src={Proj1} atl="Projeto 1"/> */}
                </div>
                <div className="Project2">
                    <h3 className="name">Projeto 2</h3>
                    <a className="popup-button">Veja Mais</a>
                    {/* <img src={Proj2} atl="Projeto 1"/> */}
                </div>
                <div className="Project3">
                    <h3 className="name">Projeto 3</h3>
                    <a className="popup-button">Veja Mais</a>
                    {/* <img src={Proj3} atl="Projeto 1"/> */}
                </div>
                <div className="popup-view">
                    <div className="popup-card">
                        <a><i className="fas fa-times close-btn"></i></a>
                        <div className="project-img">
                            <img src={Proj1} alt="" />
                        </div>
                        <div className="info">
                            <h2>Projeto 1</h2>
                            <h3>Avenida B</h3>
                            <p>Projeto feito no prédio A, situado na Avenida B, o prédio possui novas implatações que colocamos aparelhos, motores, e muitas outras coisas</p>

                        </div>
                    </div>
                </div>
                <div className="popup-view">
                        <div className="popup-card">
                            <a><i className="fas fa-times close-btn"></i></a>
                            <div className="project-img">
                                <img src={Proj2} alt="" />
                            </div>
                            <div className="info">
                                <h2>Projeto 2</h2>
                                <h3>Avenida B</h3>
                                <p>Projeto feito no prédio A, situado na Avenida B, o prédio possui novas implatações que colocamos aparelhos, motores, e muitas outras coisas</p>

                            </div>
                        </div>
                    </div>
                    <div className="popup-view">
                        <div className="popup-card">
                            <a><i className="fas fa-times close-btn"></i></a>
                            <div className="project-img">
                                <img src={Proj3} alt="" />
                            </div>
                            <div className="info">
                                <h2>Projeto 3</h2>
                                <h3>Avenida B</h3>
                                <p>Projeto feito no prédio A, situado na Avenida B, o prédio possui novas implatações que colocamos aparelhos, motores, e muitas outras coisas</p>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Projects;