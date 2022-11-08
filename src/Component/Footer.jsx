import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between absolute bottom-0 w-full bg-gray-300 leading-10 px-0">
      <div className="space-x-6" a>
        <a href="#" className="hover:underline">
          Advertising
        </a>
        <a href="#" className="hover:underline">
          Business
        </a>
        <a href="#" className="hover:underline">
          How Search Works
        </a>
      </div>
      <div className="space-x-6" a>
        <a href="#" className="hover:underline">
    Privacy
        </a>
        <a href="#" className="hover:underline">
     Terms
        </a>
        <a href="#" className="hover:underline">
      Settings
        </a>
      </div>
    </footer>
  );
};

export default Footer;
