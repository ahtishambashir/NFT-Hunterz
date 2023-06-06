import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CollectionBar() {
  var settings = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Top Collections</h3>
      </div>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Bottom Collections</h3>
      </div>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Top Collections</h3>
      </div>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Bottom Collections</h3>
      </div>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Top Collections</h3>
      </div>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Bottom Collections</h3>
      </div>
      <div className="collection-bar py-3 relative text-center">
        <h3 className="text-dark font-bold">Center Collections</h3>
      </div>
    </Slider>
  );
}
