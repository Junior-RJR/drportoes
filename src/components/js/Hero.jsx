"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Shield, Clock, Award } from "lucide-react"
import imagemHero4 from "../images/imagemHero4.jpg"
import imagemHero2 from "../images/imagemHero2.jpg"
import imagemHero3 from "../images/imagemHero3.jpg"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Assistência Técnica de Portões Automáticos",
      subtitle: "Instalação, Manutenção e Reparo com Garantia",
      image: imagemHero4,
    },
    {
      title: "Segurança e Praticidade para sua Casa",
      subtitle: "Portões de Alta Qualidade com Tecnologia Avançada",
      image: imagemHero2,
    },
    {
      title: "Agende uma Consulta pelo WhatsApp ",
      subtitle: "Um especialista irá até você sem custo algum",
      image: imagemHero3,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 9500)
    return () => clearInterval(timer)
  }, [slides.length])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    // <section id="home" className="relative h-screen overflow-hidden" style={{ marginTop: "120px" }}>
    <section 
        id="home" 
        className="relative h-screen overflow-hidden pt-32 md:pt-40 lg:pt-48"
      >

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="animate-in slide-in-from-left-8 duration-1000">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">{slides[currentSlide].subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://wa.me/5511988345716?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f107c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Solicitar Orçamento
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={scrollToServices}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300"
                >
                  Ver Serviços
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-12 h-12 bg-[#0f107c] rounded-full flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Garantia Total</h3>
                    <p className="text-gray-300 text-sm">para sua tranquilidade</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-12 h-12 bg-[#0f107c] rounded-full flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Horário Comercial</h3>
                    <p className="text-gray-300 text-sm">Seg-Sex 9h-18h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <div className="w-12 h-12 bg-[#0f107c] rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">15 Anos</h3>
                    <p className="text-gray-300 text-sm">De experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Bolinhas redondas no mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 hidden md:flex">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`
              rounded-full 
              transition-all duration-300 
              ${
                index === currentSlide
                  ? "bg-[#0f107c] w-8 h-3" // Ativo: apenas desktop (pílula)
                  : "bg-white/50 w-3 h-3" // Inativo: apenas desktop (bolinha média)
              }
            `}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

    </section>
  )
}
