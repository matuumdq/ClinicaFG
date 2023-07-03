import { useEffect, useState } from "react";
import ImgHero from "./ImgHero";
import { FaAngleDown } from "react-icons/fa";

const Main = () => {
	const [showMouse, setShowMouse] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			if (scrollY === 0) {
				setShowMouse(true);
			} else {
				setShowMouse(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<main className="w-full h-[90vh]">
			<ImgHero />
			<div className="h-full flex flex-col justify-center md:items-end px-2 sm:px-16 relative">
				{/* Text */}
				<div className="bg-black/40 p-5 w-full md:w-2/3 xl:w-2/5 text-white rounded-lg">
					<p className="uppercase font-thin text-2xl">
						Pequeños cambios,
					</p>
					<p className="uppercase font-semibold text-3xl">
						{" "}
						una gran diferencia
					</p>
					<div className="flex flex-col gap-2 mt-5">
						<p className="">
							Estamos aquí para ayudarte a lograr la mejor versión
							de ti mismo
						</p>
						<p className="">
							¡Confía en nosotros y descubre la gran diferencia
							que un pequeño cambio puede hacer en tu vida!
						</p>
					</div>
				</div>
			</div>
			{showMouse && (
				<div className="fixed left-0 right-0 bottom-0 animate-bounce flex justify-center items-center">
					<a href="#start">
						<FaAngleDown className="z-30 text-white text-3xl " />
					</a>
				</div>
			)}
		</main>
	);
};

export default Main;
