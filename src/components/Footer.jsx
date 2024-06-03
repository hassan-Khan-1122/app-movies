import React from "react";

function Footer() {
  return (
    <div className="flex justify-evenly w-[full] bg-[#032541] h-[300px] items-center px-5">
      <div className="">
        <h1 className="text-white text-4xl ">The Moviex App </h1>
      </div>
      <div className="flex flex-col  ">
        <h1 className="text-2xl font-bold text-white">THE BASICS</h1>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          About TMDB
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Contact{" "}
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">Support</p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">Api</p>
      </div>

      <div className="flex flex-col  ">
        <h1 className="text-2xl font-bold text-white">Get Involved</h1>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Contributon
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Add New tv
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Add movie
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Add Options
        </p>
      </div>
      <div className="flex flex-col  ">
        <h1 className="text-2xl font-bold text-white">Community</h1>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Guideline
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Discussion
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Leard Board
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          New board
        </p>
      </div>
      <div className="flex flex-col  ">
        <h1 className="text-2xl font-bold text-white">LEGEAL</h1>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Terms of uses
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Api Terms
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          Privacy Policy
        </p>
        <p className="text-[#ffffff] text-1xl font-mono text-[19px]">
          DMCA Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;
