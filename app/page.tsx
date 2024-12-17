import Image from "next/image";
import Service from "./services/page";
import Galary from "./galary/page";
import Blog from "./blog/page";

export default function Home() {
  return (
    <div>

   <div className=" bg-black  bg-opacity-25 h-svh  w-full text-center items- flex-col space-y-5 m-auto py-36  " >
    <h1 className=" text-5xl font-bold text-white " ><span className=" text-orange-400 " >TINKER </span><span className=" text-sky-400 " >HTML5 </span>Template</h1>
    <p className=" text-white " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo ipsam ea dolorem. <br /> Ut voluptates libero vel iste perferendis sit.</p>
    <button
            className=" bg-white rounded-full px-4 py-3 
bg-opacity-85 hover text-black "
          >
LET'S START
          </button>

   </div>

<Service/>
<Galary/>
<Blog/>

    </div>
   

  );
}
