import React from "react";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
    <main className="container px-4 mx-auto  max-w-xl flex flex-col space-y-6">
      <img src="./google.jpg" alt="" className="h-72 mx-auto" />
      <div
        className="rounded-full py-2 px-4 flex border-2 border-grey-300 hover:shadow-2xl"
        style={{ marginTop: -72 }}
      >
        <div className="place-self-center text-grey-500 cursor-pointer">
          <i className="fas fa-search text-lg"></i>
        </div>
        <div className="flex px-4 w-full">
          <input
            type="text"
            className="w-full border-none outline-none text-base"
          ></input>
        </div>
        <div className="place-self-center text-gray-500 cursor-pointer">
          <i className="fas fa-microphone text-lg"></i>
        </div>
      </div>
      <div className="mx-auto flex space-x-2">
        <input type="submit" className="px-4 py-2 rounded bg-gray-300 cursor-pointer transition-all duration-500 hover:shadow-md" value="Google Search"/>
<button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md">I'm Good</button>
      </div>
    </main>
    <Footer/>
   </>
  );
};

export default Main;
