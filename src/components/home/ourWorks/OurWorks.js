import React from "react";
import "./OurWorks.css";
import CaroSolOne from "../../../images/carousel-1.png";
import CaroSolTwo from "../../../images/carousel-2.png";
import CaroSolThree from "../../../images/carousel-3.png";
import CaroSolFour from "../../../images/carousel-4.png";
import CaroSolFive from "../../../images/carousel-5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ourWorks = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="our-work">
      <div className="container">
        <h3 className="text-center">
          Here are some of <span style={{ color: "#7AB259" }}>our works</span>
        </h3>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              <section className="regular slider">
                <div className="slider-img">
                  <img src={CaroSolOne} />
                </div>
                <div className="slider-img">
                  <img src={CaroSolTwo} />
                </div>
                <div className="slider-img">
                  <img src={CaroSolThree} />
                </div>
                <div className="slider-img">
                  <img src={CaroSolFour} />
                </div>
                <div className="slider-img">
                  <img src={CaroSolFive} />
                </div>
              </section>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourWorks;
