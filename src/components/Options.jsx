
const Options = () => {

    const options = [
        {
            id: 1,
            nombre: 'Cursos',
            caracteristicas: 'Formamos profesionales',
            img: 'https://damian-barera.github.io/ClinicaFG/images/formamos_profesionales.png'
        },
        {
            id: 2,
            nombre: 'Tratamientos',
            caracteristicas: 'Te ofrecemos tratamientos personalizados',
            img: 'https://damian-barera.github.io/ClinicaFG/images/imagen_hero.jpeg'
        },
        {
            id: 3,
            nombre: 'Productos',
            caracteristicas: 'Venta de productos general',
            img: 'https://damian-barera.github.io/ClinicaFG/images/productos_de_cicec.jpg'
        },
        {
            id: 4,
            nombre: 'Insumos',
            caracteristicas: 'Venta de Insumos',
            img: 'https://damian-barera.github.io/ClinicaFG/images/aparatos_esteticos.png'
        },
    ] 

  return (
    <div className="mx-auto w-full flex flex-col items-center gap-10 mt-5 pb-8 ">
        <p>Veni a lograr la mejor versión de vos mismo</p>
        <div className="grid gap-4 grid-cols-1 max-w-screen-lg md:grid-cols-2 md:ml-14">
            {options.map(opt => (
                <div className="border border-black p-5 rounded-md flex flex-col items-center justify-center hover:scale-90 duration-300 ease-in-out hover:cursor-pointer" key={opt.id}>
                    <img src={opt.img} alt={opt.nombre} className="w-auto h-56 rounded-lg" />
                    <p className="text-xl font-bold">{opt.nombre}</p>
                    <p className="text-lg">{opt.caracteristicas}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Options