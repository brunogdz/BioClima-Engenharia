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
            <h1>FeedBack</h1>
            <div className="box-info reveal" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: '50%' }}>
                    <Slider>
                        <Card img={image1} />
                        <Card img={image2} />
                        <Card img={image3} />
                        <Card img={image4} />
                    </Slider>
                </div>

                {/* <ul className="control" id="custom-control">
                    <li class="prev">
                        <i className="fas fa-angle-left fa-2x"></i>
                    </li>
                    <li class="next">
                        <i className="fas fa-angle-right fa-2x"></i>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}

const Card = ({ img }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "#242424",

        }}
        >
            <Avatar imgProps={{ style: { borderRadius: "50%" } }} src={img} style={{ width: 130, height: 130, border: "1px solido lightgray", padding: 5, }} />
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
                A avaliação de desempenho é chave para entregar feedback construtivo a gestores e colaboradores. Contudo, não saber o que dizer durante um processo de avaliação pode fazer que ele não seja aproveitado ao máximo. Nunca vi melhores!!</p>
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
                <span style={{ fontWeight: 750, color: "#191919" }}>Paula Gomes</span>, Consultora AMV
            </p>
        </div>
    )

}

export default Feedback;
