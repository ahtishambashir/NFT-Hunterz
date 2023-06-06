import image from "../../../assets/images/collection-image.png";
import ArrowNext from "../../../assets/images/arrow.png";
import arrowicon from "../../../assets/images/select-arrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function CollectionSlider() {
  // collection drop down 
  const collectionFilters = [
    { value: "Collections", label: "Collections" },
    { value: "today-Collections", label: "Today Collections" },
    { value: "yesterday-collections", label: "Yesterday Collections" },
  ]


  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const [collectionFilter, setCollectionFilter] = useState(collectionFilters[0].label)

  const closeDropdownPopover = () => setDropdownPopoverShow(false);
  const openDropdownPopover = () => setDropdownPopoverShow(true);

  const toggleDropdownPopover = (e) => {
    if (e.target.closest("#collection-filter-menu")) {
      if (dropdownPopoverShow) closeDropdownPopover();
      else openDropdownPopover();
    } else if (!e.target.closest("#collection-filter-menu") && dropdownPopoverShow) {
      closeDropdownPopover();
    }
  };

  useEffect(() => {
    window.addEventListener("click", toggleDropdownPopover);
    return () => {
      window.removeEventListener("click", toggleDropdownPopover);
    };
  });

  const onCollectionFilterSelect = (e) => {
    const filterValue = e.currentTarget.attributes['name'].value
    const selected = collectionFilters.find((item) => item.value === filterValue)
    if (selected) setCollectionFilter(selected.label)
  }










  // days drop down 
  const daysFilters = [
    { value: "one-day", label: "in 1 Day" },
    { value: "two-days", label: "in 2 Days" },
    { value: "three-days", label: "in 3 Days" },
    { value: "four-days", label: "in 4 Days" },
    { value: "five-days", label: "in 5 Days" },
  ]


  const [daysDropdownPopoverShow, setDaysDropdownPopoverShow] = useState(false)
  const [daysFilter, setDaysFilter] = useState(daysFilters[0].label)

  const daysCloseDropdownPopover = () => setDaysDropdownPopoverShow(false);
  const daysOpenDropdownPopover = () => setDaysDropdownPopoverShow(true);

  const daysToggleDropdownPopover = (e) => {
    if (e.target.closest("#days-filter-menu")) {
      if (daysDropdownPopoverShow) daysCloseDropdownPopover();
      else daysOpenDropdownPopover();
    } else if (!e.target.closest("#days-filter-menu") && daysDropdownPopoverShow) {
      daysCloseDropdownPopover();
    }
  };

  useEffect(() => {
    window.addEventListener("click", daysToggleDropdownPopover);
    return () => {
      window.removeEventListener("click", daysToggleDropdownPopover);
    };
  });

  const onDaysFilterSelect = (e) => {
    const daysFilterValue = e.currentTarget.attributes['name'].value
    const daysSelected = daysFilters.find((item) => item.value === daysFilterValue)
    if (daysSelected) setDaysFilter(daysSelected.label)
  }


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
    autoplay: false,
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
    <>
      <section className="lg:px-20 px-3 lg:py-20 py-10 xs:mt-8 mt-0">
        <div className="flex lg:justify-between lg:items-center flex-wrap pb-16">
          <div className="flex items-center">
            <div className="text-white font-bold lg:text-5xl text-3xl mb-6 lg:mb-0 pl-5 lg:pl-0 flex items-center gap-3">
              Top{" "}
              <div className="relative">
                <a className=" cursor-pointer">
                  <div id="collection-filter-menu" className=" flex gap-2 items-end">
                    <span className="text-orange-500 lg:text-3xl text-base font-semibold leading-4">
                      {collectionFilter}
                    </span>
                    <span>
                      <FaAngleDown className={dropdownPopoverShow ? "menu-collapse-icon w-6 text-orange-500 lg:text-3xl text-base" : "menu-expand-icon w-6 text-orange-500 lg:text-3xl text-base"} />
                    </span>
                  </div>
                </a>
                <div
                  className={(dropdownPopoverShow ? "block " : "hidden ") + "text-white drop-down-custom"}
                >
                  <ul className="p-3">
                    {collectionFilters.map((item) => <li name={item.value} onClick={onCollectionFilterSelect} className="pb-3 text-base font-semibold cursor-pointer">
                      {item.label}
                    </li>)}
                  </ul>
                </div>
              </div>
              in{" "}
              {/* <span className="text-orange-500 lg:text-4xl text-base">
                1 day
              </span> */}
              <div className="relative">
                <a className=" cursor-pointer">
                  <div id="days-filter-menu" className=" flex gap-2 items-end">
                    <span className="text-orange-500 lg:text-3xl text-base font-semibold leading-4">
                      {daysFilter}
                    </span>
                    <span>
                      <FaAngleDown className={daysDropdownPopoverShow ? "menu-collapse-icon w-6 lg:text-3xl text-base text-orange-500" : "menu-expand-icon w-6 lg:text-3xl text-base text-orange-500"} />
                    </span>
                  </div>
                </a>
                <div
                  className={(daysDropdownPopoverShow ? "block " : "hidden ") + "text-white drop-down-custom-collection"}
                >
                  <ul className="p-3">
                    {daysFilters.map((item) => <li name={item.value} onClick={onDaysFilterSelect} className="pb-3 text-base font-semibold cursor-pointer">
                      {item.label}
                    </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-transparent mb-4 lg:mb-0 ml-5 lg:ml-0 text-center px-10 py-2 rounded-full text-white border-amber-500 border active:border-amber-500">
            See all
          </button>
        </div>
        <Slider {...settings}>
          <div className="">
            <div className="collection-item flex gap-4 items-center pb-10">
              <div className="flex justify-between items-center">
                <p className="text-white opacity-70 text-xs pr-4">1</p>
                <img className="rounded-full" src={image} alt="" />
              </div>
              <div>
                <h3 className="text-white text-1xl font-bold pb-3">
                  House of Theorem
                </h3>
                <div className="flex justify-between">
                  <span className="text-white opacity-70 text-xs">
                    1.4296ETN
                  </span>
                  <span className="text-green-400 text-xs">+10.3%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="collection-item flex gap-4 items-center pb-10">
              <div className="flex justify-between items-center">
                <p className="text-white opacity-70 text-xs pr-4">1</p>
                <img className="rounded-full" src={image} alt="" />
              </div>
              <div>
                <h3 className="text-white text-1xl font-bold pb-3">
                  House of Theorem
                </h3>
                <div className="flex justify-between">
                  <span className="text-white opacity-70 text-xs">
                    1.4296ETN
                  </span>
                  <span className="text-green-400 text-xs">+10.3%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="collection-item flex gap-4 items-center pb-10">
              <div className="flex justify-between items-center">
                <p className="text-white opacity-70 text-xs pr-4">1</p>
                <img className="rounded-full" src={image} alt="" />
              </div>
              <div>
                <h3 className="text-white text-1xl font-bold pb-3">
                  House of Theorem
                </h3>
                <div className="flex justify-between">
                  <span className="text-white opacity-70 text-xs">
                    1.4296ETN
                  </span>
                  <span className="text-green-400 text-xs">+10.3%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="collection-item flex gap-4 items-center pb-10">
              <div className="flex justify-between items-center">
                <p className="text-white opacity-70 text-xs pr-4">1</p>
                <img className="rounded-full" src={image} alt="" />
              </div>
              <div>
                <h3 className="text-white text-1xl font-bold pb-3">
                  House of Theorem
                </h3>
                <div className="flex justify-between">
                  <span className="text-white opacity-70 text-xs">
                    1.4296ETN
                  </span>
                  <span className="text-green-400 text-xs">+10.3%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="collection-item flex gap-4 items-center pb-10">
              <div className="flex justify-between items-center">
                <p className="text-white opacity-70 text-xs pr-4">1</p>
                <img className="rounded-full" src={image} alt="" />
              </div>
              <div>
                <h3 className="text-white text-1xl font-bold pb-3">
                  House of Theorem
                </h3>
                <div className="flex justify-between">
                  <span className="text-white opacity-70 text-xs">
                    1.4296ETN
                  </span>
                  <span className="text-green-400 text-xs">+10.3%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="collection-item flex gap-4 items-center pb-10">
              <div className="flex justify-between items-center">
                <p className="text-white opacity-70 text-xs pr-4">1</p>
                <img className="rounded-full" src={image} alt="" />
              </div>
              <div>
                <h3 className="text-white text-1xl font-bold pb-3">
                  House of Theorem
                </h3>
                <div className="flex justify-between">
                  <span className="text-white opacity-70 text-xs">
                    1.4296ETN
                  </span>
                  <span className="text-green-400 text-xs">+10.3%</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
}
