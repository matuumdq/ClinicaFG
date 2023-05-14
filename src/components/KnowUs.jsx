import { Link } from "react-router-dom"
import { personal } from "../db"

const KnowUs = () => {

  return (
    <div className="w-full h-auto py-6 sm:py-0">
      <div className="flex flex-col sm:flex-row h-full">
          <div className="max-w-sm flex flex-col my-auto ml-4 sm:mx-auto h-full">
            <p className="uppercase text-xs">centro internacional en clinica estetica y cosmiatria</p>
            <h2 className="text-3xl md:text-4xl font-bold text-violet-900/60">Sobre Nuestra Clinica</h2>
            <p className="text-xs py-5 text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quo numquam consequuntur, reiciendis excepturi a eveniet deleniti quibusdam enim, magni et quidem eligendi quia minima alias debitis, velit voluptate voluptatibus!</p>
          </div>	
        <img  className="w-1/3 justify-self-end hidden sm:block rounded-l-xl" src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683410825/imgdoc_vbburu.jpg" alt="doc" />
      </div>

			<div className="bg-gradient-to-b from-transparent to-yellow-500/20 h-auto min-h-[30vh] py-14 flex flex-col justify-center gap-8 w-full ">
				<div className="flex flex-col sm:flex-row items-center justify-around">
					<p className="text-3xl font-semibold text-violet-900/60 mx-5 max-w-sm tracking-widest">Somos la Clinica Internacional lider en el mundo</p>
					<Link to='/tratamientos' className="my-8 w-56 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest text-center">Conoce nuestros tratamientos</Link>
				</div>
				{/* Banner */}
				<div className="flex bg-violet-400 text-white justify-between gap-3 py-3 px-2 sm:px-10 md:justify-around w-full h-1/4 items-center">
							<div className="flex flex-col items-center justify-center">
								<p className="text-xl md:text-3xl font-bold">10</p>
								<p className="text-sm tracking-widest">Doctores</p>
							</div>
							<div className="flex flex-col items-center justify-center">
								<p className="text-xl md:text-3xl font-bold">+2000</p>
								<p className="text-sm tracking-widest">Clientes</p>
							</div>
							<div className="flex flex-col items-center justify-center">
								<p className="text-xl md:text-3xl font-bold">+500</p>
								<p className="text-sm tracking-widest">Alumnos</p>
							</div>
					</div>
			</div>


        <div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(255,255,255,0.3)),url('https://thumbs.dreamstime.com/b/young-team-group-doctors-37813851.jpg')] bg-cover bg-top lg:bg-top">
            <h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">Nuestros Doctores</h2>
        </div>
        <div className="flex flex-col justify-center items-center pt-8">
            <p className="font-thin uppercase text-xs pb-4">Un equipo apasionado</p>
            <h3 className="text-violet-900/70 font-bold text-2xl text-center">Converti tus Sueños en Realidad</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center place-items-center h-auto w-full gap-10 py-8 mx-auto max-w-screen-md">
            {personal.map((doc => (
                <div key={doc.id} className="flex flex-col items-center justify-center border border-black px-4 py-2 max-w-[200px] h-auto max-h-96">
                    <img src={doc.img} alt={doc.nombre} className="max-h-44 h-auto w-1/3 sm:w-1/2 lg:w-1/4"/>
                    <p className="uppercase text-primary-900 text-center font-bold">Dra. {doc.nombre}</p>
                    <p className="text-sm uppercase text-primary-900 text-center italic">{doc.especialidad}</p>
                </div>
            )))}
        </div>
    </div>
  )
}

export default KnowUs