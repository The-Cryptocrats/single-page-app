import React from "react";

export const ContactUs = () => {
	return (
		<div class="flex justify-center items-center w-screen min-h-screen bg-white">
			<div class="container mx-auto pt-4 my-4 px-4 lg:px-20 pb-10">
				{" "}
				<div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
					<div class="flex">
						<h1 class="font-bold uppercase text-5xl ">
							Contact <br />
							Us
						</h1>
					</div>
					<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
						<input
							class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="First Name*"
						/>
						<input
							class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							placeholder="Last Name*"
						/>
						<input
							class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="email"
							placeholder="Email*"
						/>
						<input
							class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
							type="tel"
							placeholder="Phone*"
						/>
					</div>
					<div class="my-4">
						<textarea
							placeholder="Message*"
							class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
						></textarea>
					</div>
					<div class="my-2 w-1/2">
						<button
							class="uppercase text-sm font-bold bg-amritaBlue  hover:bg-amritaGreen text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
						>
							Send Message
						</button>
					</div>
				</div>
				<div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-amritaBlue rounded-2xl">
					<div class="flex flex-col text-white">
						{/* <h1 class="font-bold uppercase text-4xl my-4">Visit Us</h1> */}
						{/* <p class="text-white">About</p> */}

						<div class="flex my-4">
							<div class="flex flex-col">
								<i class="fas fa-map-marker-alt pt-2 pr-2" />
							</div>
							<div class="flex flex-col">
								<h1 class="font-bold text-3xl my-4">Visit Us</h1>
								<p class="text-white">
									Amrita University, <br /> Amritanagar, Ettimadai, <br />
									Tamil Nadu - 641112.
								</p>
							</div>
						</div>

						<div class="flex my-4">
							<div class="flex flex-col">
								<i class="fas fa-phone-alt pt-2 pr-2" />
							</div>
							<div class="flex flex-col">
								<h1 class="font-bold text-3xl my-4">Call Us</h1>
								<p class="text-white">Tel: (0422) 2685 000</p>
								<p class="text-white">Fax: (0422) 2686 274</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
