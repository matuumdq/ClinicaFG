import { Parallax } from "react-parallax";
import Contact from "./Contact";

const ContactPage = () => {
	return (
		<div className="min-h-screen">
			<Parallax
				bgImage="https://images.pexels.com/photos/63572/pexels-photo-63572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				bgImageAlt="the cat"
				strength={400}
				className=""
			>
				<div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center ">
					<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
						Contactanos
					</h2>
				</div>
			</Parallax>
			<Contact />
		</div>
	);
};

export default ContactPage;
