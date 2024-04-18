import React, { useState } from "react";
import LogoImg from "../assets/images/amrita-logo-full.svg";
import { LinkData } from "../assets/data/Data";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const Header = () => {
	const [open, setOpen] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
			<div className="container flex justify-between items-center">
				{/* <div> */}
				<NavLink to="/single-page-app/" onClick={scrollToTop}>
					<img
						src={LogoImg}
						alt="logo"
						className="logo flex justify-start h-12"
					/>
				</NavLink>
				{/* </div> */}
				<div className="flex items-center gap-5 md:py-3">
					<nav className={open ? "mobile-view" : "desktop-view"}>
						<ul className="flex items-center gap-6">
							{LinkData.map((link) => (
								<li
									key={link.id}
									onClick={() => {
										setOpen(false);
										scrollToTop();
									}}
								>
									<NavLink
										className={({ isActive }) =>
											// Hack: ignore Home
											isActive && link.id > 1
												? "text-amritaBlue text-sm"
												: "text-[15px]"
										}
										to={link.url}
									>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					{/* <div className="account flex items-center gap-5"> */}
					<NavLink to="/single-page-app/signin">
						<button className="text-amritaRed hover:text-amritaYellow">
							Login/Signup
						</button>{" "}
					</NavLink>
					<button className="open-menu" onClick={() => setOpen(!open)}>
						{open ? <HiOutlineX size={25} /> : <HiOutlineMenu size={25} />}
					</button>
					{/* </div> */}
				</div>
			</div>
		</header>
	);
};
