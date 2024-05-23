import React from "react";
import img from "../asssets/logo-pasledni-_1_.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between ">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-2">
            <span className="mr-2">📞</span>
            <span>+995 557333373</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">✉️</span>
            <span>whiskydaysge@gmail.com</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">🌐</span>
            <span>www.whiskydays.ge</span>
          </div>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#" className="text-orange-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-orange-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-orange-400">
              <i className="fab fa-tiktok"></i>
            </a>
          </div> */}
        </div>

        <img src={img} alt="Whisky Glass" className="w-[200px] " />
        <div className="">
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/facebook.png"
                alt="Facebook"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/instagram-new.png"
                alt="Instagram"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/tiktok.png"
                alt="TikTok"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
