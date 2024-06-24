import React from 'react';
import Hero from "./aboutcomponents/Hero";
import Analytics from "./aboutcomponents/Analytics";
import Newsletter from "./aboutcomponents/Newsletter";
import Cards from "./aboutcomponents/Cards";

const About = () => {
    return (
        <div className="bg-gray-950">
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
      </div>
    );
};

export default About;
