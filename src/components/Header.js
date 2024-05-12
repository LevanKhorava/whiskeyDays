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
          backgroundImage: `url(/coveri.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          // backgroundSize: "cover", // Adjust background size as needed
          // backgroundPosition: "center", // Center the background image
          // width: "100%",
        }}
      >
        {/* <img src={photo} width="300px" className="m-auto" /> */}

        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", right: "10", top: "20" }}
          className="md:hidden"
          width={"30px"}
          onClick={() => setShowMenue(!showMenu)}
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M4 18L20 18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 12L20 12"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M4 6L20 6"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="hidden  md:flex bg-black gap-[40px] w-[100%] justify-center  sticky top-0  p-4 z-10 flex-wrap">
        <p className="font-[700] text-white text-[28px]">HOME</p>
        <p className="font-[700] text-white text-[28px]">INFO</p>
        <p className="font-[700] text-white text-[28px]">GALLERY</p>
        <p className="font-[700] text-white text-[28px]">ABOUT</p>
        <p className="font-[700] text-white text-[28px]">CONTACT</p>
      </div>
    </>
  );
};

export default Header;
