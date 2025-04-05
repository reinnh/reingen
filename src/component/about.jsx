import React from "react";
export default function AboutMeCard() {
  return (
    <div className=" flex justify-center bg-gray-950 my-5  border-white "
    id="about">
      <div className="flex container flex-col gap-y-5 justify-center items-center md:h-[60vh]  h-[70vh] p-2 md:p-0 ">
        <div className="text-white text-4xl font-bold w-full">
          <p>Overview</p>
        </div>
        <div className="text-white text-lg font-[arial]">
          <div className="flex flex-col max-w-6xl text-[16px]">
            <p>
            Hello! My name is Reinhard, 
            </p>
            <p>I'm a dedicated Fullstack Developer
            with a strong passion for crafting high-quality web applications
            that are both scalable and efficient.</p>
            <p>
            My expertise spans from
            designing sleek, responsive user interfaces with technologies like
            React.js and TailwindCSS to implementing robust server-side solutions
            using Node.js and Express.js.
            </p>
            <p>
            I am experienced in integrating
            MongoDB for efficient data management and deploying applications
            seamlessly with tools like Netlify and GitHub. My commitment to
            innovation, problem-solving, and continuous learning defines my
            journey as a developer. Let’s collaborate and create something
            truly extraordinary!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
