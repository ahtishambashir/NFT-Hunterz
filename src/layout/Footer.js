import Logo from "../assets/images/nft-footer.png";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="main-footer flex justify-between bg-stone-800 py-4 lg:px-20 px-3 relative">
      <div className="footer-left flex gap-12 items-center">
        <img className="w-40 absolute" src={Logo} alt="" />
        <span className="text-white text-xs opacity-60 sm:pl-44 pl-0">
          NFT HUNTERS, Inc All rights reserved.
        </span>
      </div>
      <div className="footer-right flex items-center gap-4">
        <a className="footer-social-icons" href="">
          <FaInstagram />
        </a>
        <a className="footer-social-icons" href="">
          <FaTwitter />
        </a>
        <a className="footer-social-icons" href="">
          <FaDiscord />
        </a>
      </div>
    </footer>
  );
}
