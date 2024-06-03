import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Page.css";
import Bestpictures from "./Bestpictures";
import BesActor from "./BesActor";
import Actor from "./Actor";
import Actress from "./Actress";
import SupportActors from "./SupportActors";
import VisualEffect from "./VisualEffect";

function Page() {
  return (
    <>
      <div className="w-[100%] h-[100%]">
        <div className="flex justify-center mt-3">
          <p className="text-1xl text-[black] flex justify-center cursor-pointer ">
            overview <IoMdArrowDropdown className="mt-1" />
          </p>
          <p className="text-1xl text-[black] flex justify-center cursor-pointer ml-5 ">
            Share <IoMdArrowDropdown className="mt-1" />
          </p>
        </div>

        <div className="mt-3 w-[full] h-[250px] bg-slate-800 main">
          <div className="text-white text-1xl ml-52 flex mt-5">
            <p className=" mx-5 mt-5">96th Academy Awards</p>
            <div className="border h-7 mt-5 mr-5"></div>
            <p className="mt-5">Aired March 10, 2024</p>
          </div>
          <div>
            <h1 className="text-white text-[90px] ml-52">OSCARDS</h1>
          </div>
        </div>
        {/* 2nd heading  */}
        <h1 className="text-2xl font-serif ml-28 mt-3">Show Info</h1>
        <div className="w-[full] h-[200]  grid-cols-6">
          <div className="flex justify-evenly ">
            <div>
              <h3 className="font-bold text-[17px] ml-4 mt-5">
                Preshow Hosts:
              </h3>
              <p className="ml-4 text-[17px]">Amelia Dimoldenberg</p>
            </div>
            <div>
              <h3 className="font-bold text-[17px] ml-4 mt-5">
                Preshow Hosts:
              </h3>
              <p className="ml-4 text-[17px]">Amelia Dimoldenberg</p>
            </div>
            <div>
              <h3 className="font-bold text-[17px] ml-4 mt-5">Produced By:</h3>
              <p className="ml-4 text-[17px]">Amelia Dimoldenberg</p>
            </div>

            <div>
              <h3 className="font-bold text-[17px] ml-4 mt-5">Directed By:</h3>
              <p className="ml-4 text-[17px]">Ranbir Kapoor</p>
            </div>
            <div>
              <h3 className="font-bold text-[17px] ml-4 mt-5">Network:</h3>
              <p className="ml-4 text-[17px]">ABCD</p>
            </div>
            <div>
              <h3 className="font-bold text-[17px] ml-4 mt-5">Network:</h3>
              <p className="ml-4 text-[17px]">ABCD</p>
            </div>
          </div>
        </div>
        <div className="ml-24 mt-7">
          <h3 className="font-bold text-[17px] ml-4 mt-5">Run time:</h3>
          <p className="ml-4 text-[17px]">2hr 23min</p>
          <hr className="mt-14" />
        </div>
        {/* 3rd parts  */}
        <div className="ml-28 mt-11">
        <h1 className="text-3xl ">Best Pictures</h1>
         <Bestpictures/>
        </div>
        <div className="ml-28 mt-11">
            <h1 className="text-3xl">BesT Director</h1>
            <BesActor/>
            </div> 
            <div className="ml-28 mt-11">
            <h1 className="text-3xl">Best Actor</h1>
            <Actor/>
            
            </div> 
            <div className="ml-28 mt-11">
            <h1 className="text-3xl">Best Actress</h1>
            <Actress/>
            
            </div> 
            <div className="ml-28 mt-11">
            <h1 className="text-3xl">Best Support Actors</h1>
            <SupportActors/>
            
            </div> 
            <div className="ml-28 mt-11">
            <h1 className="text-3xl">Best Visual Effect</h1>
            <VisualEffect/>
            {/* <SupportActors/> */}
            
            </div> 
      </div>
    </>
  );
}

export default Page;
