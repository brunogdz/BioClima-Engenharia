import './styles.css'
import Lottie from 'react-lottie';
import email from '../../assets/contact/email.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: email,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Contact = () => {
    return (
        <div className="Contact">
            <h2>Caso queira entrar em contato conosco! Será um prazer atendê-lo!</h2>
            <Lottie options={defaultOptions}
                height={300}
                width={300}
            >
            </Lottie>
            <div className="button">
                <a href="https://api.whatsapp.com/send/?phone=552712345678&text&app_absent=0" target={"_blank"}>
                    <p>Clique aqui</p>
                </a>
            </div>
        </div>
    )
}

export default Contact;