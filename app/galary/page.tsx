import React from "react";
import { Carousel } from 'flowbite';
import type {
  CarouselItem,
  CarouselOptions,
  CarouselInterface,
} from 'flowbite';
import type { InstanceOptions } from 'flowbite';
const Galary = () => {
  return (
    <div className="" >
    <div className="h-dvh flex w-full bg-white">
      <div className="bg-sky-400 flex-col space-y-6 w-2/5 place-content-center text-left px-20 text-white ">
        <h1
          className=" text-2xl font-bold
         "
        >
          OUR GALLERY
        </h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rerum,
          voluptas quia omnis nobis repellat nihil sint nemo ipsam.
        </p>

        <div
          className=" flex
        flex-col space-y-3  "
        >
          <a href="" className="text-orange-400" >Show All</a>
          <a href="">Branding</a>
          <a href="">Graphic</a>
          <a href="">Nation</a>
          <a href="">Animation</a>
        </div>
      </div>
      <div className=" grid grid-cols-2 p-4 px-14 ">
        <img src="./coffee-2714970.jpg" className=" h-48 w-80" alt="" />
        <img src="./architecture-5031117.jpg" className=" h-48 w-80" alt="" />
        <img src="./pexels-polina-kovaleva-8101600.jpg" className=" h-48 w-80" alt="" />
        <img src="./pexels-janetrangdoan-1128678.jpg" className=" h-48 w-80" alt="" />
        <img src="./pexels-enginakyurt-1435895.jpg" className=" h-48 w-80" alt="" />
        <img src="./pexels-fotios-photos-1957477.jpg" className=" h-48 w-80" alt="" />
      </div>
    </div>
      <div className="bg-yellow-300 place-items-center items-center py-20 text-center  w-full" >
   
        <div className="carousel w-2/4">
  <div id="item1" className="carousel-item w-full flex-col">
    <p className="bg-white p-7" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure numquam <br /> veniam est at quasi dolorum nisi accusantium beatae labore? Animi ullam necessitatibus <br /> ipsa quo aspernatur unde rerum delectus sed at?</p>
    <h1>Lorem, ipsum. <br />
    lorem</h1>
  </div>
  <div id="item2" className="carousel-item w-full flex-col">
    <p className="bg-white p-7" >Lorem ipsum dolor sit, amet consec elit. Iure numquam <br /> veniam est at quasi dolorum nisi accusantium beatae labore? Animi  <br /> ipsa quo aspernatur unde rerum delectus sed at?</p>
    <h1>Lorem, ipsum. <br />
    lorem</h1>
  </div>
  <div id="item3" className="carousel-item w-full flex-col">
    <p className="bg-white p-7" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure numquam <br /> veniam est at quasi dolorum nisi accusantium bea\s <br /> ipsa quo aspernatur unde rerum delectus sed at?</p>
    <h1>Lorem, ipsum. <br />
    lorem</h1>
  </div>
  <div id="item4" className="carousel-item w-full flex-col">
    <p className="bg-white p-7 mb-3 " >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure numquam <br /> veniam est at quasi dolorum nisi accusantium beatae labore? Animi ullam necessitatibus <br /> ipsa quo aspernatur unde rerum delectus sed at?</p>
    <h1>Lorem, ipsum. <br />
    lorem</h1>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs bg-white  ">1</a>
  <a href="#item2" className="btn btn-xs bg-white ">2</a>
  <a href="#item3" className="btn btn-xs bg-white ">3</a>
  <a href="#item4" className="btn btn-xs bg-white ">4</a>
</div>
      </div>
      </div>
  );
};

export default Galary;
