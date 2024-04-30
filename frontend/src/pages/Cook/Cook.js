
import Fitex from './fitex.png'
import React, { useEffect } from "react";
import axios from "axios";

import { BACKEND_URL } from '../../values'

const Cook = () => {
  useEffect(() => {
    const fetchBmi = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/consumer`);
        const BMI = res.data[0].currentBmi;
      } catch (error) {
        console.log("Error Logging In Consumer");
      }
    };
    fetchBmi();
  }, []);

  return (
<div class="bg-[rgb(8,164,132)] min-h-screen flex items-center justify-center ">
  <div className='absolute left-0 top-0 h-1/10'><img className="h-[110px]" src={Fitex}/></div>
  <div class="bg-[#f5f5dc] flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
   
    <div class="bg-[#abddc4] px-2 lg:px-4 py-2 lg:py-10 sm:rounded-xl flex lg:flex-col justify-between">
      <nav class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
        <a class="text-grey-900/50 p-4 inline-flex justify-center rounded-md hover:bg-green-700/50 hover:text-grey-900 smooth-hover" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </nav>
      <div class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
      </div>
    </div>
    <div class="flex-1 px-2 sm:px-0">
      <div class="flex justify-between items-center">
        <h3 class="text-3xl font-extralight text-grey-900/50">Recipe Requests</h3>
        <div class="inline-flex items-center space-x-2">
          <a class="bg-[#abddc4] text-grey-900/50 p-2 rounded-md hover:text-grey-900 smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a>
          <a class="bg-[#abddc4] text-grey-900/50 p-2 rounded-md hover:text-grey-900 smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </a>
        </div>
      </div>
      <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div class="relative group bg-[#abddc4] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-green-700/50 hover:smooth-hover">
          <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="dancing" />
          <h4 class="text-grey-900 text-2xl font-bold capitalize text-center">Dancing</h4>
          <p class="text-grey-900/50">108 members</p>
          <p class="absolute top-2 text-grey-900/20 inline-flex items-center text-xs">86 Online <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

// bg-gray-900

export default Cook
