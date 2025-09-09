"use client"

import { useState, useEffect, useRef } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const testimonialRef = useRef(null)

  const testimonials = [
    {
      name: "Luiza Martins",
      location: "4 dias atrás",
      rating: 5,
      text: "Foram muito atenciosos e prestativos, técnico explica muito bem o defeito apontado, honesto, eu recomendo.",
      // service: "Manutenção Preventiva",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Juliana Rodrigues dos Santos",
      location: "11 meses atrás",
      rating: 5,
      text: "Recomendo o atendimento e serviço da Doutor Portões, eles fizeram a troca de peças enferrujadas do meu portão e ajuste de peso e batida. Ficou ótimo. Foram pontuais.",
      // service: "Reparo Emergencial",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Jefferson Eufrosino",
      location: "3 dias atrás",
      rating: 5,
      text: "Fiz alguns orçamentos e tinha necessidade de fechar e executar a troca de motor e balanceamento do portão com urgência. Agendei o orçamento e fui muito bem atendido desde a marcação até a visita, negociamos valores, formas de pagamento de acordo com o que se encaixou melhor para mim e tive priorização de acordo com a minha necessidade e demonstraram muita experiência e a indicação honesta da melhor solução, índico fortemente consultar um orçamento com a empresa antes de fechar o serviço em outro lugar.",
      // service: "Portão Deslizante",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Fabio Barreto",
      location: "um ano atrás",
      rating: 5,
      // Mantendo o texto completo aqui, o CSS vai cuidar do truncamento.
      text: "Atendimenro de excelência já sou cliente da Empresa Dr Portões a mais de 6 anos. Mesmo eu morando no interior de São Paulo eles continuam prestando um ótimo serviço na minha casa de São Paulo quando é necessário. Empresa nota 10 com colaboradores de muito profissionalismo e comrpometimento. Gostaria quê eles tivessem uma filial aqui na Cidade quê eu estou morando. Parabéns Dr Portôes e colaboradores.🙏🙏🙏👏👏👏",
      // service: "Instalação de Portão Automático",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Carlos Santos",
      location: "11 meses atrás",
      rating: 5,
      text: "Atendimento excelente, desde o primeiro contato. Afendamento rápido, atendimento pelo representante foi maravilhoso, esclareceu todas minhas dúvidas uma verdadeira aula, a instação também foi ótima. Só elogios. Eu recomendo. 👏🏿👏🏿👏🏿👏🏿",
      // service: "Portão Basculante",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current)
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current)
      }
    }
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={20} className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 6.000 clientes satisfeitos confiam na qualidade dos nossos serviços
          </p>
        </div>

        <div ref={testimonialRef} className="relative max-w-4xl mx-auto opacity-0">
          {/* Main Testimonial */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg flex flex-col justify-center">
            <div className="flex items-center justify-center mb-8">
              <Quote className="text-[#0f107c]" size={48} />
            </div>

            <div className="text-center mb-8">
              <div
                className={`transition-all duration-500 ${
                  isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
                }`}
              >
                {/* Aplica diferentes tamanhos de fonte para desktop e mobile */}
                <p className={`text-gray-700 leading-relaxed mb-6 italic
                                md:text-2xl md:h-[150px] /* Tamanho maior e altura fixa para desktop */
                                text-base h-[120px] /* Tamanho menor e altura fixa para mobile */
                                overflow-hidden
                                text-ellipsis
                                flex items-center justify-center
                               `}>
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex justify-center mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="text-left">
                    <h4 className="font-bold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-[#0f107c] text-sm font-medium">{testimonials[currentTestimonial].service}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#0f117c7f] text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#0f117c7f] text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentTestimonial(index)
                    setIsAnimating(false)
                  }, 500)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-[#0f107c] w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid - Mantendo altura fixa para consistência */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow opacity-0 animate-fade-in-up min-h-[250px] flex flex-col justify-between"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700 mb-4 italic
                            md:h-[100px] /* Altura fixa desktop */
                            h-[80px]  /* Altura fixa mobile */
                            overflow-hidden
                            text-ellipsis
                            flex-grow">
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <div className="flex items-center space-x-3 mt-auto">
                <div>
                  <h5 className="font-semibold text-gray-800">{testimonial.name}</h5>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}