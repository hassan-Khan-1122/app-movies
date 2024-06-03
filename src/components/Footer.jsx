
import React from "react";

function Footer() {
  return (
    <>
    <div className="flex flex-col sm:flex-row justify-evenly w-full bg-[#032541] h-auto sm:h-[300px] items-center px-5 py-8 sm:py-0 space-y-8 sm:space-y-0 sm:space-x-8">
      <div className="mb-8 sm:mb-0">
        <h1 className="text-white text-2xl sm:text-4xl">The Moviex App</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:space-x-8">
        <div className="flex flex-col mb-8 sm:mb-0 space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">THE BASICS</h1>
          <p className="text-white text-base sm:text-lg font-mono">About TMDB</p>
          <p className="text-white text-base sm:text-lg font-mono">Contact</p>
          <p className="text-white text-base sm:text-lg font-mono">Support</p>
          <p className="text-white text-base sm:text-lg font-mono">Api</p>
        </div>
        <div className="flex flex-col mb-8 sm:mb-0 space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Get Involved</h1>
          <p className="text-white text-base sm:text-lg font-mono">Contribution</p>
          <p className="text-white text-base sm:text-lg font-mono">Add New TV</p>
          <p className="text-white text-base sm:text-lg font-mono">Add Movie</p>
          <p className="text-white text-base sm:text-lg font-mono">Add Options</p>
        </div>
        <div className="flex flex-col mb-8 sm:mb-0 space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">Community</h1>
          <p className="text-white text-base sm:text-lg font-mono">Guideline</p>
          <p className="text-white text-base sm:text-lg font-mono">Discussion</p>
          <p className="text-white text-base sm:text-lg font-mono">Leaderboard</p>
          <p className="text-white text-base sm:text-lg font-mono">New Board</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-white">LEGAL</h1>
          <p className="text-white text-base sm:text-lg font-mono">Terms of Use</p>
          <p className="text-white text-base sm:text-lg font-mono">API Terms</p>
          <p className="text-white text-base sm:text-lg font-mono">Privacy Policy</p>
          <p className="text-white text-base sm:text-lg font-mono">DMCA Policy</p>
        </div>
      </div>
    
    </div>
    <div className="w-full bg-[#032541] text-center ">
      <h1 className="text-white text-base sm:text-lg font-mono">Created By HASSAN</h1>
    </div>
</>
  );
}

export default Footer;
