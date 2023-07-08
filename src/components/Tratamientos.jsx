import { Link } from "react-router-dom";
import { cursos } from "../db";
import { Parallax } from "react-parallax";
const Tratamientos = () => {
	// function renderTratamiento(tratamiento) {
	// 	const msg = `https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20estoy%20interesado%20en%20el%20tratamiento%20de:%20${tratamiento.name}`;

	// 	return (
	// 		<div
	// 			key={tratamiento.id}
	// 			className="flex flex-col pb-5 gap-3 border border-gray-400/40 w-full min-h-[15vh] h-auto rounded-md shadow-md"
	// 		>
	// 			<div className="absolute z-10 text-white mx-4 mt-2 px-2 py-1 rounded-lg bg-amber-400/80 cursor-default">
	// 				${tratamiento.price}
	// 			</div>
	// 			<img
	// 				className="md:w-full rounded-t-md"
	// 				src={tratamiento.img}
	// 				alt={tratamiento.name}
	// 			/>
	// 			<p className="mx-4 uppercase font-semibold">
	// 				{tratamiento.name}
	// 			</p>
	// 			<p className="mx-4 font-thin italic line-clamp-3">
	// 				{tratamiento.explanation}
	// 			</p>
	// 			<div className="flex mx-2">
	// 				<a
	// 					href={msg}
	// 					target="_blank"
	// 					rel="noreferrer"
	// 					className="font-light border border-amber-400/60 mx-auto px-2 py-1 rounded-md hover:scale-105 ease-in duration-300 text-purple-700/80"
	// 				>
	// 					Mas Información
	// 				</a>
	// 				<Link
	// 					to={`/tratamientos/${tratamiento.name
	// 						.replace(/\s+/g, "-")
	// 						.toLowerCase()}`}
	// 					className=" bg-amber-400/50 mx-auto px-2 py-1 rounded-md hover:scale-105 ease-in duration-300 text-purple-700 "
	// 				>
	// 					Que ofrecemos?
	// 				</Link>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// function renderTratamientos() {
	// 	return tratamientos.map((tratamiento) =>
	// 		renderTratamiento(tratamiento)
	// 	);
	// }

	function renderCurso(curso) {
		const msg = `https://api.whatsapp.com/send?phone=+5491124725859&text=Hola,%20estoy%20interesado%20en%20el%20curso%20de:%20${curso.name}`;

		return (
			<div
				key={curso.id}
				className="flex flex-col cursor-default pb-5 gap-3 border border-gray-400/40 w-full min-h-[15vh] h-auto rounded-md shadow-md"
			>
				<div className="absolute z-10 text-white mx-4 mt-2 px-2 py-1 rounded-lg bg-amber-400/80 cursor-default">
					${curso.price}
				</div>
				<img
					className="object-cover w-full rounded-t-md"
					src={curso.img}
					alt={curso.name}
				/>
				<p className="mx-4 uppercase font-semibold">{curso.name}</p>
				<p className="mx-4 font-thin italic line-clamp-3">
					{curso.explanation}
				</p>
				{curso.days && (
					<div className="mx-4 flex flex-col">
						<h4>Los dias:</h4>
						<p className="">{curso.days}</p>
					</div>
				)}
				<div className="flex flex-wrap gap-2 mx-2">
					<a
						href={msg}
						target="_blank"
						rel="noreferrer"
						className="font-light border border-amber-400/60 mx-auto px-2 py-1 rounded-md hover:scale-105 ease-in duration-300 text-purple-700/80"
					>
						Mas Información
					</a>
					<Link
						to={`/cursos/${curso.name
							.replace(/\s+/g, "-")
							.toLowerCase()}`}
						className="bg-amber-400/50 mx-auto px-2 py-1 rounded-md hover:scale-105 ease-in duration-300 text-purple-700 "
					>
						Que ofrecemos?
					</Link>
				</div>
			</div>
		);
	}

	function renderCursosAsinc() {
		// Filtra los cursos con sinc igual a 'asinc'
		const cursosAsinc = cursos.filter((curso) => curso.sinc === "asinc");
		// Renderiza la función renderCurso() para cada curso asinc
		return cursosAsinc.map((curso) => renderCurso(curso));
	}

	function renderCursosSinc() {
		// Filtra los cursos con sinc igual a 'sinc'
		const cursosAsinc = cursos.filter((curso) => curso.sinc === "sinc");
		// Renderiza la función renderCurso() para cada curso sinc
		return cursosAsinc.map((curso) => renderCurso(curso));
	}

	return (
		<div className="">
			<Parallax
				bgImage="https://i0.wp.com/tiendadelapiel.com.py/tienda/wp-content/uploads/2021/12/Mascarilla-activos-basicos-del-skincare-tienda-de-la-piel-paraguay.jpg?resize=1280%2C780&ssl=1"
				bgImageAlt="the cat"
				strength={400}
				className=""
			>
				<div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center ">
					<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
						Cursos
					</h2>
				</div>
			</Parallax>
			<div id="tratamientos" className=" max-w-screen-lg mx-6 sm:mx-auto">
				<h3 className="font-bold text-2xl text-center py-8 uppercase font-mono max-w-sm mx-auto">
					Mira todos los cursos que tenemos para ofrecerte
				</h3>
				{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center place-items-center h-auto gap-12 py-8 ">
					{renderTratamientos()}
				</div> */}
			</div>

			<div id="cursos" className=" max-w-screen-lg mx-6 sm:mx-auto">
				<h3 className="font-bold text-2xl text-center py-8 uppercase font-mono">
					Cursos Asincronicos
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center place-items-center h-auto gap-12 py-8 ">
					{renderCursosAsinc()}
				</div>
			</div>
			<div id="cursos" className=" max-w-screen-lg mx-6 sm:mx-auto">
				<h3 className="font-bold text-2xl text-center py-8 uppercase font-mono">
					Cursos Sincronicos
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center place-items-center h-auto gap-12 py-8 ">
					{renderCursosSinc()}
				</div>
			</div>
		</div>
	);
};

export default Tratamientos;
