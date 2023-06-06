import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionImg from "../../../assets/images/collection-img.jpg";
import AvatarImg from "../../../assets/images/avatar-collection.png";
import ArrowNext from "../../../assets/images/arrow.png";

export default function CollectionSlider() {
  function SampleNextArrow(props) {
    const { collectionSliderArrow, style, onClick } = props;
    return (
      <div
        className="collectionSliderArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <span>
          <img src={ArrowNext} />
        </span>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { collectionSliderArrowPrev, style, onClick } = props;
    return (
      <div
        className="collectionSliderArrowPrev"
        style={{ ...style }}
        onClick={onClick}
      >
        <span>
          <img src={ArrowNext} />
        </span>
      </div>
    );
  }
  var settings = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
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
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="collection-content relative h-72 rounded-3xl">
        <img className="absolute h-full rounded-3xl" src={CollectionImg} />
        <div className="collection-text absolute bottom-0 px-6 py-2">
          <h3 className="text-white font-bold">House of Theorem</h3>
          <div className="collection-text-inner flex gap-2">
            <img className="w-8" src={AvatarImg} />
            <span className="text-white">@loremipsum</span>
          </div>
        </div>
      </div>
      <div className="collection-content relative h-72 rounded-3xl">
        <img className="absolute h-full rounded-3xl" src={CollectionImg} />
        <div className="collection-text absolute bottom-0 px-6 py-2">
          <h3 className="text-white font-bold">House of Theorem</h3>
          <div className="collection-text-inner flex gap-2">
            <img className="w-8" src={AvatarImg} />
            <span className="text-white">@loremipsum</span>
          </div>
        </div>
      </div>
      <div className="collection-content relative h-72 rounded-3xl">
        <img className="absolute h-full rounded-3xl" src={CollectionImg} />
        <div className="collection-text absolute bottom-0 px-6 py-2">
          <h3 className="text-white font-bold">House of Theorem</h3>
          <div className="collection-text-inner flex gap-2">
            <img className="w-8" src={AvatarImg} />
            <span className="text-white">@loremipsum</span>
          </div>
        </div>
      </div>
      <div className="collection-content relative h-72 rounded-3xl">
        <img className="absolute h-full rounded-3xl" src={CollectionImg} />
        <div className="collection-text absolute bottom-0 px-6 py-2">
          <h3 className="text-white font-bold">House of Theorem</h3>
          <div className="collection-text-inner flex gap-2">
            <img className="w-8" src={AvatarImg} />
            <span className="text-white">@loremipsum</span>
          </div>
        </div>
      </div>
      <div className="collection-content relative h-72 rounded-3xl">
        <img className="absolute h-full rounded-3xl" src={CollectionImg} />
        <div className="collection-text absolute bottom-0 px-6 py-2">
          <h3 className="text-white font-bold">House of Theorem</h3>
          <div className="collection-text-inner flex gap-2">
            <img className="w-8" src={AvatarImg} />
            <span className="text-white">@loremipsum</span>
          </div>
        </div>
      </div>
      <div className="collection-content relative h-72 rounded-3xl">
        <img className="absolute h-full rounded-3xl" src={CollectionImg} />
        <div className="collection-text absolute bottom-0 px-6 py-2">
          <h3 className="text-white font-bold">House of Theorem</h3>
          <div className="collection-text-inner flex gap-2">
            <img className="w-8" src={AvatarImg} />
            <span className="text-white">@loremipsum</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}
