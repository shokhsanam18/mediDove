import React from 'react'
import { Link } from 'react-router-dom';
import { Plus, ThumbsUp, UserRound } from 'lucide-react';
import FormDepartment from '../Surgery-types/FormDepartment';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Typography from '@/components/ui/Typography';
const queryClient = new QueryClient();
import visionIcon from "@/assets/destination-icon-2.png";

const Statistics = () => {
  return (
    
    <section
    className=" relative  bg-[#13232f] inset-0 w-full text-center flex sm:px-[5%] px-[2%] py-16 sm:py-24 justify-between items-center   h-full"
  >
    <div className="absolute inset-0 z-10 bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: "url('./img/map.png')" }}></div>

    <div className="relative inset-0  flex flex-col lg:flex-row justify-center text-start text-white md:justify-evenly sm:justify-center mx-auto gap-5">
        <div className="flex z-20 justify-center w-full lg:w-3/5 gap-4 flex-col">
          <p className="text-lg font-semibold text-[#b4c7d6]">We are available 24/7</p>
        <p className="text-4xl sm:text-6xl lg:text-7xl font-bold">
        We Always Ready For A Challenge.
        </p>

        <Link to='/BecomeMember' className='mt-7'>
            <button className="flex items-center h-16 w-72 sm:w-72 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#8fb569] text-white bg-[#e12454] shadow-[0px_0px_5px_#e12454] hover:shadow-[0px_0px_3px_#8fb569] transition-all duration-300 ease-in-out font-semibold ">
                <span className="w-14 h-14 flex items-center justify-center bg-white text-black rounded-full font-bold text-2xl border-2 border-white shadow-md ml-2">
                +
                </span>
                <span className="ml-5 text-base font-semibold tracking-wide">MAKE APPOINTMENT </span>
            </button>
        </Link>
        </div>
        <div className="flex lg:w-2/5 w-full sm:w-3/5 flex-col gap-10 items-start">
            <div className='flex gap-8'>
                  <Typography variant="h2" className="text-[#8fb569]">
                    1M+
                  </Typography>
                
                <div className="flex gap-2 flex-col">
                  <Typography variant="h4" className="text-white items-center flex gap-2 capitalize">
                  <UserRound size={20} />
                  satisfied patients
                  </Typography>
                  <Typography variant="p" className={'text-[#b4c7d6]'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </div>
            </div>
            <div className='flex gap-8'>
                  <Typography variant="h2" className="text-[#8fb569]">
                    100+
                  </Typography>
                
                <div className="flex gap-2 flex-col">
                  <Typography variant="h4" className="text-white items-center flex gap-2 capitalize">
                  <ThumbsUp size={20} />
                    world awards
                  </Typography>
                  <Typography variant="p" className={'text-[#b4c7d6]'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Statistics