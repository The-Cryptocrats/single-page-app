import React from "react";
import LogoImg from "../assets/images/amrita-logo-full.svg";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Footer = () => {
	return (
		<>
			<section className="app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-amritaRed mt-16 relative z-10">
				<div className="left w-[60%] md:w-full p-10">
					<h1 className="text-4xl font-semibold leading-tight">
						Start learning by <br /> Downloading MyAmrita
					</h1>
				</div>
				<div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-amritaYellow md:bg-transparent md:p-8">
					<div className="box flex gap-2 items-center px-5 py-3 2  border-gray-50 bg-white text-black rounded-sm">
						<BsApple />
						<label className="text-sm">App Store</label>
					</div>
					<div
						className="box flex gap-2 items-center px-5 py-3   border-gray-50 bg-white text-black hover:bg-amritaRed hover:text-white  rounded-sm"
						onClick={() =>
							window.open(
								"https://play.google.com/store/apps/details?id=com.myamrita.facultyamrita&pcampaignid=web_share",
								"_blank",
							)
						}
					>
						<BsGooglePlay />
						<label className="text-sm">Play Store</label>
					</div>
				</div>
			</section>
			<footer className="bg-[#F3F4F8] py-10 pt-32 -mt-24">
				<div className="container grid grid-cols-4 gap-5 md:grid-cols-2">
					<div className="logo">
						<img src={LogoImg} alt="logImg" className="h-12" />
						<br></br>
						<span className="text-[14px]">
							Amrita Vishwa Vidyapeetham is a multi-campus, multi-disciplinary
							research academia that is accredited 'A++' by NAAC and is ranked
							as one of the best research institutions in India.
						</span>
					</div>

					<li>
						<h4 className="text-black text-sm font-semibold mb-5">
							More about Amrita
						</h4>
						<NavLink to="#" className=" text-[14px] block mb-2 ">
							Contact
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Blog
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Our team
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							FAQ
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Latest news
						</NavLink>
					</li>
					<li>
						<h4 className="text-black text-sm font-semibold mb-5">Platform</h4>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Shop
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Pricing
						</NavLink>
					</li>
					<li>
						<h4 className="text-black text-sm font-semibold mb-5">Subscribe</h4>
						<NavLink to="#" className=" text-[14px] block mb-2">
							About us
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Contact
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Reviews
						</NavLink>
						<NavLink to="#" className=" text-[14px] block mb-2">
							Services
						</NavLink>
					</li>
				</div>
			</footer>
		</>
	);
};
