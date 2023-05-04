

const Doctors = () => {
    const doctors = [
        {
          id: 1,
          nombre: "Pedro",
          caracteristicas: "Lolas",
          frase: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, possimus quam. Voluptatum molestiae architecto itaque.',
          img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
        },
        {
          id: 2,
          nombre: "Juan",
          caracteristicas: "Peeling",
          frase: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum molestiae architecto itaque.',
          img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
        },
        {
          id: 3,
          nombre: "Alfonso",
          caracteristicas: "Capilar",
          frase: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quam. Voluptatum molestiae architecto itaque.',
          img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
        }
      ];
  return (
    <div className="w-full bg-gray-200 h-auto px-12">
        <h3 className="w-full flex items-center justify-center pt-8 font-bold text-xl">Nuestros Profesionales</h3>
        <ul className="flex flex-col sm:flex-row sm:justify-around items-center py-8 w-full gap-8">
            {doctors.map(doc=>(
                <li key={doc.id} className="w-full md:w-1/3 px-4 flex flex-col gap-4 items-center ">
                    <img src={doc.img} alt={doc.nombre} className="w-16" />
                    <p className="">{doc.frase}</p>
                    <p className="text-sm uppercase text-primary-900">
                        <strong>{doc.nombre}</strong>, {doc.caracteristicas}
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Doctors