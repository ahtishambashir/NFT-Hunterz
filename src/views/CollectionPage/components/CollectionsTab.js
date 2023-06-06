import filterIcon from "../../../assets/images/filter-icon.png";
import arrowOpen from "../../../assets/images/arrow-open.png";
import arrowClose from "../../../assets/images/arrow-close.png";
import collectionImage from "../../../assets/images/collection-rsult-card-image.png";
import collectionImageLocation from "../../../assets/images/location-collection-card.png";
import collectionImagetop from "../../../assets/images/collection-top-image.png";
import collectionSearchIcon from "../../../assets/images/search-icon-collection-filter.png";
import traitsImageOne from "../../../assets/images/traits-image-one.png";
import traitsImageTwo from "../../../assets/images/traits-image-two.png";
import traitsImageThree from "../../../assets/images/traits-image-three.png";
import activityChartImage from "../../../assets/images/activity-chart-image.png";
import { Tab } from "@headlessui/react";
import React from "react";
import Collapsible from "react-collapsible";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import AnalyticsTable from "../../AnalyticsPage/components/AnalyticsTable";
import { useState, useEffect } from "react";
import arrowicon from "../../../assets/images/select-arrow.png";
import { FaAngleDown } from "react-icons/fa";


export default function CollectionTabs() {
  const [openTab, setOpenTab] = React.useState(1);
  const [collapse, setCollapse] = React.useState(false);

  const toggle = () => setCollapse(!collapse);
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
    if (e.target.closest("#collection-filter-menu-one")) {
      if (dropdownPopoverShow) closeDropdownPopover();
      else openDropdownPopover();
    } else if (!e.target.closest("#collection-filter-menu-one") && dropdownPopoverShow) {
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

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-10 list-none collection-tab-list flex-wrap pt-3 flex-row mx-10 bg-transparent justify-center"
            role="tablist"
          >
            <li className="-mb-px text-center">
              <a
                className={
                  "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 " +
                  (openTab === 1 ? "active-tab" : "")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                View Collection
              </a>
            </li>
            <li className="-mb-px text-center">
              <a
                className={
                  "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 " +
                  (openTab === 2 ? "active-tab" : "")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Explore traits
              </a>
            </li>
            <li className="-mb-px text-center">
              <a
                className={
                  "sm:text-base text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 " +
                  (openTab === 3 ? "active-tab" : "")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Activity
              </a>
            </li>
            <li className="-mb-px text-center">
              <a
                className={
                  "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 " +
                  (openTab === 4 ? "active-tab" : "")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                My Wallet
              </a>
            </li>
          </ul>
          <div className="collection-main relative bg-transparent flex lg:mx-10 mx-3">
            <nav
              className={`sidebar relative ${collapse ? "" : "active-sidebar"}`}
            >
              <button
                className={collapse ? "collapsed-sidebar" : "expand-sidebar"}
                onClick={toggle}
              >
                <img
                  className="w-full"
                  src={collapse ? arrowOpen : arrowClose}
                  alt=""
                />
              </button>
              <div hidden={collapse}>
                <div className="sidebar-header flex justify-between mx-4 py-4 border-b border-gray-300">
                  <h4 className="flex items-center gap-2">
                    <span className="text-white text-lg font-bold">Filter</span>
                    <span className="cursor-pointer">
                      <img className="w-4" src={filterIcon} alt="" />
                    </span>
                  </h4>
                </div>
                <div className="drop-downs-filter mx-4 pt-6">
                  <Collapsible
                    className="accordian-header mb-4"
                    trigger="Price range"
                  >
                    <input
                      className="w-full rounded-3xl mb-2 bg-transparent"
                      type="text"
                      placeholder="10"
                    />
                    <input
                      className="w-full rounded-3xl mb-4 bg-transparent"
                      type="text"
                      placeholder="10"
                    />
                    <div className="flex justify-around gap-4 btn-div flex-wrap">
                      <button className="rounded-3xl bg-gray-600/20 text-white text-base font-semibold px-5 py-2">
                        clear
                      </button>
                      <button className="rounded-3xl text-black text-base font-semibold px-5 py-2">
                        Apply
                      </button>
                    </div>
                  </Collapsible>
                  <Collapsible
                    className="accordian-header mb-4"
                    trigger="Listing type"
                  >
                    <input
                      className="w-full rounded-3xl mb-2 bg-transparent"
                      type="text"
                      placeholder="10"
                    />
                    <input
                      className="w-full rounded-3xl mb-4 bg-transparent"
                      type="text"
                      placeholder="10"
                    />
                    <div className="flex justify-around gap-4 btn-div flex-wrap">
                      <button className="rounded-3xl bg-gray-600/20 text-white text-base font-semibold px-5 py-2">
                        clear
                      </button>
                      <button className="rounded-3xl text-black text-base font-semibold px-5 py-2">
                        Apply
                      </button>
                    </div>
                  </Collapsible>
                  <Collapsible
                    className="accordian-header mb-4"
                    trigger="Trait filtera"
                  >
                    <input
                      className="w-full rounded-3xl mb-2 bg-transparent"
                      type="text"
                      placeholder="10"
                    />
                    <input
                      className="w-full rounded-3xl mb-4 bg-transparent"
                      type="text"
                      placeholder="10"
                    />
                    <div className="flex justify-around gap-4 btn-div flex-wrap">
                      <button className="rounded-3xl bg-gray-600/20 text-white text-base font-semibold px-5 py-2">
                        clear
                      </button>
                      <button className="rounded-3xl text-black text-base font-semibold px-5 py-2">
                        Apply
                      </button>
                    </div>
                  </Collapsible>
                </div>
              </div>
            </nav>
            <div
              className={`relative ${collapse ? "" : "active-nav"
                } collection-content flex flex-col min-w-0 break-words bg-transparent w-full mb-6`}
            >
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="top-bar flex flex-col sm:flex-row  justify-between flex-wrap">
                      <div className="relative mb-3 md:mb-0">
                        <input
                          className="rounded-3xl lg:w-60 sm:w-44 w-full bg-transparent pl-9 outline-none"
                          type="text"
                          placeholder="ID"
                        />
                        <span className="absolute top-4 left-4">
                          <img
                            className="w-3 opacity-70"
                            src={collectionSearchIcon}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="flex gap-3 md:mt-3">
                        <div className="relative bg-black text-white py-2 px-4 text-sm flex items-center gap-3 rounded-3xl border border-gray-300/70">
                          Sort by:{" "}
                          <div className="relative">
                            <a className=" cursor-pointer">
                              <div id="collection-filter-menu-one" className=" flex gap-2 items-center">
                                <span className="text-orange-500 text-sm">
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
                                {collectionFilters.map((item) => <li name={item.value} onClick={onCollectionFilterSelect} className="pb-3 text-sm cursor-pointer">
                                  {item.label}
                                </li>)}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="relative bg-black collection-search flex items-center gap-3 rounded-3xl border-0"></div>
                      </div>
                    </div>
                    <div className="flex flex-wrap mt-8 filters-resluts gap-10">
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="filters-cards relative rounded-xl">
                        <img className="w-full" src={collectionImage} alt="" />
                        <div className="absolute top-3 w-full items-center flex justify-between px-4">
                          <h2 className="text-black text-lg font-bold">#1</h2>
                          <span>
                            <img src={collectionImagetop} alt="" />
                          </span>
                        </div>
                        <div className="bottom-filters absolute bottom-0 w-full flex justify-between p-4">
                          <div>
                            <h2 className="text-white text-lg font-bold mb-3">
                              House #1918
                            </h2>
                            <p className="text-white text-xs">1.4296 ETN</p>
                          </div>
                          <div>
                            <img src={collectionImageLocation} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="pagination-bar flex lg:justify-between items-center flex-wrap w-full">
                        <h4 className="text-white opacity-50 text-sm pb-0 mb-3 md:mb-0">
                          Showing 1 to 20 of 60 entries{" "}
                        </h4>
                        <div className="pagination-icons flex gap-3 items-center">
                          <span>
                            <FaAngleLeft className="text-white" />
                          </span>
                          <ul className="flex gap-3 text-white opacity-50 text-sm">
                            <li className="border border-white">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                          </ul>
                          <span>
                            <FaAngleRight className="text-white" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="explore-traits-content">
                      <div className="top-bar flex flex-col sm:flex-row  justify-between flex-wrap mb-5">
                        <div className="relative mb-3 md:mb-0">
                          <input
                            className="rounded-3xl lg:w-60 sm:w-44 w-full bg-transparent pl-9 outline-none"
                            type="text"
                            placeholder="ID"
                          />
                          <span className="absolute top-4 left-4">
                            <img
                              className="w-3 opacity-70"
                              src={collectionSearchIcon}
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="flex gap-3 md:mt-3">
                          <div className="relative bg-black text-white py-2 px-4 text-sm flex items-center gap-3 rounded-3xl border border-gray-300/70">
                            Sort by:{" "}
                            <div className="relative">
                              <a className=" cursor-pointer">
                                <div id="days-filter-menu" className=" flex gap-1 items-end">
                                  <span className="text-orange-500 text-sm font-semibold leading-4">
                                    {daysFilter}
                                  </span>
                                  <span>
                                    <FaAngleDown className={daysDropdownPopoverShow ? "menu-collapse-icon w-6 text-orange-500" : "menu-expand-icon w-6 text-orange-500"} />
                                  </span>
                                </div>
                              </a>
                              <div
                                className={(daysDropdownPopoverShow ? "block " : "hidden ") + "text-white drop-down-custom-collection"}
                              >
                                <ul className="p-3">
                                  {daysFilters.map((item) => <li name={item.value} onClick={onDaysFilterSelect} className="pb-3 text-sm cursor-pointer">
                                    {item.label}
                                  </li>)}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="relative bg-black collection-search flex items-center gap-3 rounded-3xl border-0"></div>
                        </div>
                      </div>
                      <Tab.Group>
                        <div className="traits-tabs">
                          <Tab.List className={"flex"}>
                            <Tab
                              disabled
                              className={({ selected }) =>
                                selected
                                  ? "active-trait-tab sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white outline-none"
                                  : "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 outline-none border-b-2 border-solid border-transparent"
                              }
                            >
                              Least Count
                            </Tab>
                            <Tab
                              className={({ selected }) =>
                                selected
                                  ? "active-trait-tab sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white outline-none"
                                  : "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 outline-none border-b-2 border-solid border-transparent"
                              }
                            >
                              Rarity Score
                            </Tab>
                            <Tab
                              disabled
                              className={({ selected }) =>
                                selected
                                  ? "active-trait-tab sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white outline-none"
                                  : "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 outline-none border-b-2 border-solid border-transparent"
                              }
                            >
                              Highest Fooore Price
                            </Tab>
                            <Tab
                              disabled
                              className={({ selected }) =>
                                selected
                                  ? "active-trait-tab sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white outline-none"
                                  : "sm:text-base text-xs text-small font-medium sm:mx-5 mx-2 py-3 block leading-normal text-white opacity-70 outline-none border-b-2 border-solid border-transparent"
                              }
                            >
                              Value Name
                            </Tab>
                          </Tab.List>
                        </div>
                        <div className="traits-tab-content">
                          <Tab.Panels>
                            <Tab.Panel>content 1</Tab.Panel>
                            <Tab.Panel>
                              <div className="traits-table">
                                <div className="table-resposnive mt-10">
                                  <table className="table-fixed w-full text-left text-xl">
                                    <thead>
                                      <tr>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6">
                                          Value
                                        </th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6">
                                          Count
                                        </th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6">
                                          Rarity Score
                                        </th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6">
                                          Floore
                                        </th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6">
                                          Cheapest Price
                                        </th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6">
                                          Examples
                                        </th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6"></th>
                                        <th className="text-white w-56 lg:w-auto p-3 opacity-70 text-sm pb-6"></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr className="bg-row mb-3">
                                        <td className="text-white align-middle p-3 text-sm">
                                          9
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          1
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          +15151.52
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          98
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          0.3 ETH
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          <img
                                            className="w-40"
                                            src={traitsImageOne}
                                            alt=""
                                          />
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          <img
                                            className="w-40"
                                            src={traitsImageTwo}
                                            alt=""
                                          />
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          <img
                                            className="w-40"
                                            src={traitsImageThree}
                                            alt=""
                                          />
                                        </td>
                                      </tr>
                                      <tr className="bg-row mb-3">
                                        <td className="text-white align-middle p-3 text-sm">
                                          9
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          1
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          +15151.52
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          98
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          0.3 ETH
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          <img
                                            className="w-40"
                                            src={traitsImageOne}
                                            alt=""
                                          />
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          <img
                                            className="w-40"
                                            src={traitsImageTwo}
                                            alt=""
                                          />
                                        </td>
                                        <td className="text-white align-middle p-3 text-sm">
                                          <img
                                            className="w-40"
                                            src={traitsImageThree}
                                            alt=""
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Tab.Panel>
                            <Tab.Panel>Content 3</Tab.Panel>
                            <Tab.Panel>Content 4</Tab.Panel>
                          </Tab.Panels>
                        </div>
                      </Tab.Group>
                    </div>
                    <div className="pagination-bar flex lg:justify-between items-center flex-wrap w-full">
                      <h4 className="text-white opacity-50 text-sm pb-0 mb-3 md:mb-0">
                        Showing 1 to 20 of 60 entries{" "}
                      </h4>
                      <div className="pagination-icons flex gap-3 items-center">
                        <span>
                          <FaAngleLeft className="text-white" />
                        </span>
                        <ul className="flex gap-3 text-white opacity-50 text-sm">
                          <li className="border border-white">1</li>
                          <li>2</li>
                          <li>3</li>
                          <li>4</li>
                          <li>5</li>
                        </ul>
                        <span>
                          <FaAngleRight className="text-white" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="activity-chart flex flex-col md:flex-row justify-between">
                      <div className="flex flex-col justify-between pl-10 py-7 pr-10 md:pr-0 ">
                        <div className="relative bg-black text-white py-2 px-4 text-sm flex mb-7 md:mb-0 items-center gap-3 rounded-3xl border border-gray-300/70">
                          Last: <span className="text-orange-500">14 Days</span>
                        </div>
                        <div>
                          <h2 className="text-white text-base font-semibold pb-3">
                            14 days volume
                          </h2>
                          <p className="text-white text-xs font-light pb-7 opacity-70">
                            ~26096,3657
                          </p>
                          <h2 className="text-white text-base font-semibold pb-3">
                            14 days volume
                          </h2>
                          <p className="text-white text-xs font-light opacity-70">
                            ~26096,3657
                          </p>
                        </div>
                      </div>
                      <div>
                        <img src={activityChartImage} alt="" />
                      </div>
                    </div>
                    <AnalyticsTable />
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <div className="connect-wallet w-full text-center pt-8">
                      <button
                        type="button"
                        className="text-white text-base font-normal border border-orange-600 rounded-3xl bg-transparent px-4 py-2"
                        disabled
                      >
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
