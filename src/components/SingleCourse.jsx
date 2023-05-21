import { useParams } from "react-router-dom";
import { cursos } from "../db";
import { Parallax } from "react-parallax";

const SingleCourse = () => {
	const { name } = useParams();
	const formattedName = name.replace(/-/g, " ").toUpperCase();
	const curso = cursos.find(
		(curso) => curso.name.toUpperCase() === formattedName
	);

	return (
		<div className="">
			<Parallax
				bgImage={curso.paralaximg}
				bgImageAlt={curso.name}
				strength={200}
				className=""
			>
				<div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center ">
					<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
						{curso.name}
					</h2>
				</div>
			</Parallax>
			<div className="bg-gradient-to-b from-transparent to-yellow-500/20 h-auto py-5 w-full">
				{/* Nombre del curso */}
				<h3 className="mx-auto text-center font-bold text-xl mb-5">
					{curso.name}
				</h3>
				{/* Temario */}
				<div>
					{curso.modules && (
						<div className="w-full mx-auto">
							<h2 className="text-center font-bold">Temario</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl gap-5 mx-auto">
								{curso.modules.map((modu) => (
									<div
										className=" border border-black p-4"
										key={modu.id}
									>
										<h3 className="font-bold uppercase">
											<span className="italic">
												Modulo {modu.id}:
											</span>{" "}
											{modu.name}
										</h3>
										{modu.modules
											.split(". ")
											.map((punto, index) => {
												const titulo = punto.substring(
													0,
													punto.indexOf(":") + 1
												);
												const contenido =
													punto.substring(
														punto.indexOf(":") + 1
													);
												return (
													<div key={index}>
														<h3 className="font-bold uppercase">
															{titulo}
														</h3>
														<p className="font-thin text-lg pl-3">
															{contenido}
														</p>
													</div>
												);
											})}
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				{/* Objetivos */}
				<div className="w-full">
					{curso.objetives && (
						<div>
							<h3 className="font-bold text-lg uppercase">
								Objetivos del curso
							</h3>
							{curso.objetives.split(". ").map((punto, index) => (
								<p className="" key={index}>
									{punto}.
								</p>
							))}
						</div>
					)}
				</div>
				{/* Incluye */}
				<div className="w-full">
					{curso.includes && (
						<div>
							<h3 className="font-bold text-lg uppercase">
								Que Incluye?
							</h3>
							{curso.includes.split(". ").map((punto, index) => (
								<p className="" key={index}>
									{punto}.
								</p>
							))}
						</div>
					)}
				</div>
				{/* Modalidad */}
				<div className="w-full">
					{curso.modality && (
						<div>
							<h3 className="font-bold text-lg uppercase">
								Modalidad
							</h3>
							{curso.modality.map((punto, index) => (
								<div key={index}>
									<h4 className="text-2xl uppercase">
										{punto.name}
									</h4>
									{punto.description
										.split(". ")
										.map((punto, index) => (
											<p key={index}>{punto}</p>
										))}
								</div>
							))}
						</div>
					)}
				</div>
				{/* Aclaracion */}
				<p className="my-5 uppercase text-lg">
					Todas las clases quedan grabadas y se envían a todos los
					participantes
				</p>
				{/* Precio */}
				<div className="flex flex-col gap-3">
					<p>VALORES Y FORMAS DE PAGO:</p>
					<p>
						Alumnos Argentina:{" "}
						<span className="font-bold">${curso.price}</span>.
						Pueden abonar mediante transferencia bancaria o a través
						de Mercado pago.{" "}
						<span className="italic text-lg">Solicitar datos.</span>
					</p>
					<p>
						También pueden abonar en efectivo en recepción
						(Recoleta, Buenos Aires).
					</p>
				</div>
			</div>
		</div>
	);
};

export default SingleCourse;
