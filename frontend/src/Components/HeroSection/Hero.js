
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import WAYNE from '../../Assets/WAYNE.jpg';
import { FaFacebookF, FaInstagram, FaJs, FaNode, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMongodb, SiSequelize } from "react-icons/si";

const Hero = () => {
  return (
    <section className="bg-gray-700 py-16 px-6 w-full flex justify-center items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-16">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-8 lg:mb-0 border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg">
          <img
            src={WAYNE}
            alt="wayne's-profile"
            className="w-full h-80 object-cover lg:w-96 lg:h-[28rem]"
          />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left max-w-5xl">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-200 leading-tight">
            Hi, I'm <span className="text-blue-600">WAYNE MARWA</span>
          </h1>
          <p className="text-3xl font-bold text-blue-500 mt-2">
            <span className='font-bold text-5xl text-gray-200 mr-3'>a</span>
            <Typed
              strings={[
                'Web Developer',
                'React Developer',
                'Front End Developer',
                'Full Stack Developer',
                'Software Engineer',
                'Mobile App Developer',
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </p>
          <p className="mt-6 text-lg font-semibold text-gray-100 leading-relaxed">
            I am a versatile web developer skilled in crafting innovative and visually captivating websites.
            With a strong grasp of modern web standards and user-centered design principles,
            I thrive on delivering solutions that are not only functional but also intuitive and visually appealing.
            My passion lies in building seamless digital experiences that resonate with diverse audiences.
          </p>
          <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-14'>
            <div className='mt-10'>
              <h1 className='font-bold text-gray-200 text-2xl'>Link With Me</h1>
              <div className='mt-4 flex justify-center lg:justify-start space-x-6'>
                <a href='https://facebook.com' className='w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><FaFacebookF className='text-blue-700 text-4xl' /></a>
                <a href='https://instagram.com' className='w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><FaInstagram className='text-red-500 text-4xl' /></a>
                <a href='https://x.com' className='w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><FaXTwitter className='text-black text-4xl' /></a>
              </div>
            </div>
            <div className='mt-10'>
              <h1 className='font-bold text-gray-200 text-2xl'>Best Skilled On</h1>
              <div className='mt-4 flex justify-center lg:justify-start space-x-6'>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><FaReact className='text-blue-500 text-4xl' /></div>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><FaJs className='text-yellow-500 text-4xl' /></div>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><FaNode className='text-green-600 text-4xl' /></div>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><SiMongodb className='text-green-900 text-4xl' /></div>
                <div className='w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shadow hover:bg-gray-300 transition'><SiSequelize className='text-orange-500 text-4xl' /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
