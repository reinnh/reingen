import React, { use } from "react";
import { motion } from "framer-motion";
import './custom.css'
import {useState, useEffect} from 'react'


export const ReingenCard = () => {
    const[angle, setAngle]=useState(0)
    useEffect(()=>{
        const interval=setInterval(() => {
            setAngle((prev)=>(prev+1)%360)
        }, 10);
        return ()=> clearInterval(interval)
    },[]);
  return (
    <div className=" flex py-10 bg-gray-950  flex-col items-center gap-y-10">
        <div className="container pl-3 md:pl-0">
        <p className="text-white text-4xl font-bold">Inspiration</p>
        </div>
        <div className="flex items-center justify-center">
            
      {/* Card Container */}
     <div className={`animate-conic relative w-11/12 lg:w-3/4 z-0 before:content-[''] card before:absolute before:-top-1 before:-left-1 before:-right-1 before:-bottom-1 before: before:rounded-lg after:content-['']  after:absolute after:-top-1 after:-left-1 after:-right-1 after:-bottom-1  after:rounded-lg after:-z-1 `}>
     <motion.div
        className="relative bg-gray-950 rounded-lg shadow-lg p-8 overflow-hidden  flex card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Backlight Beam */}
        <div
          className="absolute inset-0 rounded-lg blur-md opacity-40"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(170,170,255,0.5), transparent)",
            animation: "beamMove 8s linear infinite",
            backgroundSize: "200%",
          }}
        ></div>

        {/* Scrolling Section */}
        <div
          className="relative overflow-y-scroll h-64 scrollbar-hidden"
          style={{
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For IE and Edge
          }}
        >
          {/* Hidden scroll bar styling */}
          <style>
            {`
              .scrollbar-hidden::-webkit-scrollbar {
                display: none; /* For Chrome, Safari, and Opera */
              }
            `}
          </style>

          <motion.div
            className="text-gray-300 space-y-4 text-sm leading-relaxed"
            animate={{ y: "-100%" }}
            drag="y"
            dragConstraints={{top:-20, bottom:-20}}
            transition={{
              duration: 60, // Super slow scroll duration (60 seconds)
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <p>
              At Reingen, we are passionate about crafting stunning and futuristic
              web experiences that redefine digital excellence. As full-stack web
              designers, we leverage modern frameworks, cutting-edge libraries, and
              forward-thinking tools to build seamless, high-performance, and
              visually captivating websites.
            </p>
            <h2 className="text-blue-400 font-semibold mt-4">Our Core Principles</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Motive:</strong> We aim to create websites that are not just
                functional but immersive, engaging, and impactful.
              </li>
              <li>
                <strong>Drive:</strong> Excellence fuels our work, from microanimations
                to lightning-fast load times.
              </li>
              <li>
                <strong>Ambitions:</strong> We strive to lead the industry in modern web
                development with innovative technologies.
              </li>
              <li>
                <strong>Goals:</strong> Prioritizing seamless performance, aesthetic
                excellence, and user-centric solutions.
              </li>
            </ul>
            <h2 className="text-blue-400 font-semibold mt-4">Our Vision</h2>
            <p>
              To be the go-to innovators in full-stack web design, pioneering
              future-ready solutions that merge aesthetics with state-of-the-art
              functionality.
            </p>
            <h2 className="text-blue-400 font-semibold mt-4">The Reingen Approach</h2>
            <ul className="list-disc ml-6">
              <li>
                <strong>Innovation:</strong> We integrate AI, PWAs, and next-gen UI
                concepts.
              </li>
              <li>
                <strong>Adaptability:</strong> By embracing new frameworks and tools, we
                ensure our solutions are cutting-edge.
              </li>
              <li>
                <strong>Client-Centricity:</strong> Collaboration is at the heart of our
                work, aligning client goals with audience needs.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Header */}
      </motion.div>
    
     </div>
        </div>
    </div>
  );
};

export default ReingenCard;
