import React from 'react';
import './styles.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/feedbacks/feed1.jpg';
import image2 from '../../assets/feedbacks/feed2.jpg';
import image3 from '../../assets/feedbacks/feed3.jpg';
import image4 from '../../assets/feedbacks/feed4.jpg';
import { Avatar } from '@material-ui/core';
import { width } from '@material-ui/system';



const Feedback = () => {

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
        <div className="Feedback">
            <h1 style={{ fontFamily: "Cinzel, sans-serif", fontSize: "40px" }}>FeedBack</h1>
            <div className="box-info reveal" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: '50%' }}>
                    <Slider>
                        <Card
                            img={image1}
                            text="A avaliação de desempenho é chave para entregar feedback construtivo a gestores e colaboradores. Contudo, não saber o que dizer durante um processo de avaliação pode fazer que ele não seja aproveitado ao máximo. Nunca vi melhores!!"
                            name="Luciana Furtado"
                            company="Arcelor Mittal"
                        />
                        <Card
                            img={image2}
                            text="Ótimo serviço, superou minhas expectativas!"
                            name="Marcela Figueredo"
                            company="Vale"
                        />
                        <Card
                            img={image3}
                            text="Atendimento de ponta! Serviço rápido e de primeira qualidade! "
                            name="Eduardo Costa"
                            company="MRV - Grupo Engenharia"
                        />
                        <Card
                            img={image4}
                            text="Recomendo, simplesmente sem palavras! O melhor atendimento, equipe de primeira, muito atenciosa e superou minhas expectativas!"
                            name="Marcos Mion"
                            company="Palácio do Café"
                        />
                    </Slider>
                </div>


            </div>
        </div>
    );
}

const Card = (props) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "#242424",

        }}
        >
            <Avatar imgProps={{ style: { borderRadius: "50%" } }} src={props.img} style={{ width: 130, height: 130, border: "1px solido lightgray", padding: 5, }} />
            <p style={{
                fontStyle: "italic",
                fontWeight: 400,
                margin: "0 auto",
                marginTop: "18px",
                fontSize: "20px",
                fontFamily: "Lora, serif",
                lineHeight: "1.6em",
            }}
            >
                {props.text}
            </p>
            <p style={{
                color: "#191919",
                fontSize: "12px",
                fontWeight: "700",
                textAlign: "center",
                marginTop: "20px",
                textTransform: "uppercase",
                fontFamily: 'Montserrat, sans-serif',
            }}
            >
                <span style={{ fontWeight: 750, color: "#191919" }}>{props.name}</span> - {props.company}
            </p>
        </div>
    )

}

export default Feedback;
