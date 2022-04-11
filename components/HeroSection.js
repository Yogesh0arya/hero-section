import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

function HeroSection(){

    const [value, setValue] = useState([new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()]);

  useEffect(() => {
   
    const interval = setInterval(() => setValue([new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()]), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
//   97,210,204
// rgb(32, 201, 151)
// rgb(108, 178, 235)
// rgb(82, 206, 173)
    return(
        <div className="relative bg-repeat lg:h-screen bg-[rgb(82,206,185)] bg-blend-color-burn bg-[url('/images/bg_dots_pattern.svg')]">
            <div className="text-center text-black font-bold text-lg">

                <h3>EXPIRES IN</h3>

                <div className="flex items-center justify-center space-x-2 mt-1 mb-5">
                    <div className="flex flex-col items-center space-y-1">
                        <h3 className="w-12 h-12 grid items-center rounded-md bg-white border-2 border-black">{value[0]}</h3>
                        <p>HOURS</p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h3 className="w-12 h-12 grid items-center rounded-md bg-white border-2 border-black">{value[1]}</h3>
                        <p>MINUTE</p>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h3 className="w-12 h-12 grid items-center rounded-md bg-white border-2 border-black">{value[2]}</h3>
                        <p>SECONDS</p>
                    </div>
                </div>

                <h2 className="text-2xl font-extrabold">WEB HOSTING DEALS</h2>

                <h1 className="mt-8 z-30 md:mt-12 text-2xl md:text-4xl xl:text-6xl text-pink-700 font-cartoon">SPRING AHEAD!</h1>
                <h1 className="my-8 z-30 md:mt-12 text-2xl md:text-4xl xl:text-6xl text-pink-700 font-cartoon">70% OFF</h1>

                <div className="mb-5">
                    <p>FREE MIGRATION</p>
                    <p>24/7 SUPER FAST SUPPORT</p>
                    <p>45 DAYS MONEY BACKUP</p>
                </div>
                

                <h1>USE COUPON: <span className="p-1 font-extrabold text-base text-white bg-pink-600 rounded-md">BLOOM70</span></h1>

                <button className="w-56 p-2 bg-yellow-400 rounded-sm font-bold text-base border-2 border-black mt-2 mb-5">START NOW</button>

                <h1 className="underline">Plain & Pricing</h1>

            </div>

            <div className="lg:hidden">
                <img className='w-auto h-screen' src="/images/spring_flowers_mobile_2.svg" alt="img" />
            </div>
            <div className="z-0 hidden lg:inline lg:absolute lg:top-0 left-0">
                <img className='w-auto h-screen' src="/images/spring_flowers_left.svg" alt="img" />
            </div>
            <div className="z-0 hidden lg:inline lg:absolute lg:top-0 right-0">
                <img className='w-auto h-screen' src="/images/spring_flowers_right.svg" alt="img" />
            </div>
        </div>
    )
}

export default HeroSection