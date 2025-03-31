import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, Code } from "lucide-react";

const experiences = [
  {
    title: "Personal Web Development",
    date: "Sep 2024 - Current",
    description: [
      "Designed and developed personal web projects to showcase skills in front-end development.",
      "Built and maintained a personal portfolio to demonstrate expertise in modern web technologies."
    ],
    icon: <Code size={20} />, // Adjust icon as needed
  },
  {
    title: "Freelance Web Development",
    date: "May 2024 - Sep 2024",
    description: [
      "Provided customized web solutions for small businesses and individual clients.",
      "Managed full-stack development from requirements gathering to deployment.",
      "Used React.js, Node.js, and Express to build dynamic web applications."
    ],
    icon: <Briefcase size={20} />,
  },
  {
    title: "Collaborative Projects",
    date: "June 2023 - July 2023",
    description: [
      "Worked as part of a team to develop web applications, contributing to both front-end and back-end development.",
      "Used Git for version control and collaborated effectively with team members through GitHub."
    ],
    icon: <Code size={20} />,
  },
];

export default function WorkExperience() {
  return (
    <section className="py-10 text-white w-full bg-gray-950 my-10" id="work">
      <div className="container bg-gray-950 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold  mb-8"
        >
          Work Experience
        </motion.h2>

        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#1E1E1E", color: "#fff", borderRadius: "10px"  }}
              contentArrowStyle={{ borderRight: "7px solid #1E1E1E" }}
              date={exp.date}
              icon={
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-600 p-3 rounded-full flex items-center justify-center"
                >
                  {exp.icon}
                </motion.div>
              }
              className={index % 2 === 0 ? "vertical-timeline-element--work" : "vertical-timeline-element--work"}
            >
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold mb-2"
              >
                {exp.title}
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="list-disc pl-5 flex flex-col gap-y-7"
              >
                {exp.description.map((point, i) => (
                  <li key={i} className="mb-1">{point}</li>
                ))}
              </motion.ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}


































































