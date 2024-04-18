import React from "react";
import LoginBanner from "../assets/images/banner.jpg";

export const Signin = () => {
	return (
		<div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
			<div className="flex shadow-md">
				<div
					className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
					style={{ width: "24rem", height: "32rem" }}
				>
					<div className="w-72">
						<h1 className="text-xl font-semibold">Welcome </h1>
						<small className="text-gray-400">Please enter your details</small>

						<form className="mt-4">
							<div className="mb-3">
								<label className="mb-2 block text-xs font-semibold">
									Email
								</label>
								<input
									type="email"
									placeholder="Enter your email"
									className="block w-full rounded-md border border-gray-300 focus:border-amritaBlue focus:outline-none focus:ring-1 focus:ring-amritaBlue py-1 px-1.5 text-gray-500"
									required
								/>
							</div>

							<div className="mb-3">
								<label className="mb-2 block text-xs font-semibold">
									Password
								</label>
								<input
									type="password"
									placeholder="*****"
									className="block w-full rounded-md border border-gray-300 focus:border-amritaBlue focus:outline-none focus:ring-1 focus:ring-amritaBlue py-1 px-1.5 text-gray-500"
									required
								/>
							</div>

							<div className="mb-3 flex flex-wrap content-center">
								<input
									id="remember"
									type="checkbox"
									className="mr-1 checked:bg-amritaBlue"
								/>{" "}
								<label
									htmlFor="remember"
									className="mr-auto text-xs font-semibold"
								>
									Remember me
								</label>
								<a href="#" className="text-xs font-semibold text-amritaBlue">
									Forgot password?
								</a>
							</div>

							<div className="mb-3">
								<button className="mb-1.5 block w-full text-center text-white bg-amritaBlue hover:bg-amritaGreen px-2 py-1.5 rounded-md">
									Sign in
								</button>
							</div>
						</form>

						<div className="text-center">
							<span className="text-xs text-gray-400 font-semibold">
								Don't have account?{" "}
							</span>
							<a
								href="/single-page-app/signup"
								className="text-xs font-semibold text-amritaRed"
							>
								Sign up
							</a>
						</div>
					</div>
				</div>

				<div
					className="flex flex-wrap content-center justify-center rounded-r-md"
					style={{ width: "24rem", height: "32rem" }}
				>
					<img
						className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
						src={LoginBanner}
						alt="Login Banner"
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
};
