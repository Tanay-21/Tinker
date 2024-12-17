import React from "react";

const Service = () => {
  return (
    <div className="bg-[url('/building-7214070.jpg')] bg-opacity-50 h-svh bg-no-repeat bg-cover w-full  place-content-center  ">
      <div className="bg-black bg-opacity-55 p-5  gap-4 space-y mx-6  flex">

        <div className=" flex-col space-y-6 place-items-center text-center text-white  h-fit py-7 rounded-xl ">
          <div className=" bg-orange-400 p-6 rounded-full ">
            {" "}
            <img src="./ringing.png" width={80} alt="" />
          </div>
          <h1>Smart Notifications</h1>
          <hr className=" bg-opacity-40 w-full h-1 bg-white " />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            explicabo quasi nulla beatae voluptatibus? Ullam.
          </p>
          <button
            className=" bg-sky-400 text-white rounded-full px-4 py-3 
bg-opacity-85 hover "
          >
            CONTINUE READING
          </button>

        </div>
        <div className=" flex-col space-y-6 place-items-center text-center text-white  h-fit py-7 rounded-xl ">

          <div className=" bg-orange-400 p-6 rounded-full " >

          <img src="./heart.png" width={80} alt="" />
          </div>

          <h1>Lovely Web Designs</h1>
          <hr className=" bg-opacity-40 w-full h-1 bg-white " />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            explicabo quasi nulla beatae voluptatibus? Ullam.
          </p>
          <button
            className=" bg-sky-400 text-white rounded-full px-4 py-3 
bg-opacity-85 hover "
          >
            CONTINUE READING
          </button>
        </div>
        <div className=" flex-col space-y-6 place-items-center text-center text-white  h-fit py-7 rounded-xl  ">

          <div className=" bg-orange-400 p-6 rounded-full " >
          <img src="./time-left.png" width={80} alt="" />
          </div>
          <h1>Quick Support</h1>
          <hr className=" bg-opacity-40 w-full h-1 bg-white " />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            explicabo quasi nulla beatae voluptatibus? Ullam.
          </p>
          <button
            className=" bg-sky-400 text-white rounded-full px-4 py-3 
bg-opacity-85 hover "
          >
            CONTINUE READING
          </button>
        </div>
        <div className="flex-col space-y-6 place-items-center text-center text-white  h-fit py-7 rounded-xl ">
          <div className=" bg-orange-400 p-6 rounded-full " >
          <img src="./setting.png" width={80} alt="" />

          </div>
          <h1>One-Click Setup</h1>
          <hr className=" bg-opacity-40 w-full h-1 bg-white " />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            explicabo quasi nulla beatae voluptatibus? Ullam.
          </p>
          <button
            className=" bg-sky-400 text-white rounded-full px-4 py-3 
bg-opacity-85 hover "
          >
            CONTINUE READING
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
