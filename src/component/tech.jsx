import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
  { name: "JavaScript", icon: <FaJs />, level: 85 },
  { name: "React.js", icon: <FaReact />, level: 80 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 85 },
  { name: "Git", icon: <FaGitAlt />, level: 90 },
  { name: "GitHub", icon: <FaGithub />, level: 85 },
  { name: "Netlify", icon: <SiNetlify />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs />, level: 80 },
  { name: "Express.js", icon: <SiExpress />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, level: 70 },
];

export default function DevCard() {
  return (
    <div className="flex justify-center items-center bg-gray-900  w-70 ">
      <Tilt
        className="p-5 relative rounded-xl shadow-lg max-w-sm bg-gray-900 bg-opacity-90"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        {/* Pulsating Backlight using inline styles */}
        <div
          className="absolute inset-0 rounded-xl blur-lg opacity-75 bg-gradient-to-r from bg-gray-500 via-purple-500 to-amber-500 animate-[pulse_3s_infinite]"
          style={{
            animation: "pulse 3s infinite",
            "@keyframes pulse": `
              0%, 100% { opacity: 0.5; filter: blur(1px); }
              50% { opacity: 1; filter: blur(1px); }
            `,
          }}
        ></div>

        <motion.div
          className="text-center relative z-10  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        

          {/* Skills Section */}
          <div className="grid grid-cols-3 gap-3 mt-4 text-gray-200">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="text-sm mt-1">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
}
