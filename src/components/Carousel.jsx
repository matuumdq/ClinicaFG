import { useState } from 'react'
import {
    BsArrowLeftShort,
  BsArrowRightShort
} from 'react-icons/bs'
import { CSSTransition } from 'react-transition-group'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      id: 0,
      testimonio:
        'Me ha sorprendido, soy una persona muy reservada para éstas cosas, pero Franco ha sabido ganarse mi confianza y me ha ayudado a cambiar para mejor.',
      imagen:
        'https://damian-barera.github.io/ClinicaFG/images/modelo3.jpg',
      nombre: 'Neil Smith',
      trabajo: 'Mercado Libre'
    },
    {
      id: 1,
      testimonio:
        'Suelo acomodar mis visitas a la clínica en algunos de mis días libres. El tiempo para mi es oro y en FG son muy conscientes de ello. Velocidad y efectividad en un solo lugar.',
      imagen:
        'https://damian-barera.github.io/ClinicaFG/images/modelo2.jpg',
      nombre: 'Tom Cruise',
      trabajo: 'Actor'
    },
    {
      id: 2,
      testimonio:
        'El Dr. Franco es un profesional muy dedicado como pocos. Me ha demostrado que lograr la mejor versión de mi mismo está al alcance de mi mano',
      imagen:
        'https://damian-barera.github.io/ClinicaFG/images/modelo1.jpg',
      nombre: 'Harry Mason',
      trabajo: 'Modelo'
    }
  ]
  const handleNextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="relative mx-auto px-4 py-8 mt-8 bg-purple-500/25">
      {slides.map((slide, index) => (
        <CSSTransition
          key={index}
          timeout={500}
          classNames="slide"
          appear={true}
          in={index === currentSlide}>
          <div className="max-w-5xl w-full mx-auto">
            <div
              className={`slide transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'block' : 'hidden'
              }`}>
              <section className="rounded-lg bg-primary-300/70 py-8 px-12 w-full md:flex md:gap-6">
                <img
                  alt={slide.nombre}
                  src={slide.imagen}
                  className="aspect-square mx-auto w-auto md:max-w-xs mb-5 md:mb-0 rounded-lg h-44 md:h-auto object-cover"
                />
                <blockquote className="sm:col-span-2 flex flex-col justify-around items-center">
                  <p className="text-xl font-medium text-black">
                    {slide.testimonio}
                  </p>
                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-primary-900 sm:inline-block"></span>
                    <p className="text-sm uppercase text-primary-900 sm:ms-3">
                      <strong>{slide.nombre}</strong>, {slide.trabajo}.
                    </p>
                  </cite>
                </blockquote>
              </section>
            </div>
          </div>
        </CSSTransition>
      ))}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-2">
        <div className="block">
          <button
            onClick={handlePrevSlide}
            className="p-6 rounded-full hover:scale-90 text-slate-950 ease-in-out duration-200 absolute inset-y-0 left-0">
            <BsArrowLeftShort size={28} />
          </button>
        </div>
        <div className="block">
          <button
            onClick={handleNextSlide}
            className="p-6 rounded-full hover:scale-90 text-slate-950 ease-in-out duration-200 absolute inset-y-0 right-0">
            <BsArrowRightShort size={28} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
