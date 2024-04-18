import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Instructor } from "./pages/Instructor";
import { ContactUs } from "./pages/ContactUs";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/single-page-app"
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route
						path="/single-page-app/about"
						element={
							<Layout>
								<About />
							</Layout>
						}
					/>
					<Route
						path="/single-page-app/courses"
						element={
							<Layout>
								<Courses />
							</Layout>
						}
					/>
					<Route
						path="/single-page-app/instructor"
						element={
							<Layout>
								<Instructor />
							</Layout>
						}
					/>
					<Route
						path="/single-page-app/contactus"
						element={
							<Layout>
								<ContactUs />
							</Layout>
						}
					/>
					<Route path="single-page-app/signin" element={<Signin />} />
					<Route path="single-page-app/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
