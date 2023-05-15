
const Workshop = () => {
  return (
    <div>
        <div className="flex flex-col mt-4 py-12 bg-gradient-to-b from-white to-yellow-500/20">
            <div className='flex flex-col md:flex-row gap-8 md:gap-0 md:items-center h-auto'>
                <div className="w-2/5 mx-10 md:mx-0 md:ml-24 flex flex-col gap-4">
                    <p className="uppercase text-purple-500/70 font-semibold text-xs">Clinica internacional</p>
                    <h3 className="uppercase text-3xl font-bold">Workshops</h3>
                </div>
                <div className="sm:w-2/3 md:w-1/2 lg:w-1/3 mx-10 ">
                    <p className="">Nuestros talleres de estética son una excelente oportunidad para aquellos que deseen expandir sus conocimientos en los tratamientos y técnicas más avanzadas en el cuidado de la piel y el cabello. Están diseñados para profesionales de la estética, así como para aquellos que recién comienzan en el campo y desean aprender de expertos en cada área.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full mx-10 mt-12 md:mx-20">
                <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683327126/324266760_211730717890594_8405018690220587156_n_m9tzjn.jpg" alt="tratamiento" />
                <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683327126/324266760_211730717890594_8405018690220587156_n_m9tzjn.jpg" alt="tratamiento" />
                <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683327126/324266760_211730717890594_8405018690220587156_n_m9tzjn.jpg" alt="tratamiento" />
                <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683327126/324266760_211730717890594_8405018690220587156_n_m9tzjn.jpg" alt="tratamiento" />
                <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683327126/324266760_211730717890594_8405018690220587156_n_m9tzjn.jpg" alt="tratamiento" />
                <img src="https://res.cloudinary.com/dnqmez68n/image/upload/v1683327126/324266760_211730717890594_8405018690220587156_n_m9tzjn.jpg" alt="tratamiento" />
            </div>
        </div>
    </div>
  )
}

export default Workshop