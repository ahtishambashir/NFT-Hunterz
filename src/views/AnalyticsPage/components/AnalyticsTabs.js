import React from "react";
import { FaSearch } from "react-icons/fa";
import AnalyticsTable from "./AnalyticsTable";
import activityChartImage from "../../../assets/images/activity-chart-image.png";
import marketShareImage from "../../../assets/images/share-market-image.png";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function CollectionTabs() {
  const [openTab, setOpenTab] = React.useState(1);
  const [collapse, setCollapse] = React.useState(false);

  const toggle = () => setCollapse(!collapse);
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
                href=""
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
                Market Shaare
              </a>
            </li>
          </ul>
          <div className="collection-main relative bg-transparent flex lg:mx-10 mx-3">
            <div
              className={`relative ${collapse ? "" : "active-nav"
                } flex flex-col min-w-0 break-words bg-transparent w-full mb-6`}
            >
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  ></div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  ></div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <div className="top-bar flex flex-col justify-between sm:flex-row flex-wrap gap-3">
                      <div className="flex gap-4 flex-col sm:flex-row">
                        <div className=" pl-2">
                          <div className="relative bg-black collection-search gap-3 rounded-3xl border">
                            <input
                              type="text"
                              className="sm:w-64 w-full py-2 pl-12 pr-2 rounded-3xl"
                              placeholder="Search Collections"
                            />
                            <span>
                              <FaSearch className="text-white opacity-30" />
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3 flex-col sm:flex-row">
                          <div className="relative border-solid border-color bg-black text-white py-2 px-8 text-sm flex items-center gap-3 border rounded-3xl ">
                            Last:{" "}
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
                        </div>
                      </div>
                      <div className="flex gap-4 flex-col sm:flex-row">
                        <div className="flex gap-3 flex-col sm:flex-row">
                          <div className="relative border-solid border-color bg-color  text-white py-2 px-8 text-sm flex items-center gap-3 border rounded-3xl ">
                            <span className="opacity-70">
                              14 Day Volume:{" "}
                            </span>

                            <span className="opacity-100 text-base font-semibold text-white">
                              ~26096,5678
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3  flex-col sm:flex-row">
                          <div className="relative border-solid border-color bg-color  text-white py-2 px-8 text-sm flex items-center gap-3 border rounded-3xl ">
                            <span className="opacity-70">
                              14 Day Avg Price:{" "}
                            </span>

                            <span className="opacity-100 text-base font-semibold text-white">
                              ~26567
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full rounded-2xl my-8">
                      <img className="w-full rounded-2xl" src={activityChartImage} alt="" />
                    </div>
                    <AnalyticsTable />
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link4"
                  >
                    <div className="flex gap-4 items-center flex-col sm:flex-row">
                      <h2 className="text-white text-lg font-semibold">
                        NFT Value Share
                      </h2>
                      <div className="relative bg-black collection-search gap-3 rounded-3xl border">
                        <input
                          type="text"
                          className="sm:w-64 w-full py-2 pl-12 pr-2 rounded-3xl"
                          placeholder="Search Collections"
                        />
                        <span>
                          <FaSearch className="text-white opacity-30" />
                        </span>
                      </div>
                    </div>
                    <div className="w-full rounded-2xl my-8">
                      <img className="w-full rounded-2xl" src={marketShareImage} alt="" />
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
