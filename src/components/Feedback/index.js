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
            <div className="box-info reveal">
                <Slider>
                    <Card img={image1} />
                    <Card img={image2} />
                    <Card img={image3} />
                    <Card img={image4} />
                </Slider>
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
        <div className="">
            <Avatar src={img} style={{ width: 130, height: 130, borderRadius: '50%',}} />
            <p>Gostei demais</p>
            <p>
                <span>Paula Gomes</span>, Consultora AMV
            </p>
        </div>
    )

}

export default Feedback;
