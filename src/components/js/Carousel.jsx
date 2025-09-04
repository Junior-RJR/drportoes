"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Motores Ultra-rápidos",
      description: "Instalação completa com motor e controle remoto",
      video: "/videos1/titulo1.mp4",
      image: "images/motorRapido.jpeg",
      category: "Residencial",
    },
    {
      id: 2,
      title: "Manutenção Preventiva",
      description: "Sistema robusto para empresas e indústrias",
      // image: "images/logo-dr-portoes.png?height=400&width=600",
      video: "/videos1/titulo2.mp4",
      image: "images/manutencaoPreventiva.jpeg",
      category: "Industrial",
    },
    {
      id: 3,
      title: "Trava Automática",
      description: "Solução moderna para garagens",
      video: "/videos1/titulo3.mp4",
      image: "images/travaAutomaticaImg.jpeg",
      category: "Garagem",
    },
    {
      id: 4,
      title: "Sensor de Barreira",
      description: "Serviço completo de manutenção e reparo",
      video: "/videos1/video2.mp4",
      image: "images/sensorBarreira.jpeg",
      category: "Manutenção", 
    },
    {
      id: 5,
      title: "Portão Deslizante",
      description: "Sistemas integrados para condomínios",
      video: "/videos1/titulo5.mp4",
      image: "images/portaoDeslizante.jpeg",
      category: "Condomínio",
    },
    // {
    //   id: 1,
    //   title: "Portão Residencial Automático",
    //   description: "Instalação completa com motor e controle remoto",
    //   image: "/placeholder.svg?height=400&width=600",
    //   category: "Residencial",
    // },
    // {
    //   id: 2,
    //   title: "Portão Industrial Deslizante",
    //   description: "Sistema robusto para empresas e indústrias",
    //   image: "/placeholder.svg?height=400&width=600",
    //   category: "Industrial",
    // },
    // {
    //   id: 3,
    //   title: "Portão Basculante Automático",
    //   description: "Solução moderna para garagens",
    //   image: "/placeholder.svg?height=400&width=600",
    //   category: "Garagem",
    // },
    // {
    //   id: 4,
    //   title: "Manutenção Preventiva",
    //   description: "Serviço completo de manutenção e reparo",
    //   image: "/placeholder.svg?height=400&width=600",
    //   category: "Manutenção",
    // },
    // {
    //   id: 5,
    //   title: "Portão de Condomínio",
    //   description: "Sistemas integrados para condomínios",
    //   image: "/placeholder.svg?height=400&width=600",
    //   category: "Condomínio",
    // },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nossos Projetos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados com excelência e qualidade
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <span className="inline-block bg-[#0f107c] px-3 py-1 rounded-full text-sm font-medium mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-lg ">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Smaller on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

        </div>

        {/* Thumbnails - Hidden on mobile, visible on desktop */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 ">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-lg transition-all duration-800 ${
                index === currentIndex ? "ring-4 ring-blue-600 scale-105" : "hover:scale-105 "
              }`}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-20 object-cover" />
              <div className="absolute inset-0 bg-black/20 bg-[#0f107c]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
