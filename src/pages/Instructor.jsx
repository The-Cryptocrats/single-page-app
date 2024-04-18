import React from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiBookshelf, GiWorld } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export const Instructor = () => {
	return (
		<>
			<section className="instructor mb-16">
				<div className="container">
					<div className="heading py-12 text-center w-2/3 m-auto md:w-full">
						<h1 className="text-3xl font-semibold text-black">
							What is Amrita Elective Management?
						</h1>
						<span className="text-[14px] mt-2 block">
							Amrita Elective Management System is a platform designed to
							facilitate the selection of Electives and Soft-Core Courses for
							students. It allows students to access a variety of elective
							courses available for the semester. The system assigns courses
							based on instructors' preferences and students' branches. Students
							have the option to choose the elective courses they wish to enroll
							in for the semester through this platform.
						</span>
					</div>
					<div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
						<div className="images rounded-lg relative overflow-hidden h-72 w-ful before:bg-amritaPalePink before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
							<img
								src="/single-page-app/images/join.jpg"
								alt=""
								className="rounded-t-lg object-cover w-full h-72"
							/>
							<div className="categ flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 m-3 p-8 items-center justify-center text-center">
								<h2 className="text-3xl text-white font-semibold">
									Join Amrita Now
								</h2>
								<NavLink to="/single-page-app/signup">
									<button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white hover:bg-white hover:text-black ">
										Register
									</button>
								</NavLink>
							</div>
						</div>
						<div className="images rounded-lg relative overflow-hidden h-72 w-ful before:bg-amritaPalePink before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
							<img
								src="/single-page-app/images/collaborate.jpg"
								alt=""
								className="rounded-t-lg object-cover w-full h-72 relative"
							/>
							<div className="categ flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 m-3 p-8 items-center justify-center text-center">
								<h2 className="text-3xl text-white font-semibold">
									Choose your Course
								</h2>
								<NavLink to="/single-page-app/signin">
									<button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white hover:bg-white hover:text-black">
										Sign in
									</button>
								</NavLink>
							</div>
						</div>
					</div>
					<div className="content">
						<div className="heading py-12 text-center w-2/3 m-auto md:w-full">
							<h1 className="text-3xl font-semibold text-black">
								Explore Amrita
							</h1>
							<span className="text-[14px] mt-2 block">
								Ranked 7th best university in India by NIRF 2023, Amrita is a
								NAAC A++ grade university spread across 8 campuses in 5 states.
							</span>
						</div>
						<div className="content grid grid-cols-4 gap-5 md:grid-cols-2">
							<InstructorCard
								color="text-red-500"
								icon={<FaUsers size={40} />}
								title="100K"
								desc="Students Enrolled"
							/>
							<InstructorCard
								color="text-orange-500"
								icon={<GiBookshelf size={40} />}
								title="200+"
								desc="Total Courses"
							/>
							<InstructorCard
								color="text-purple-500"
								icon={<FaGraduationCap size={40} />}
								title="100+"
								desc="Expert Instructors"
							/>
							<InstructorCard
								color="text-indigo-500"
								icon={<GiWorld size={40} />}
								title="500K+"
								desc="Passouts"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export const InstructorCard = (props) => {
	return (
		<div className={`box p-5 py-5 rounded-md`}>
			<div className={`${props.color}`}>{props.icon}</div>
			<div className="text mt-2">
				<h4 className="text-lg font-semibold text-black">{props.title}</h4>
				<p className="text-[15px]">{props.desc}</p>
			</div>
		</div>
	);
};
