import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroImg from "../../../assets/images/hero-img.png";
import HeroImg2 from "../../../assets/images/hero-banner-image.png";
import ArrowNext from "../../../assets/images/arrow.png";
import Brush from "../../../assets/images/brush.png";

export default function LandingHeroSlider() {
  function SampleNextArrow(props) {
    const { heroSliderArrows, style, onClick } = props;
    return (
      <div
        className="heroSliderArrows cursor-pointer"
        // style={{ ...style }}
        onClick={onClick}
      >
        <span className="text-white">Next Slide</span>{" "}
        <div className="rounded-full border border-white block">
          <img src={ArrowNext} />
        </div>
      </div>
    );
  }
  var settings = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <Slider {...settings}>
      <div className="hero-slide">
        <h4 className="text-white opacity-80 pt-4">new NFT</h4>
        <div className="hero-content flex justify-center items-center hero-banner-height">
          <div className="lg:w-1/2 w-full pl-4">
            <h2 className="lg:text-7xl text-3xl lg:leading-tight text-white font-bold relative">
              <img className="absolute w-80 -z-10 -top-1" src={Brush} />
              Discover, <br />
              browse and list new NFTs{" "}
            </h2>

            <p className="text-white opacity-80 lg:w-1/2 w-full pt-6 leading-5">
              NFTHunterz is the all things NFT portal where you can find new and
              upcoming collection
            </p>
          </div>
          <div className="w-1/2 lg:block hidden">
            <img className="ml-auto w-3/4" src={HeroImg2} alt="" />
          </div>
        </div>
        <h4 className="text-white opacity-80 pt-4">NFT marketplace</h4>
      </div>
      <div className="hero-slide">
        <h4 className="text-white font-thin">Popular collections</h4>
        <div className="hero-content flex justify-center items-center hero-banner-height">
          <div className="lg:w-1/2 w-full pl-4">
            <h2 className="lg:text-7xl text-3xl lg:leading-tight text-white font-bold">
              List new and <br />
              already popular
              <br />
              <span className="text-orange-500">collection</span>
            </h2>
            <p className="text-white opacity-80 lg:w-1/2 w-full py-8 leading-5">
              Got your own collection or missing some popular one? Contact us
              and we will list it in NFTHunterz!
            </p>
            <button className="bg-orange-500 lg:w-1/3 mb-2 text-center mr-4 py-2 px-3 rounded-full font-bold">
              Add collection
            </button>
            <button className="bg-transparent lg:w-1/3 text-center py-2 px-3 rounded-full text-white border-amber-500 border active:border-amber-500">
              Offer a collection
            </button>
          </div>
          <div className="w-1/2 lg:block hidden">
            <img className="ml-auto w-3/4" src={HeroImg} alt="" />
          </div>
        </div>
        <h4 className="text-white opacity-80 pt-4">NFT marketplace</h4>
      </div>
      <div className="hero-slide">
        <h4 className="text-white opacity-80 pt-4">NFT merch</h4>
        <div className="hero-content flex justify-center items-center hero-banner-height">
          <div className="lg:w-1/2 w-full pl-4">
            <h2 className="lg:text-7xl text-3xl lg:leading-tight text-white font-bold">
              Sell your own <br />
              NFT merch{" "}
            </h2>
            <p className="text-white opacity-80 lg:w-1/2 w-full py-8 leading-5">
              Watch how Nfts from your own collections are brought into the real
              world with our Merch Portal. Contact us for details!
            </p>
            <button className="bg-orange-500 lg:w-1/3 text-center mr-4 py-2 px-3 rounded-full font-bold">
              Add
            </button>
          </div>
          <div className="w-1/2 lg:block hidden">
            <img className="ml-auto w-3/4" src={HeroImg} alt="" />
          </div>
        </div>
        <h4 className="text-white opacity-80 pt-4">NFT marketplace</h4>
      </div>
    </Slider>
  );
}
