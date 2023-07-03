import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const ImgHero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const images = [
		{
			id: "1",
			img: "https://clinicasesteticas.com.br/resources/themes/clinicas-esteticas/assets/images/clinica-estetica.jpg",
		},
		{
			id: "2",
			img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683210097/peeling_ud1lye.png",
		},
		{
			id: "3",
			img: "https://th.bing.com/th/id/OIP.vm6AGlwYZljck-Jjrw5gDgHaFj?pid=ImgDet&w=900&h=675&rs=1",
		},
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % images.length);
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [currentIndex, images.length]);
	return (
		<div className="w-full h-[93vh] -z-10 absolute">
			{images.map((imgage, index) => (
				<div key={index} className="">
					<div
						className={`absolute w-full slide transition-all h-full duration-500 ease-in-out flex flex-col justify-center items-center md:items-start ${
							index === currentIndex ? "block" : "hidden"
						}`}
					>
						<CSSTransition
							key={index}
							timeout={500}
							classNames="images"
							appear={true}
							in={index === currentIndex}
						>
							<img
								className="h-full w-full object-cover"
								src={imgage.img}
								alt={imgage.id}
							/>
						</CSSTransition>
					</div>
				</div>
			))}
		</div>
	);
};

export default ImgHero;
