import { BsArrowDownCircleFill } from "react-icons/bs";

const Insumos = () => {
	return (
		<div className="w-full flex flex-col md:flex-row min-h-[85vh]">
			<div className="bg-yellow-600/60 w-full py-32 px-5 md:px-20 md:min-h-[87vh] flex justify-center items-center">
				<p className="text-white tracking-wider text-lg md:text-2xl">
					INSUMOS CICEC es una empresa dedicada a la importación,
					comercialización y distribución en todo el territorio
					nacional de equipamientos de alta calidad para laboratorios,
					clínicas e industrias. El mayor esfuerzo de la empresa se
					enfoca en conseguir la satisfacción de nuestros clientes,
					colaborando en la selección de la solución más indicada para
					su necesidad.
				</p>
			</div>
			<div className="bg-white w-full py-32 px-5 md:min-h-[85vh] flex flex-col gap-10 justify-around items-center">
				<div className="flex flex-col gap-4 justify-center items-center">
					<div className="flex flex-col items-center justify-center gap-6">
						<h3 className="tracking-wider text-lg md:text-2xl">
							Visualiza nuestro catalogo online
						</h3>
						<BsArrowDownCircleFill className="text-yellow-600/50 text-3xl animate-bounce" />
					</div>
					<a
						href="https://drive.google.com/file/d/1Aen5aX1qOKt6lnTOJS2YtkpWaGLKUNTu/view?usp=drive_link"
						target="_blank"
						rel="noreferrer"
						className="mb-12 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-white hover:bg-yellow-600/50 hover:font-normal tracking-widest"
					>
						Ver Catálogo Online
					</a>
				</div>
				<div className="flex flex-col gap-10 justify-center items-center">
					<h3 className="tracking-wider text-lg md:text-2xl">
						¿Tenés alguna duda?
					</h3>
					<a
						href="/contactanos"
						className="mb-12 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-white hover:bg-yellow-600/50 hover:font-normal tracking-widest"
					>
						Consultanos
					</a>
				</div>
			</div>
		</div>
	);
};

export default Insumos;
