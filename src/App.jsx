import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import { Hero } from "./component/hero";
import AboutMeCard from "./component/about";
import { Projects } from "./component/projects";
import { Testimonial } from "./component/testimonials";
import Timeline from "./component/works";
import { ContactCard } from "./component/contact";
import { Footer } from "./component/footer";
import ReingenCard from "./component/reingencard";
import EducationCard from "./component/education";
import Dashboard from "./component/adnin";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Dashboard at /dashboard */}
        <Route path="/das" element={<Dashboard />} />

        {/* Default route for everything else */}
        <Route
          path="/"
          element={
            <div className="bg-black pt-15 overflow-x-hidden">
              <Navbar />
              <Hero />
              <AboutMeCard />
              <EducationCard />
              <Timeline />
              <Projects />
              <ReingenCard />
              <Testimonial />
              <div className="relative z-0 bg-black">
                <ContactCard />
                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
