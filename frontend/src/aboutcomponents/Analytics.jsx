import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import WorkoutImage from "../assets/analyticsimg.jpg";
import backgroundImage from "../assets/aboutimg.jpg"; // Adjust with the correct image path

const Analytics = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const buttonStyle =
    "w-[200px] mx-auto py-3 px-10 rounded-xl font-bold mt-4 md:text-xl transition ease-in-out hover:scale-105 bg-emerald-400 text-black hover:bg-emerald-500 active:bg-emerald-600";

  return (
    <div className="w-full bg-white px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <img
          className="mx-auto my-4 w-[500px]"
          src={WorkoutImage}
          alt="Workout"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-emerald-400">
            Fitness Analytics Dashboard
          </p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Track Your Fitness Progress
          </h1>
          <p className="mt-2 text-black">
            Monitor your workout data to optimize performance and achieve your
            fitness goals. Whether it's strength training, cardio, or
            flexibility exercises, our app helps you stay on track.
          </p>
          <div className="self-center">
            <Link to="/signup" className={buttonStyle}>
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
