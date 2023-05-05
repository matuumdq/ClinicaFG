
const Work = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full items-center justify-around h-auto md:h-[50vh] bg-[linear-gradient(to_right_bottom,rgba(255,255,255,1),rgba(255,255,255,0.3)),url('https://architectureprize.com/wp-content/uploads/2019/02/Cosmax-Interior-Design-4.jpg')] bg-cover bg-center">
        <div className="w-full text-center pt-4">
            <p className="uppercase text-yellow-500/70 font-semibold text-sm">Hibrido</p>
            <h3 className="py-8 text-4xl uppercase font-bold">Cursos</h3>
            <p className="uppercase text-sm font-thin">Hilos Tensores • Hifu</p>
            <button className="my-8 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Ver más</button>
        </div>
        <div className="w-full text-center">
            <p className="uppercase text-yellow-500/70 font-semibold text-sm">Presencial</p>
            <h3 className="py-8 text-4xl uppercase font-bold">Tratamientos</h3>
            <p className="uppercase text-sm font-thin">Laser • Peeling</p>
            <button className="my-8 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Ver más</button>
            </div>
    </div>
  )
}

export default Work