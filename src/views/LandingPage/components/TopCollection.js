import collectionicon from "../../../assets/images/collection-image.png";
import arrowicon from "../../../assets/images/select-arrow.png";
import { useState, useEffect } from "react";
export default function ToPCollections() {

  const collectionFilters = [
    { value: "one-day", label: "in 1 Day" },
    { value: "two-days", label: "in 2 Days" },
    { value: "three-days", label: "in 3 Days" },
    { value: "four-days", label: "in 4 Days" },
    { value: "five-days", label: "in 5 Days" },
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

  return (
    <>
      <section className="top-collection lg:py-20 py-10 xs:mt-8 mt-0">
        <div className="">
          <div className="flex items-baseline pb-10 gap-5">
            <div>
              <h2 className="text-white font-bold lg:text-5xl text-3xl  pl-5 lg:pl-0">
                Top Collection
              </h2>
            </div>
            <div className="relative">
              <a className=" cursor-pointer">
                <div id="collection-filter-menu" className=" flex gap-2 items-center">
                  <span className="text-orange-500 md:text-2xl text-xl font-semibold leading-4">
                    {collectionFilter}
                  </span>
                  <span>
                    <img src={arrowicon} alt="" className={dropdownPopoverShow ? "menu-collapse-icon" : "menu-expand-icon"} />
                  </span>
                </div>
              </a>
              <div
                className={(dropdownPopoverShow ? "block " : "hidden ") + "text-white drop-down-custom-collection"}
              >
                <ul className="p-3">
                  {collectionFilters.map((item) => <li name={item.value} onClick={onCollectionFilterSelect} className="pb-3 text-base font-semibold cursor-pointer">
                    {item.label}
                  </li>)}
                </ul>
              </div>
            </div>

          </div>
          <div className="xl:p-16 p-8 collection-main flex flex-wrap rounded-2xl lg:justify-center">
            <div className="xl:basis-1/3 lg:basis-3/6 md:bas">
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">1</p>
                  <img src={collectionicon} alt="" />
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
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">2</p>
                  <img src={collectionicon} alt="" />
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
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">3</p>
                  <img src={collectionicon} alt="" />
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
            <div className="xl:basis-1/3 lg:basis-3/6">
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">4</p>
                  <img src={collectionicon} alt="" />
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
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">5</p>
                  <img src={collectionicon} alt="" />
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
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">6</p>
                  <img src={collectionicon} alt="" />
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
            <div className="xl:basis-1/3 lg:basis-3/6">
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">7</p>
                  <img src={collectionicon} alt="" />
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
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">8</p>
                  <img src={collectionicon} alt="" />
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
              <div className="collection-item flex gap-4 items-center pb-10">
                <div className="flex justify-between items-center">
                  <p className="text-white opacity-70 text-xs pr-4">9</p>
                  <img src={collectionicon} alt="" />
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
          </div>
        </div>
      </section>
    </>
  );
}
