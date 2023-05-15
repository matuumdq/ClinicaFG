import { useState } from "react";

const Buy = () => {

  const [hover, setHover] = useState(false);

    return (
      <div className="h-auto flex flex-col items-center justify-center  bg-opacity-10 bg-no-repeat bg-center my-6">
          <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683319344/buy_k7xist.png" alt="nosotros" className="absolute object-cover -z-10 opacity-40 -rotate-6 w-3/4 md:w-1/3"/>
          <p className="uppercase font-semibold text-sm w-full text-center pt-8 md:pt-12">Insumos • Productos </p>
          <h2 className="font-bold text-2xl text-center py-8 uppercase font-mono">Compra todo lo que necesites</h2>
          <p className="mx-5 md:w-1/2 md:mx-auto pb-8">Nuestros productos están disponibles para profesionales de la estética y también para uso personal. Si está interesado en hacer una compra, puede explorar nuestro catálogo en línea y realizar su pedido de manera fácil y rápida.</p>
          <p className="mx-5 md:w-1/2 md:mx-auto pb-8">Si tiene alguna pregunta o necesita ayuda para seleccionar los productos adecuados, no dude en contactarnos</p>
          <div className="flex flex-col md:flex-row md:gap-5">
            <a href="#form" className="mb-6 md:mb-12 border text-center border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Consultanos</a>
            {/* <a className="mb-6 md:mb-12 border text-center border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest hover:cursor-not-allowed">Comprá</a> */}
            <a
      className={`mb-6 md:mb-12 border text-center border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest ${
        hover ? "cursor-not-allowed" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? "Próximamente" : "Comprá"}
    </a>
          </div>
      </div>
    )
  }
  
  export default Buy