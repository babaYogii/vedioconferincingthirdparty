import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className=" ">
      
      <Navbar />
      
      <div className="relative h-screen ">
        
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src="https://static-prod.adweek.com/wp-content/uploads/2020/03/behr-zoom-background-1-2020-1240x620.jpg.webp" className="object-cover  w-full h-full" />
        </div>
      
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
      
          <div className=" flex flex-col items-center justify-center pb-8">
            
          </div>

  
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12  flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>
            <button
              type="submit"
              className=" bg-orange-500 hover:bg-orange-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
