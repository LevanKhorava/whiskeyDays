import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenue] = useState(false);
  return (
    <>
      {showMenu ? (
        <div className="flex flex-col  bg-slate-red gap-[40px] w-[100%] h-[100%]  items-center  justify-center fixed bg-slate-400  flex-wrap ">
          <p className="font-[700] text-white text-[28px]">HOME</p>
          <p className="font-[700] text-white text-[28px]">INFO</p>
          <p className="font-[700] text-white text-[28px]">GALLERY</p>
          <p className="font-[700] text-white text-[28px]">ABOUT</p>
          <p className="font-[700] text-white text-[28px]">COONTACT</p>
        </div>
      ) : null}
      <div
        className="w-[100%] h-[650px]"
        style={{
          backgroundImage: `url(/gif.gif)`,
          // backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          // backgroundSize: "contain", // Adjust background size as needed
          backgroundPosition: "center", // Center the background image
          // width: "100%",
        }}
      >
        {/* <img src={photo} width="300px" className="m-auto" /> */}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", right: "10px", top: "20px" }}
          className="md:hidden"
          width="30px"
          onClick={() => setShowMenue(!showMenu)}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 18L20 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M4 12L20 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M4 6L20 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </g>
        </svg>
      </div>
      <div className="hidden  md:flex bg-black gap-[40px] w-[100%] justify-center  sticky top-0  p-4 z-10 flex-wrap">
        <a href="#info">
          <p className="font-[700] text-white text-[28px]">INFO</p>
        </a>
        <a href="#gallery">
          <p className="font-[700] text-white text-[28px]">GALLERY</p>
        </a>
        <a href="#contact">
          <p className="font-[700] text-white text-[28px]">CONTACT</p>
        </a>
      </div>
    </>
  );
};

export default Header;
