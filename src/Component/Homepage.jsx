import React from "react";
import "./Homepage.css";
import Main from "./Main";
const Homepage = () => {
  return (
    <div className="text-gray-800 text-sm">
      <header className="flex justify-between w-full">
        <div className="flex space-x-4 p-6">
          <a className="hover:underline">About</a>
          <a className="hover:underline">store</a>
        </div>
        <div className="flex ">
          <div className="flex space-x-4 p-6">
            <a className="hover:underline">Gmail</a>
            <a className="hover:underline">images</a>
            <a className="pl-2">
            <i className="  fas fa-th text-lg" style={{marginTop:"-4px"}}></i>
            </a>
          </div>
          <a className="pt-5 pr-8">
         <img src="./goole.jpg" alt="" style={{height:"28px"}}  className="rounded-full" />
          </a>
        </div>
      </header>
      <Main/>
    </div>
  );
};

export default Homepage;
