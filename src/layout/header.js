import Logo from "../assets/images/nft-logo.png";
import searchIcon from "../assets/images/search-icon-collection.png";
import metaMaskIcon from "../assets/images/metamask.png";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  landingpage,
  collectionpage,
  analyticspage,
} from "./../routers/RoutePath";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Header() {
  const selected = (event) => {
    var targeted = event.target;
    var clicked = targeted.parentElement;

    var child = clicked.children;
    console.log(child);

    for (let i = 0; i < child.length; i++) {
      if (child[i].classList.contains("text-white")) {
        console.log(child[i]);
        child[i].classList.remove("text-white", "bg-indigo-600");
        child[i].classList.add(
          "text-gray-600",
          "bg-gray-50",
          "border",
          "border-white"
        );
      }
    }

    targeted.classList.remove(
      "text-gray-600",
      "bg-gray-50",
      "border",
      "border-white"
    );
    targeted.classList.add("text-white", "bg-indigo-600");
  };

  const selectNew = () => {
    const newL = document.getElementById("list");
    newL.classList.toggle("hidden");

    document.getElementById("ArrowSVG").classList.toggle("rotate-180");
  };

  const selectedSmall = (event) => {
    var text = event.target.innerText;
    var newL = document.getElementById("list");
    var newText = document.getElementById("textClicked");
    newL.classList.add("hidden");
    document.getElementById("ArrowSVG").classList.toggle("rotate-180");
    newText.innerText = text;

    document.getElementById("s1").classList.remove("hidden");
  };

  const ethereumButton = useRef(null);

  useEffect(() => {
    ethereumButton.current.addEventListener('click', () => {
      getAccount();
    });
  }, [ethereumButton])

  async function getAccount() {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      return
    }
    console.error("Please install MetaMask Extension from Store")
  }

  return (
    <>
      <div className="lg:px-20 px-3 rounded shadow-lg header">
        <div className="py-3">
          <nav className="flex justify-between">
            <div className="basis-3/6 flex items-center">
              <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                <img className="w-48" src={Logo} alt="" />
              </div>
              <ul className="hidden md:flex flex-auto space-x-2">
                <li className="text-white opacity-70 cursor-pointer px-3 py-2.5 font-normal text-sm">
                  <Link to={landingpage}>Home</Link>
                </li>
                <li className="text-white opacity-70 cursor-pointer px-3 py-2.5 font-normal text-sm">
                  <Link to={collectionpage}>All Collections</Link>
                </li>
                <li className="text-white opacity-70 cursor-pointer px-3 py-2.5 font-normal text-sm">
                  <Link to={analyticspage}>Analytics</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-7">
              <div className="hidden md:flex space-x-5 justify-center items-center pl-2">
                <div className="relative bg-black collection-search flex items-center gap-3 rounded-3xl border-0">
                  <input
                    type="text"
                    className="lg:w-64 w-48 py-2 pl-12 pr-2 rounded-3xl"
                    placeholder="Search Collections"
                  />
                  <span>
                    <img src={searchIcon} alt="" />
                  </span>
                </div>
              </div>
              <div>
                <button ref={ethereumButton} className="bg-transparent border border-solid border-white hover:bg-orange-500 hover:border-transparent ease-in text-white text-xs font-normal md:font-semibold py-2 px-4 flex items-center gap-1 md:gap-2 rounded">
                  <span>
                    <img src={metaMaskIcon} alt="" />
                  </span>
                  <span>Connect to
                    MetaMask</span>
                </button>
              </div>
              <ul className="hidden md:flex gap-4">
                <li
                  onClick={selected}
                  className="text-white opacity-70 cursor-pointer social-icons"
                >
                  <FaInstagram />
                </li>
                <li
                  onClick={selected}
                  className="text-white opacity-70 cursor-pointer social-icons"
                >
                  <FaTwitter />
                </li>
                <li
                  onClick={selected}
                  className="text-white opacity-70 cursor-pointer social-icons"
                >
                  <FaDiscord />
                </li>
              </ul>
            </div>
          </nav>
          <div className="block md:hidden w-full mt-5 ">
            <div
              onClick={selectNew}
              className="cursor-pointer px-4 py-3 text-white opacity-70 bg-black rounded flex justify-between items-center w-full"
            >
              <div className="flex space-x-2">
                <span
                  id="s1"
                  className="font-semibold text-sm leading-3 hidden"
                >
                  {" "}
                </span>
                <p
                  id="textClicked"
                  className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
                >
                  Menu
                </p>
              </div>
              <svg
                id="ArrowSVG"
                className=" transform"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="relative z-10">
              <ul
                id="list"
                className=" hidden font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md bg-black"
              >
                <li
                  onClick={selectedSmall}
                  className="px-4 py-3 text-white opacity-70 border  duration-100 cursor-pointer text- leading-3 font-normal"
                >
                  <Link to={landingpage}>Home</Link>
                </li>
                <li
                  onClick={selectedSmall}
                  className="px-4 py-3 text-white opacity-70 border  duration-100 cursor-pointer text-base leading-3 font-normal"
                >
                  <Link to={collectionpage}>All Collections</Link>
                </li>
                <li
                  onClick={selectedSmall}
                  className="px-4 py-3 text-white opacity-70 border  duration-100 cursor-pointer text-base leading-3 font-normal"
                >
                  <Link to={analyticspage}>Analytics</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
