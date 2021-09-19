import { FiPlayCircle } from 'react-icons/fi';
import './styles.css'

const VideoSection = () => {
    return (
        <div className="VideoSection">
            <div className="black-opacity" />
            <div className="content">
                <p>Trabalhando desde 2001</p>
                <h2>Somos lider em <br /> Automação Industrial</h2>
                <div className="content-video">
                    {/* <a href="https://www.youtube.com/embed/tlUcmD0zPI4"> */}
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" target="_blank">
                        <FiPlayCircle className="content-video-icon" color={"#f2d046"} size={38} />
                    </a>

                    <p>Assista essa intro <br /> e nos conheça</p>
                    {/* <div id="#videoshow" className="video-hide">
                        <iframe width="720" height="480" src="https://www.youtube.com/embed/ZJ2tcji7O64?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default VideoSection;