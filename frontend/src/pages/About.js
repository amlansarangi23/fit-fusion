import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };


    return (
        <>
            <div className="relative text-center">
                <img className="w-[100vw] opacity-80" src="/aboutimg.jpg" alt="Fitness" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="sm:text-[2rem] md:text-[3rem] text-white font-bold">Fitness and Body App</h1>
                    <h2 className="sm:text-[1rem] md:text-[2rem] text-white font-bold">Shape Your Body</h2>
                    <Link to="/signup" className="text-slate-300 bg-slate-800 text-sm md:text-xl mt-5 p-4 rounded-md border-2 border-white hover:bg-slate-600">
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-4/5 h-auto sm:h-40 rounded-md m-auto my-9">
                <div className="bg-slate-400 text-black w-full sm:w-1/2 p-5 sm:rounded-l-md sm:border-r-2 border-black text-right sm:text-left">
                    <h1 className="text-md lg:text-2xl">Body Building</h1>
                    <p>Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores</p>
                    <button className="mt-8 bg-slate-700 p-2 hover:bg-slate-500 duration-100 rounded-sm text-white">Know more</button>
                </div>
                <div className="bg-slate-700 text-white w-full sm:w-1/2 p-5 sm:rounded-r-md text-left">
                    <h1 className="text-md lg:text-2xl">Muscle Building</h1>
                    <p>Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut diam sit dolores</p>
                    <button className="mt-8 bg-slate-400 p-2 hover:bg-slate-500 duration-100 rounded-sm text-black">Know more</button>
                </div>
            </div>

            <h1 className="text-3xl text-slate-900 bold text-center pt-10 ">Meet Our Expert Trainers</h1>
            <div className="slider-container">
                <Slider {...settings} className="w-[70%] m-auto pb-10 text-center">
                    <div className="p-3 ">
                        <img src="https://picsum.photos/400/400" className="border-4 border-slate-800"></img>
                        <h3 className="text-white text-lg pt-2 pb-4 rounded-b-lg bg-slate-900">Trainer 1</h3>
                    </div>
                    <div className="p-3 ">
                        <img src="https://picsum.photos/400/400" className="border-4 border-slate-800"></img>
                        <h3 className="text-white text-lg pt-2 pb-4 rounded-b-lg bg-slate-900">Trainer 2</h3>
                    </div>
                    <div className="p-3">
                        <img src="https://picsum.photos/400/400" className="border-4 border-slate-800"></img>
                        <h3 className="text-white text-lg pt-2 pb-4 rounded-b-lg bg-slate-900">Trainer 3</h3>
                    </div>
                    <div className="p-3 ">
                        <img src="https://picsum.photos/400/400" className="border-4 border-slate-800"></img>
                        <h3 className="text-white text-lg pt-2 pb-4 rounded-b-lg bg-slate-900">Trainer 4</h3>
                    </div>
                </Slider>
            </div>

            <div className="text-center text-white bg-slate-800 bg-opacity-80 py-6">
                <h2 className="text-xl">Why choose us?</h2>
                <h1 className="text-3xl mt-4">Push Your Limits Forward</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-evenly m-auto bg-slate-800 xl:px-20 text-white pb-14 mb-10 bg-opacity-80">
                <div className="w-[50%] text-center m-auto mt-4">
                    <img className="rounded-full m-auto mb-5" src="https://picsum.photos/150/150" />
                    <h2 className="text-xl semibold mb-4">Modern Equipment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                </div>
                <div className="w-[50%] text-center m-auto mt-4">
                    <img className="rounded-full  m-auto mb-5" src="https://picsum.photos/150/150" />
                    <h2 className="text-xl semibold mb-4">Modern Equipment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                </div>
                <div className="w-[50%] text-center m-auto mt-4">
                    <img className="rounded-full  m-auto mb-5" src="https://picsum.photos/150/150" />
                    <h2 className="text-xl semibold mb-4">Modern Equipment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                </div>
                <div className="w-[50%] text-center m-auto mt-4">
                    <img className="rounded-full m-auto mb-5" src="https://picsum.photos/150/150" />
                    <h2 className="text-xl semibold mb-4">Modern Equipment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                </div>
            </div>

            <div className="m-10">
                <iframe className="w-[100%] lg:w-[50%] h-[20rem]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28043.902939255855!2d77.11789537431642!3d28.525052200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f7530181879%3A0x2ade7fe21d9c63a1!2sAnytime%20Fitness!5e0!3m2!1sen!2sin!4v1718032037580!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
};

export default About;
