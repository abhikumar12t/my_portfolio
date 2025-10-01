import React from "react";

const Footer = () => {
  
  return (
   <footer className="py-5 bg-[linear-gradient(38.73deg,rgba(204,0,187,0.15)_0%,rgba(201,32,184,0)_50%),linear-gradient(141.27deg,rgba(0,70,209,0)_50%,rgba(0,70,209,0.15)_100%)]">
  <div className="container mx-auto flex justify-center items-center">
    <p className="text-sm text-white text-center">
      <span>@{new Date().getFullYear()}</span>
      <span className="mx-2">Abhishek Kumar.</span>
      All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;