import { projects } from "../constants";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const animations = [
  { x: [-100, 0], opacity: [0, 1] },
  { x: [100, 0], opacity: [0, 1] },
  { y: [-100, 0], opacity: [0, 1] },
  { y: [100, 0], opacity: [0, 1] },
  { rotate: [90, 0], opacity: [0, 1] }
];

const ProjectCard = ({ project, index }) => {
  const animation = animations[index % animations.length];

  return (
    <motion.div
      initial={{
        x: animation.x ? animation.x[0] : 0,
        y: animation.y ? animation.y[0] : 0,
        rotate: animation.rotate ? animation.rotate[0] : 0,
        opacity: 0,
      }}
      animate={{
        x: animation.x ? animation.x[1] : 0,
        y: animation.y ? animation.y[1] : 0,
        rotate: animation.rotate ? animation.rotate[1] : 0,
        opacity: 1,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gray-900  rounded-xl shadow-lg  hover:scale-105 hover:shadow-xl transition-transform"
    >
      <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-white text-lg font-bold mt-3">{project.name}</h3>
      <p className="text-gray-300 mt-1">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span key={idx} className={`${tag.color} text-sm font-semibold`}>
            {tag.name}
          </span>
        ))}
      </div>
      <a
        href={project.source_code_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-blue-400 hover:text-blue-500"
      >
        View Project
      </a>
    </motion.div>
  );
};

export const Projects = () => {
  return (
   <div className="w-full bg-gray-950 items-center flex justify-center">
     <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="bg-gray-950 min-h-screen py-10 px-5 container"
    >
      <h2 className=" text-white text-3xl font-bold mb-10">Projects</h2>
      <VerticalTimeline lineColor="#172554">
        {projects.map((project, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#101828", color: "#3B82F6" }}
            contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
            iconStyle={{ background: "#3b82f6", color: "#fff" }}
            className=""
          >
            <ProjectCard project={project} index={index} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.div>
   </div>
  );
};
