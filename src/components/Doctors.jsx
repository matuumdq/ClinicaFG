

const Doctors = () => {
    const doctors = [
        {
          id: 1,
          nombre: "Pedro",
          caracteristicas: "Lolas",
          frase: 'Lorem ipsum dolor sit amet consectetur. Voluptatum molestiae architecto itaque.',
          img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
        },
        {
          id: 2,
          nombre: "Juan",
          caracteristicas: "Peeling",
          frase: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto itaque.',
          img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
        },
        {
          id: 3,
          nombre: "Alfonso",
          caracteristicas: "Capilar",
          frase: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quam. Voluptatum.',
          img: "https://res.cloudinary.com/dnqmez68n/image/upload/v1683215737/doc_o625ww.png",
        }
      ];
  return (
    <div className="w-full bg-gradient-to-b from-yellow-500/20 to-white h-auto px-12">
        <h2 className="font-bold text-2xl text-center py-8 uppercase font-mono">Nuestros Profesionales</h2>
        <ul className="flex flex-col sm:flex-row sm:justify-around items-center py-8 w-full gap-8">
            {doctors.map(doc=>(
                <li key={doc.id} className="w-full md:w-1/3 px-4 flex flex-col gap-6 ">
                    <img src={doc.img} alt={doc.nombre} className="w-16 mx-auto" />
                    <p className="italic">{doc.frase}</p>
                    <p className="text-sm uppercase text-primary-900 text-center">
                        <strong>{doc.nombre}</strong>, {doc.caracteristicas}
                    </p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Doctors