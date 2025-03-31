import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fransic Juma",
    feedback: "I wanted something sleek, interactive and truely unique , reingen delivered beyond expactations , the animations, smooth UI and overal user experience made my portfolio stand out in ways i never imagined",
    role: "Chief Consaultant",
    company: "Fransisco Designs",
  },
  {
    name: "Martin Kudondo",
    feedback: "Wanted a portfolio  that did not just display my work but immerse clientsin my world. reingen crafted a 3D-driven, visually stricking experience that feels alive ! the depth , motiiion and attention to detail make it a masterpiece.This isnt just a website it's an experience",
    role: "Lead Developer",
    company: "InnovateX",
  },
  {
    name: "Noah Watch-Only-Wallet",
    feedback: "Luxary meets functionality , the design captured the essence of high-end watch wallet while keeping everything seamless and responsive, every little detail was crafted with precision",
    role: "Blockchain Expert",
    company: "Noa Watch-Only-Wallet Solutions",
  },
  {
    name: "krypton",
    feedback: "Absolutely blown away, reingen did not just build website,they created a whole experience. The 3D element , smooth transitions and insane attention to detail made my brand looks futuristic and premium...best investment",
    role: "Project Manager",
    company: "BuildTech",
  },
];

const TestimonialCard = ({ name, feedback, role, company }) => {
  return (
    <motion.div
      className="relative p-4 w-full md:w-[450px] h-[350px] bg-gray-900 rounded-xl border-2 border-gradient shadow-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 border-[3px] border-blue-500 blur-md animate-spin-slow rounded-xl"></div>
      <div className="relative p-4 h-full flex flex-col justify-between text-white">
        <motion.h3
          className="text-lg font-bold text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {name}
        </motion.h3>
        <div
          className="h-[100px]  text-sm"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {feedback}
        </div>
        <p className="text-xs text-gray-400">{role} at {company}</p>
      </div>
    </motion.div>
  );
};

export const Testimonial = () => {
  return (
   <div className="bg-gray-950 ">
     <div className="flex flex-wrap justify-center gap-6 py-20 px-2 bg-gray-950">
    <div className="container pl-5  text-lg font-bold bg-gray-950 text-white">
    <p className="text-4xl">Testimonials</p>
    </div>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
   </div>
  );
};
