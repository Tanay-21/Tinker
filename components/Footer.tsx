import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600 place-items-center place-content-center space-x-14  flex py-8 text-white ">
      <div className="">
        {" "}
        <h1 className=" font-serif text-white font-extrabold text-l tracking-wider mt-2">
          {" "}
          <span className=" text-yellow-300 text-3xl ">T</span>INKER
        </h1>
        <h2>Copyright @2024 Your Company</h2>
        <h2>Design</h2>
      </div>
      <div className="">
        <h1>Location</h1>
        Vijay Nagar Indore <br />
        Madhya Pradesh
      </div>
      <div className="">
        <h1>MORE INFO</h1>
        <h2>Phone: 0908989898</h2>
        <h2>Email: aff@gmail.com</h2>
      </div>
      <div className="">
        GET SOCIAL WITH US
        <div className="flex mt-3 space-x-3" >
          <img src="./twitter.png" alt="" width={30} className=" bg-white rounded-full " />
          <img src="./facebook.png" alt="" width={30} className=" bg-white rounded-full " />
          <img src="./letter-g.png" alt="" width={30} className=" bg-white rounded-full " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
