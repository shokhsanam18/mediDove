import React from 'react'
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const GetConsultant = () => {
  return (
    
    <section
    className=" relative inset-0 w-full bg-cover bg-no-repeat text-center flex sm:px-[5%] px-[2%] py-16 sm:py-24 justify-between items-center  bg-left h-full"
    style={{ backgroundImage: "url('./img/slider-bg-1.jpg')" }}
  >
    <div className="absolute inset-0 bg-[#0d1c27] opacity-90"></div>
    <div className="relative inset-0 flex flex-col justify-center items-center gap-5 text-white mx-auto">
        <p className="text-lg font-semibold text-[#b4c7d6]">Stay healthy & strong to enjoy life</p>
        <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
        Trust Us To Be There To Help All & Make Things Well Again.
        </p>

        <Link to='/BecomeMember' className='mt-7'>
            <button className="flex items-center h-16 w-60 sm:w-72 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-[#8fb569] text-white hover:bg-[#e12454] shadow-[0px_0px_5px_#8fb569] hover:shadow-[0px_0px_3px_#e12454] transition-all duration-300 ease-in-out font-semibold ">
                <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full border-2 border-white shadow-md ml-2">
                <Plus size={20}/>
                </span>
                <span className="ml-5 text-sm font-bold tracking-wide">GET A CONSULTANT </span>
            </button>
        </Link>


    </div>
  </section>
  )
}

export default GetConsultant