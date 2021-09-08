import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/computer.jpg';
import Image2 from '../../assets/Image1.jpg';
import Image3 from '../../assets/meeting.jpg';
import Image4 from '../../assets/industry.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled from 'styled-components';
const ImageSlider = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel
                width="100%"
                autoPlay showArrows={true}
                infiniteLoop={true}
                useKeyboardArrows={true}
                showStatus={false}
                showThumbs={false}

                transitionTime="500ms"
            >
                <div className="Img-Slide">
                    <LazyLoadImage alt="" effect="blur" height="100%" width="100%" src={Image1} />
                </div>
                <div className="Img-Slide">
                    <LazyLoadImage alt="" effect="blur" height="100%" width="100%" src={Image2} />
                </div>
                <div className="Img-Slide">
                    <LazyLoadImage alt="" effect="blur" height="100%" width="100%" src={Image3} />
                </div>
                <div className="Img-Slide">
                    <LazyLoadImage alt="" effect="blur" height="100%" width="100%" src={Image4} />
                </div>

            </Carousel>
        </div>

    )
}
const Image = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
object-fit: cover
`

export default ImageSlider;
