import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import ButtonLink from './ButtonLink';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
					<p className='mt-3 text-xl'>I love to learn and build software applications.</p>
					<p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hi, I'm <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/nithin-manda-728019214/' target='_blank'>Ashish Renuse</a>, a passionate and driven computer engineer graduate with a strong foundation in backend systems, web development, and data science. With hands-on experience as a Frontend Web Developer Intern and a history of successful freelance projects, including a live website for A5 Fitness Gym, I specialize in creating scalable, optimized, and user-friendly solutions.
              		<br/>
              		</p>
			  	<ButtonLink url='https://drive.google.com/file/d/1TdffRCWa2wl7c19khdCg3CqL9bA5HN9W/view?usp=sharing' text='View Resume →' padding={`p-3`}/>
				</div>      
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;