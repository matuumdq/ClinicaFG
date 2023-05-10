const Supplies = () => {
    return (
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full items-center justify-around h-auto md:h-[50vh] bg-[linear-gradient(to_right_bottom,rgba(255,255,255,1),rgba(255,255,255,0.3)),url('https://i.pinimg.com/originals/44/c6/3a/44c63a6381668d162356ce3eefb15a57.jpg')] bg-cover bg-center">
          <div className="w-full text-center pt-4">
              <h3 className="py-8 text-4xl uppercase font-bold">Productos</h3>
              <p className="uppercase text-sm font-thin">Cremas • Mascarillas</p>
              <button className="my-8 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin hover:cursor-not-allowed hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Ver más</button>
          </div>
          <div className="w-full text-center">
              <h3 className="py-8 text-4xl uppercase font-bold">Insumos</h3>
              <p className="uppercase text-sm font-thin">Maquinas</p>
              <button className="my-8 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin hover:cursor-not-allowed hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Ver más</button>
              </div>
      </div>
    )
  }
  
  export default Supplies