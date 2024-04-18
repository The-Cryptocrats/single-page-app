import React from "react";
import heroImg from "../assets/images/hero-cultural-education-about-kochi-cropped.png";
import heroImgback from "../assets/images/hero-shape-yellow.svg";
import { FiSearch } from "react-icons/fi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";

export const Home = () => {
	return (
		<>
			<HomeContent />
			<About />
			<Courses />
			<Instructor />
		</>
	);
};

export const HomeContent = () => {
	return (
		<>
			<section className="bg-amritaRed py-10 h-[92vh] md:h-full">
				<div className="container">
					<div className="flex items-center justify-center md:flex-col">
						<div className="left w-1/2 text-black md:w-full">
							<h1 className="text-4xl leading-tight text-white font-semibold">
								Learn from India's <br /> Top Ranked <br />
								University
							</h1>
							<h2 className="text-white text-lg mt-3">
								Discover your true potential
							</h2>
							<span className="text-[14px] text-white">
								Explore endless opportunities <br />
								for personal growth{" "}
							</span>
							<div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
								<input
									type="search"
									className="py-3 text-sm  bg-white rounded-md pl-10 focus:outline-none focus:border-amritaYellow focus:ring-0"
									placeholder="Search..."
									// autocomplete="off"
								/>
								<span className="absolute inset-y-0 left-0 flex items-center pl-2">
									<button
										type="submit"
										className="p-1 focus:outline-none focus:shadow-outline"
									>
										<FiSearch />
									</button>
								</span>
							</div>
						</div>
						<div className="right w-1/2 md:w-full relative">
							<div className="images relative">
								<img
									src={heroImgback}
									alt=""
									// className=" absolute top-32 left-20 w-96 md:left-10"
									className="absolute top-1/3 left-30 w-full z-10"
								/>
								<div className="img h-[85vh] w-full">
									<img
										src={heroImg}
										sizes=""
										alt=""
										className="h-full w-full object-contain relative z-20"
									/>
								</div>
							</div>
							<div className="content">
								{/* <button className="bg-white shadow-md absolute bottom-12 right-20 z-30 p-2 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-indigo-400">
                    <FaBookReader size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">Free Resources</span>
                    <span className="text-[12px]">
                      Download Videos & Books!
                    </span>
                  </div>
                </button> */}
								<button className="bg-white shadow-md absolute top-2/3 left-10 z-30 p-2 flex items-center rounded-md">
									<div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
										<BsFillLightningChargeFill size={25} />
									</div>
									<div className="text flex flex-col items-start px-4">
										<span className="text-sm text-black">You got the job!</span>
										<span className="text-[12px]">
											Congratulations on placement!
										</span>
									</div>
								</button>
								{/* <button className="bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400">
                    <FaGraduationCap size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">100K+ Students</span>
                    <span className="text-[12px]">
                      Empower Minds to success
                    </span>
                  </div>
                </button> */}
								{/* <button className="bg-white shadow-md absolute top-56 -right-32 z-30 p-2  md:top-96 md:-right-5 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                    <FaUsers size={25} />
                  </div>
                  <div className="text flex flex-col items-start px-4">
                    <span className="text-sm text-black">
                      User Experience Class
                    </span>
                    <span className="text-[12px]">
                      You have completed the course!
                    </span>
                  </div>
                </button> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
