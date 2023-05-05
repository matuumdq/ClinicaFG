const Buy = () => {
    return (
      <div className="h-auto flex flex-col items-center justify-center  bg-opacity-10 bg-no-repeat bg-center my-6">
          <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683319344/buy_k7xist.png" alt="nosotros" className="absolute object-cover -z-10 opacity-40 -rotate-6 w-3/4 md:w-1/3"/>
          <p className="uppercase font-semibold text-sm w-full text-center pt-8 md:pt-12">Insumos • Productos </p>
          <h2 className="font-bold text-2xl text-center py-8 uppercase font-mono">Compra todo lo que necesites</h2>
          <p className="mx-5 md:w-1/2 md:mx-auto text-center pb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque explicabo rem ducimus accusamus dignissimos ab impedit animi aspernatur, nostrum veritatis corporis eveniet, nulla nisi sapiente magni dicta libero amet inventore! Accusamus sint voluptas sed iste harum! Nobis sint odio eum.</p>
          <div className="flex flex-col md:flex-row md:gap-5">
            <button className="mb-6 md:mb-12 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Consultanos</button>
            <button className="mb-6 md:mb-12 border border-yellow-600/50 px-10 py-2 rounded bg-white text-black font-thin text-lg hover:cursor-pointer hover:scale-105 shadow-md ease-in duration-300 hover:text-black tracking-widest">Comprá</button>
          </div>
      </div>
    )
  }
  
  export default Buy