import React from "react";
import aboutImg from "../assets/images/about.jpg";
import { FaLightbulb, FaBookOpen, FaPlayCircle, FaUsers } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const About = () => {
	return (
		<>
			<section className="about">
				<div className="container">
					<div className="heading text-center py-12">
						<h1 className="text-3xl font-semibold text-black">
							Choose Electives and Soft Core Courses for your semester.
						</h1>
						<span className="text-sm mt-2 block">
							You can choose Electives allocated by Instructors!
						</span>
					</div>
					<div className="grid grid-cols-4 gap-5 mt-5 md:grid-cols-2">
						<AboutCard
							color="bg-amritaYellow"
							text="black"
							icon={<FaLightbulb size={50} />}
							title="Learn New Skills"
							desc="Explore courses, gain new skills."
						/>
						<AboutCard
							color="bg-amritaRed"
							text="white"
							icon={<FaBookOpen size={50} />}
							title="Earn Certs"
							desc="Advance career with Certs."
						/>
						<AboutCard
							color="bg-amritaBlue"
							text="white"
							icon={<FaUsers size={50} />}
							title="Connect with Experts"
							desc="Learn from professionals, join TAG."
						/>
						<AboutCard
							color="bg-amritaGreen"
							text="white"
							icon={<FaPlayCircle size={50} />}
							title="Enjoy Flexible Learning"
							desc="Learn with Online Modules"
						/>
					</div>
				</div>
			</section>
			<AboutContent />
		</>
	);
};

export const AboutCard = (props) => {
	return (
		<div
			className={`box shadow-md p-5 py-8 rounded-md text-${props.text} ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
		>
			<div className="icon">{props.icon}</div>
			<div className="text mt-5">
				<h4 className="text-lg font-semibold my-3">{props.title}</h4>
				<p className="text-sm">{props.desc}</p>
			</div>
		</div>
	);
};

export const AboutContent = () => {
	return (
		<section className="mb-16 py-16">
			<div className="container flex md:flex-col">
				<div className="left w-1/2 md:w-full mr-8 md:mr-0 relative">
					<img src={aboutImg} alt="aboutImg" className=" rounded-xl" />
				</div>
				<div className="right w-2/3 md:w-full md:mt-16">
					<div className="heading w-4/5 md:w-full">
						<h1 className="text-3xl font-semibold text-black">
							Achieve Your Goals With Amrita!
						</h1>
						<span className="text-sm mt-2 block leading-6">
							{" "}
							Welcome to Amrita Vishwa Vidyapeetham, Immerse yourself in a realm
							of meticulously crafted programs tailored for success. At Amrita
							University, we fuse innovation with education, presenting a
							vibrant platform where ambitions soar. Embark with us on a voyage
							of perpetual advancement, where education intersects with
							excellence. Your journey towards a promising future commences here
							– unleash your potential with Amrita!
						</span>
						<ul className="my-5">
							<li className="text-sm flex items-center gap-5">
								<AiOutlineCheck className="text-amritaGreen" />
								Premier facilities, Expert Instructors, Transformative Learning.
							</li>
							<li className="text-sm flex items-center gap-5 my-2">
								<AiOutlineCheck className="text-amritaGreen" />
								Discover a diverse array of over 200+ courses.
							</li>
							<li className="text-sm flex items-center gap-5">
								<AiOutlineCheck className="text-amritaGreen" />
								Acquire the latest, cutting-edge skills for your journey ahead.
							</li>
						</ul>
						<NavLink to="/single-page-app/signup">
							<button className="px-5 py-2  bg-amritaRed text-white  hover:bg-amritaYellow hover:text-black rounded-md text-sm">
								Apply Now
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};
