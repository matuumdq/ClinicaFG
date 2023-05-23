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
			>
				<div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center ">
					<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
						{curso.name}
					</h2>
				</div>
				<div className="parallax-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
			</Parallax>
			<div className="h-24 bg-amber-500/50 flex justify-center items-center font-bold uppercase tracking-widest font-mono text-4xl">
				Contenido del Curso
			</div>
			<div className="h-auto w-full">
				{/* Temario */}
				<div>
					{curso.modules && (
						<div className="w-full mx-auto">
							<Parallax
								bgImage={curso.paralaximg}
								bgImageAlt={curso.name}
								strength={200}
								className=""
							>
								<div className="w-full min-h-[20vh] flex flex-col justify-center items-center ">
									<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
										Temario
									</h2>
								</div>
							</Parallax>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl gap-8 md:gap-5 mx-auto my-5 md:my-14">
								{curso.modules.map((modu) => (
									<div
										className=" border border-black rounded-md p-4 relative"
										key={modu.id}
									>
										<p className="text-9xl absolute opacity-30 top-1/2 md:top-auto left-1/2 md:left-auto transform md:transform-none -translate-x-1/2 -translate-y-1/2 md:bottom-5 md:right-5">
											{modu.id}
										</p>
										<h3 className="font-bold uppercase">
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
															{contenido}.
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
				<div className="mx-auto">
					<div className="w-full">
						{curso.objetives && (
							<div>
								<Parallax
									bgImage={curso.paralaximg}
									bgImageAlt={curso.name}
									strength={200}
									className=""
								>
									<div className="w-full min-h-[20vh] flex flex-col justify-center items-center ">
										<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
											Objetivos del curso
										</h2>
									</div>
								</Parallax>
								<div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-screen-lg mx-auto">
									<div className="py-10 flex gap-4 flex-col">
										{curso.objetives
											.split(". ")
											.map((punto, index) => (
												<p
													className="max-w-screen-lg mx-auto px-5 w-full md:text-xl"
													key={index}
												>
													• {punto}.
												</p>
											))}
									</div>
									<div>
										<img
											src="https://img.freepik.com/free-vector/man-doctor-woman-nurse-stand-with-patient-card-medical-staff-uniform-study-discuss-examination-result-make-note-therapist-giving-treatment-recommendation-prescription-putting-signature_575670-1316.jpg?w=826&t=st=1684785191~exp=1684785791~hmac=6e3b211b352bce63b9735eb5e254aaf16e7804ab8ef6dba4d6f1e108fe0114a3"
											alt="objetives-img"
											className=""
										/>
									</div>
								</div>
							</div>
						)}
					</div>
					{/* Incluye */}
					<div className="w-full">
						{curso.includes && (
							<div>
								<Parallax
									bgImage={curso.paralaximg}
									bgImageAlt={curso.name}
									strength={200}
									className=""
								>
									<div className="w-full min-h-[20vh] flex flex-col justify-center items-center ">
										<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
											Que Incluye?
										</h2>
									</div>
								</Parallax>
								<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-screen-lg mx-auto my-4">
									<div>
										<img
											src="https://res.cloudinary.com/dnqmez68n/image/upload/v1684785953/coffe_hejywz.png"
											alt=""
										/>
									</div>
									<div className="py-10 flex gap-4 flex-col">
										{curso.includes
											.split(". ")
											.map((punto, index) => (
												<p
													className="max-w-screen-lg mx-auto px-5 w-full md:text-xl"
													key={index}
												>
													• {punto}.
												</p>
											))}
									</div>
								</div>
							</div>
						)}
					</div>
					{/* Modalidad */}
					<div className="w-full">
						{curso.modality && (
							<div>
								<Parallax
									bgImage={curso.paralaximg}
									bgImageAlt={curso.name}
									strength={200}
									className=""
								>
									<div className="w-full min-h-[20vh] flex flex-col justify-center items-center ">
										<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
											Modalidad
										</h2>
									</div>
								</Parallax>
								<div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto text-center py-14 gap-6">
									{curso.modality.map((punto, index) => (
										<div key={index} className="w-full ">
											<h4 className="text-2xl font-semibold uppercase">
												{punto.name}
											</h4>
											{punto.description
												.split(". ")
												.map((punto, index) => (
													<p
														key={index}
														className="text-xl italic"
													>
														{punto}
													</p>
												))}
										</div>
									))}
								</div>
							</div>
						)}
					</div>

					{/* Precio */}
					<div className="flex flex-col gap-3 my-5 ">
						<Parallax
							bgImage={curso.paralaximg}
							bgImageAlt={curso.name}
							strength={200}
							className=""
						>
							<div className="w-full min-h-[20vh] flex flex-col justify-center items-center ">
								<h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">
									Aclaraciones
								</h2>
							</div>
						</Parallax>
						{/* Aclaracion */}
						<div className="max-w-screen-lg flex flex-col md:flex-row mx-auto my-5 md:my-10">
							<div className="flex flex-col gap-4 w-full md:mx-auto mx-auto px-5 md:text-xl my-5 md:my-10">
								<p className="text-2xl text-center font-semibold">
									VALORES Y FORMAS DE PAGO:
								</p>
								<p>
									Alumnos Argentina:{" "}
									<span className="font-bold">
										${curso.price}
									</span>{" "}
								</p>
								<p>
									Pueden abonar mediante transferencia
									bancaria o a través de Mercado pago.{" "}
									<span className="italic text-lg">
										Solicitar datos.
									</span>
								</p>

								<p className="italic">
									También pueden abonar en efectivo en
									recepción (Recoleta, Buenos Aires).
								</p>
								<p className="uppercase text-xl text-center my-5">
									Todas las clases quedan grabadas y se envían
									a todos los participantes
								</p>
							</div>
							<img
								src="https://res.cloudinary.com/dnqmez68n/image/upload/v1684786824/pago_spak0m.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCourse;
