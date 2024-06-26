import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import backgroundImage from "../assets/aboutimg.jpg";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "calc(100vh - 80px)",
  };

  const buttonStyle =
    "w-[200px] mx-auto py-3 px-10 rounded-xl font-bold mt-4 md:text-xl transition ease-in-out hover:scale-105 bg-emerald-400 text-black hover:bg-emerald-500 active:bg-emerald-600";

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="mx-auto flex h-screen w-full max-w-screen-xl flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
          Achieve Your Fitness Goals.
        </h1>
        <div className="mt-4 flex flex-col items-center sm:flex-row text-xl font-bold sm:text-3xl md:text-4xl">
          <p className="mb-2 sm:mb-0 sm:mr-3">
            Effective, Engaging Workouts for
          </p>
          <div className="sm:flex">
            <Typewriter
              words={["Strength", "Cardio", "Flexibility"]}
              loop={0}
              cursor={1}
              typeSpeed={120}
            />
          </div>
        </div>

        <p className="mt-4 w-[90vw] text-xl font-bold text-amber-600 md:text-2xl">
          Track your progress and achieve fitness milestones with our
          comprehensive workouts app.
        </p>
        <Link to="/signup" className={buttonStyle}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
