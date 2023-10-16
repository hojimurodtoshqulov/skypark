import Month from "@/components/month/month";
import AboutUs from "@/components/aboutUs/aboutUs";
import Principle from "@/components/Principle";

const About = () => {
	return (
		<>
				<div style={{ padding: "100px 0 200px" }}>
					<AboutUs />
					<Principle />
					<Month />
				</div>
		</>
	);
};

export default About;
