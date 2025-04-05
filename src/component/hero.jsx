import React from "react";
import { motion } from "framer-motion";
import ComputersCanvas from "../canvas/herocanvas";
import { Typewriter } from "react-simple-typewriter";

function TypingEffect() {
    return (
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            <Typewriter
                words={["Web Design", "Web Development", "SEO", "UI/UX"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1200}
            />
        </h1>
    );
}
export const Hero = () => {
    return (
        <div className="relative h-[70vh] mb-10 md:h-screen w-full flex justify-center text-white bg-cover bg-center i "
            style={{ backgroundImage: "url('/herobg.png')" }}
        >
            {/* Animated Hero Content */}
            <motion.div
                className="relative flex flex-col gap-4  sm:text-5xl font-bold text-white z-10 container pt-15 md:pt-30 md:pl-15 pl-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <motion.p className="md:text-6xl text-4xl ">Hi, <span className="text-blue-800">I'm a Reingen</span> </motion.p>
                <div className="text-4xl">
                    we do
                </div>
                <motion.div>
                    <TypingEffect />
                </motion.div>

                {/* Call to Action Buttons */}
            </motion.div>
            {/* Background Canvas Animation */}
            <div className="absolute inset-0 z-10">
            </div>
        </div>
    );
};

export default Hero;
