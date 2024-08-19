import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hi, I'm <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/nithin-manda-728019214/' target='_blank'>Ashish Renuse</a>, a passionate and driven computer engineer graduate with a strong foundation in backend systems, web development, and data science. With hands-on experience as a Frontend Web Developer Intern and a history of successful freelance projects, including a live website for A5 Fitness Gym, I specialize in creating scalable, optimized, and user-friendly solutions.
              <br/>
              </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1TdffRCWa2wl7c19khdCg3CqL9bA5HN9W/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
      
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {/* 
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
            */}
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;