import { Link } from 'react-router-dom'
const Options = () => {
  const options = [
    {
      id: 1,
      nombre: "Cursos",
      caracteristicas: "Formamos profesionales",
      img: "https://damian-barera.github.io/ClinicaFG/images/formamos_profesionales.png",
    },
    {
      id: 2,
      nombre: "Tratamientos",
      caracteristicas: "Te ofrecemos tratamientos personalizados",
      img: "https://damian-barera.github.io/ClinicaFG/images/imagen_hero.jpeg",
    },
    {
      id: 3,
      nombre: "Productos",
      caracteristicas: "Venta de productos general",
      img: "https://damian-barera.github.io/ClinicaFG/images/productos_de_cicec.jpg",
    },
    {
      id: 4,
      nombre: "Insumos",
      caracteristicas: "Venta de Insumos",
      img: "https://damian-barera.github.io/ClinicaFG/images/aparatos_esteticos.png",
    },
  ];

  return (
    <div className="mx-auto w-full flex flex-col items-center gap-10 py-8 ">
      
      <div className="grid gap-4 grid-cols-1 max-w-screen-lg md:grid-cols-2 md:ml-14">
        {options.map((opt) => (
              <div className="bg-white w-72 h-96 shadow-md rounded m-3" key={opt.id}>
              <div className="h-3/4 w-full">
                <img className="w-full h-full object-cover rounded-t" src={opt.img} alt={opt.nombre} />
              </div>
              <div className="w-full h-1/4 p-3">
                <Link className=" hover:text-yellow-600 text-gray-700 ease-in duration-200">

                  <span className="text-lg font-semibold uppercase tracking-wide ">{opt.nombre}</span>
                </Link>
                
                <p className="text-gray-600 text-sm leading-5 mt-1">{opt.caracteristicas}.</p>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Options;
