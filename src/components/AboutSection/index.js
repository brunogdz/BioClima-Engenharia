import React from 'react'
import './styles.css'
import Image1 from '../../assets/about1.jpg';
import Image2 from '../../assets/about2.jpg';
const About = () => {

    // const [reveal, setReveal] = useState(false);

    const reveal = () => {
        var reveals = document.querySelectorAll('.reveal')

        for( var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            // }else{
            //     reveals[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', reveal)

    return (
        <div className="About">
            <div className="About-Separator">
                <h2 className="title">A Bio Clima Engenharia agradece a sua visita!</h2>
            </div>
            <div className="About-Informations reveal">
                <div className="Text">
                    <h2>A nossa História</h2>
                    <p>Toda a história humana prova que desde o dia em que Eva comeu a maçã, a felicidade do faminto homem pecador depende em grande parte do almoço.</p>
                    <p>Uma boa maneira de reconhecer os méritos de uma profissão é exercitar seu pensamento e imaginar como seria a sociedade caso ela não existisse. Então, vamos lá?! Caso não houvesse engenheiro civil provavelmente o planejamento elétrico e hidráulico da sua residência não poderia ser feito. Ou mais, sua residência também não iriar existir. Além disso, as ruas, o serviço de esgoto, as pontes e até mesmo a comunicação estariam ameaçados caso não houvesse essa atividade.</p>
                    <p>O clima é o conjunto de fenômenos associados às variações do tempo da atmosfera terrestre em um determinado local. Geralmente, o seu conceito aparece em oposição à ideia de “tempo”, que seria o estado momentâneo da atmosfera. Portanto, para se conhecer um clima de um dado lugar, é preciso vários anos de estudos e observações para, finalmente, estabelecer a conclusão sobre um determinado tipo climático.</p>
                </div>
                <div className="Images reveal">
                    <div className="image1">
                        <img src={Image1} alt="" />
                    </div>
                    <div className="image2">
                        <img src={Image2} alt="" />
                    </div>
                </div>
            </div>
            {/* <img src={Image} alt="" className="About-image" /> */}
        </div>
    )
}

export default About;
