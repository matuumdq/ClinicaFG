import { cursos, tratamientos } from "../db"
const Tratamientos = () => {
  
  return (
    <div>
      <div className="w-full min-h-[20vh] md:min-h-[40vh] flex flex-col justify-center items-center bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(255,255,255,0.3)),url('https://i0.wp.com/tiendadelapiel.com.py/tienda/wp-content/uploads/2021/12/Mascarilla-activos-basicos-del-skincare-tienda-de-la-piel-paraguay.jpg?resize=1280%2C780&ssl=1')] bg-cover bg-top lg:bg-top">
        <h2 className="h-full w-full text-center uppercase font-mono font-bold text-xl md:text-5xl text-white">Tratamientos</h2>
      </div>
      <div className=" max-w-screen-md mx-6 sm:mx-auto">
        <h3 className="font-bold text-2xl text-center py-8 uppercase font-mono max-w-sm mx-auto">Mira todos los tratamientos que tenemos para ofrecerte</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center place-items-center h-auto gap-10 py-8 ">
          {tratamientos.map((tratamiento) => (
            <div key={tratamiento.id} className="flex flex-col pb-5 gap-3 border border-gray-400/40 w-full min-h-[15vh] h-auto rounded-md shadow-md">
              <div className="absolute z-10 text-white mx-4 mt-2 px-2 py-1 rounded-lg bg-amber-400/80 cursor-default">${tratamiento.price}</div>
              <img className="md:w-full rounded-t-md" src={tratamiento.img} alt={tratamiento.name} />
              <p className="mx-4 uppercase font-semibold">{tratamiento.name}</p>
              <p className="text-sm mx-4 font-thin italic">{tratamiento.explanation}</p>
              <button className="font-light bg-amber-400/60 mx-auto px-2 py-1 rounded-md hover:scale-105 ease-in duration-300 text-white">Mas Informacion</button>
            </div>
          ))}
        </div>
      </div>

      <div className=" max-w-screen-md mx-6 sm:mx-auto">
        <h3 className="font-bold text-2xl text-center py-8 uppercase font-mono">Nuestros Cursos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center place-items-center h-auto gap-10 py-8 ">
          {cursos.map((curso) => (
            <div key={curso.id} className="flex flex-col pb-5 gap-3 border border-gray-400/40 w-full min-h-[15vh] h-auto rounded-md shadow-md">
              <div className="absolute z-10 text-white mx-4 mt-2 px-2 py-1 rounded-lg bg-amber-400/80 cursor-default">${curso .price}</div>
              <img className="md:w-full rounded-t-md" src={curso.img} alt={curso.name} />
              <p className="mx-4 uppercase font-semibold">{curso.name}</p>
              <p className="text-sm mx-4 font-thin italic">{curso.explanation}</p>
              <button className="font-light bg-amber-400/60 mx-auto px-2 py-1 rounded-md hover:scale-105 ease-in duration-300 text-white">Mas Informacion</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tratamientos