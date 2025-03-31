import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'
import { Typewriter } from "react-simple-typewriter";

function TypingEffect() {
    return (
        <h1 className="text-lg sm:text-xl  text-white">
            <Typewriter
                words={[`I’m ready to solve problems and deliver excellence in every project.`, "Web Development", "SEO", "UI/UX"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={0}
                delaySpeed={2000}
            />
        </h1>
    );
}

export default function EducationCard() {
  return (
  <div className="flex justify-center bg-gray-950 mt-10">
      <div className="flex justify-center items-center  bg-gray-950  container min-h-[70vh] flex-col pt-6 md:pt-0 px-5 md:px-0 gap-y-15">
        <div className="font-bold text-4xl text-white container">
          <p>My education</p>
        </div>
      {/* Education Card */}
      <Tilt>
      <motion.div
      className="text-white px-2 max-w-5xl md:p-4 border border-gray-900 rounded-lg relative md:text-lg bg-gradient-to-r from-gray-700 to-gray-900 before:content-[''] before:absolute before:-top-1 before:-bottom-1 before:-left-1 before:right-0 before:bg-white before:-z-1 before:rounded-2xl after:absolute after:-top-1 after:-bottom-1 after:-left-1 after:-right-1 after:bg-amber-50 after:-z-1 after:rounded-lg hover:after:blur-lg"
      >
        <p>
          Hello! My name is Reinhard, an accomplished Electrical and Electronic
          Engineer with a Bachelor's degree from the Technical University of Mombasa.
          My academic foundation provides a strong technical background, enabling me
          to approach challenges with an analytical and creative perspective.
        </p>
        <p>
          In addition to my engineering degree, I am a dedicated Fullstack Web Developer
          trained extensively through prestigious online platforms such as SimpliLearn,
          Great Learning, and SuperSimpleDevs. My journey into web development has equipped
          me with MEARN stack expertise, combining modern front-end frameworks like React.js
          and TailwindCSS with robust back-end technologies such as Node.js and MongoDB.
        </p>
        <div>
          My commitment to continuous learning and technical innovation drives my passion
          for creating intuitive, scalable, and impactful solutions. With my unique blend
          of engineering and web development expertise, 
          <TypingEffect/>
        </div>
      </motion.div>

      </Tilt>
    
    </div>
  </div>
  );
}
