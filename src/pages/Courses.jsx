import React from "react";
import { courses } from "../assets/data/Data";
import { FaBook, FaDatabase } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Courses = () => {
	return (
		<>
			<section className="courses bg-[#F3F4F8] py-10">
				<div className="w-4/5 m-auto">
					<div className="heading mb-16">
						<h1 className="text-3xl font-semibold text-black">
							Find The Right <br />
							Course For You
						</h1>
						<span className="text-sm mt-2 block">
							You don't have to struggle alone, you've got our assistance and
							help.
						</span>
					</div>
					<div className="grid grid-cols-3 gap-8 md:grid-cols-1">
						{courses.map((item) => (
							<div
								key={item.id}
								className="box rounded-lg shadow-shadow1 bg-white"
							>
								<div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
									<img
										src={item.cover}
										alt=""
										className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
									/>
									<div className="categ flex gap-4 absolute top-0 m-3">
										<span className="text-[14px] bg-amritaBlue p-1 px-3 text-white rounded-[5px] shadow-md">
											Beginners
										</span>
										<span className="text-[14px] bg-amritaRed p-1 px-3 text-white rounded-[5px] shadow-md">
											{item.tag}
										</span>
									</div>
								</div>
								<div className="text p-3">
									<div className="flex justify-between items-center">
										<div className="flex items-center">
											<FaBook />
											<span className="text-[14px] ml-2">{item.lessons}</span>
										</div>
										<div className="flex items-center">
											<FaDatabase className="text-amritaOrange" />
											<span className="text-[14px] ml-2">{item.ccode}</span>
										</div>
									</div>
									<h3 className="text-black my-4 font-medium h-10">
										{item.title}
									</h3>
									<div className="user flex items-center">
										<img
											className="rounded-full"
											src="/single-page-app/images/default-profile.png"
											alt=""
										/>
										<span className="text-[14px] ml-2">{item.instructor}</span>
									</div>
								</div>
								<div
									to="/"
									className="flex items-center justify-between border-t border-gray-200 p-3"
								>
									<span className="text-sm text-amritaRed"></span>
									<NavLink
										to="/single-page-app/signin"
										className="text-[14px] text-amritaRed ml-2 flex items-center"
									>
										Know Details <HiOutlineArrowNarrowRight />
									</NavLink>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
