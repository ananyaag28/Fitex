import { motion } from "framer-motion"
import React, { useRef, useState, useEffect } from "react";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import LoginRole from "./LoginRole";
import LoginForm from "./LoginForm";

import Snackbar from '@mui/joy/Snackbar';


export default function Login({ existingRole, existingEmail}) {

  const [userData, setUserData] = useState({
    role: existingRole?.value || "",
    modelData: {
      email : existingEmail?.value || ""
    }
  })

  const [view, setView] = useState("ROLE")
  const [isSnackbarOpen, setIsSnackbarOpen] = useState({
    color: "",
    message: ""
  })

  const slides = [
    {
      image: process.env.PUBLIC_URL + "/Images/Image4.jpg",
      title: "Your Fitness, Our Priority",
      desc: "Indulge in Fitex's personalized diet suggestions, crafted to fuel your fitness journey. With your well-being as our top priority, we guide you towards achieving your health goals effortlessly."
    },
    {
      image: process.env.PUBLIC_URL + "/Images/Image1.jpg",
      title: "Reach your Goals Sip by Sip",
      desc: "Hydrate your way to triumph with Fitex's water monitor, leading you drop by drop towards hydration victories. Keep energized, stay driven, and conquer your health milestones, one sip at a time."
    },
    {
      image: process.env.PUBLIC_URL + "/Images/Image2.jpg",
      title: "Picture Perfect nutrition",
      desc: "Capture the essence of nutrition with Fitex's Snap feature. Picture perfect meals unveil their caloric secrets, empowering informed choices for a healthier, more vibrant you."
    },
    {
      image: process.env.PUBLIC_URL + "/Images/Image3.jpg",
      title: "Turn Off, Tune in",
      desc: "Transform your mornings with Fitex's alarm clock. Turn off the noise, tune into productivity. Complete tasks to silence the alarm, kickstart your day with focus and accomplishment."
    },
  ]

  return (
    <div className="flex flex-col h-screen bg-[#216C53]">

      <div className="absolute top-5 left-5 flex gap-1 items-center text-3xl font-mono">
        <img src={process.env.PUBLIC_URL + "/Assets/fitex.png"} className="w-32" />
        <p className="text-[#FFF] text-5xl">Fitex</p>
      </div>
      <section className="absolute hidden xl:block left-20 top-1/4 !bg-transparent">

        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: false,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper h-[400px] w-[35vw]"
        >
          {slides.map((slide, id) => {
            return (
              <SwiperSlide key={id} className="flex flex-col">
                <img alt="altText" src={slide.image} className="w-[300px]" />
                <h1 className="text-[#CBEDB3] text-6xl mt-4">{slide.title}</h1>
                <div className="text-[#FFFEF2] text-3xl font-light mt-2">{slide.desc}</div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
      


        <div className="hidden py-44 px-8 sm:!px-96 md:p-44 w-screen md:w-auto bg-white absolute top-32 bottom-0 md:right-0 rounded-t-[40px] md:rounded-tr-none md:rounded-tl-[80px] text-center sm:flex flex-col">
          <LoginRole existingEmail={existingEmail} existingRole={existingRole} userData={userData} setUserData={setUserData} view={view} setView={setView} />
          <LoginForm setIsSnackbarOpen={setIsSnackbarOpen} existingEmail={existingEmail} existingRole={existingRole} userData={userData} setUserData={setUserData} view={view} setView={setView} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: "700px" }}
          animate={{ opacity: 1, y: ["400px", "-50px", "0px"], transition: { duration: 0.8, ease: "easeOut" } }}
          exit={{ opacity: 0, y: "700px", transition: { duration: 0.3, ease: "easeOut" } }}
          transition={{ duration: 0.3 }}
          className="sm:hidden h-max overflow-y-hidden py-44 px-8 sm:px-32 md:p-44 w-screen md:w-auto bg-white absolute top-32 bottom-0 md:right-0 rounded-t-[40px] md:rounded-tr-none md:rounded-tl-[80px] text-center flex flex-col">
          <LoginRole existingEmail={existingEmail} existingRole={existingRole} userData={userData} setUserData={setUserData} view={view} setView={setView} />
          <LoginForm setIsSnackbarOpen={setIsSnackbarOpen} existingEmail={existingEmail} existingRole={existingRole} userData={userData} setUserData={setUserData} view={view} setView={setView} />
        </motion.div>

        <Snackbar
          autoHideDuration={4000}
          open={isSnackbarOpen}
          variant={"outlined"}
          color={isSnackbarOpen.color}
          onClose={(event, reason) => {
            if (reason === 'clickaway') {
              return;
            }
            setIsSnackbarOpen(false);
          }}
        >
          {isSnackbarOpen.message}
        </Snackbar>
    </div>
  );
}

