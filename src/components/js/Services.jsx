"use client"

import { useState } from "react"
import { Settings, Wrench, Shield, Zap, Home, Building, ChevronRight, Check } from "lucide-react"

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: Settings,
      title: "Instalação de Motores Ultrarrápidos",
      description: "Instalação completa de motores de 4, 8, 16 segundos",
      features: ["Motores de 4 segundos", "Motores silenciosos no fechamento", "Mais segurança devido ao fechamento rápido"],
      video: "/videos1/motorresRapidos.mp4",
    },
    {
      icon: Wrench,
      title: "Manutenção e Reparo",
      description: "Serviços especializados em manutenção preventiva e corretiva",
      features: ["Manutenção Preventiva", "Troca de cabo de Aço", "Portão com barulho no fechamento", "Lubrificação de cabos e motor", "Reprogramação de controles"],
      video: "/videos1/manutencaoReparo.mp4",
    },
    {
      icon: Zap,
      title: "Instalação de Trava Automática",
      description: "Instalação de travas que fecham sincronizadas com o portão e traz segurança contra invasões",
      features: [
        "Tranca o portão de forma automatica",
        "Impede a abertura caso alguém puxe o portão",
        "Protege o motor",
        "Impede a abertura em queda de energia ",
      ],
      video: "/videos1/travaAutomatica.mp4",
    },
    {
      icon: Shield,
      title: "Sistemas de Segurança",
      description: "Sistema de câmeras, sensores antiesmagamento, controle anti-clonagem e barreira de segurança para deixar sua casa mais moderna e segura",
      features: [
        "Fechadura Elétrica",
        "Sistema antiesmagamento",
        "Controle anti-clonagem",
        "Fechadura Eletrônica Digital",
      ],  
      video: "/videos1/sistemaSeguranca.mp4",
    },
    {
      icon: Home,
      title: "Soluções Inteligentes em Segurança Residencial",
      description: ":Proteção inteligente 24hs por dia, 7 dias por semana",
      features: ["Câmeras de Alta Definição", "Alarmes Inteligentes", "Cercas Elétricas", "Sensores de Barreiras"],
      video: "/videos1/solucoesInteligentes.mp4",
    },
    {
      icon: Building,
      title: "Portões Industriais",
      description: "Soluções robustas para empresas e indústrias",
      features: ["Portões de grande porte", "Sistemas industriais", "Alta durabilidade", "Manutenção especializada"],
      video: "/videos1/portoesIndustriais.mp4",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em portões automáticos com qualidade e garantia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center"></div> */}
          {/* Services List */}
          <div className="space-y-3 md:space-y-4">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? "bg-[#0f107c]/10 border-2 border-[#0f107c] shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div
                      className={`p-2 md:p-3 rounded-lg flex-shrink-0 ${
                        activeService === index ? "bg-[#0f107c] text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      <IconComponent size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-2 md:mb-3 text-sm md:text-base">{service.description}</p>
                      <div className="flex items-center text-[#0f107c] font-medium text-sm md:text-base">
                        <span>Ver detalhes</span>
                        <ChevronRight size={14} className="ml-1 md:w-4 md:h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Service Details */}
          <div className="lg:sticky lg:top-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* <div className="relative h-64 md:h-80"> */}
                <div className="relative h-96 md:h-[410px]">
                {/* <video
                  src={services[activeService].image || "/placeholder.svg"}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                /> */}
              {services[activeService].video ? (
                    <video
                      key={services[activeService].video}
                      src={services[activeService].video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      // className="w-full h-full object-cover"
                      className="w-full h-full object-contain" 
                    />
                  ) : (
                    <img
                      src={services[activeService].image || "/placeholder.svg"}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover"
                    />
                  )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">{services[activeService].title}</h3>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{services[activeService].description}</p>

                <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4">O que está incluído:</h4>

                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-green-600 md:w-3 md:h-3" />
                      </div>
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <button
                  onClick={scrollToContact}
                  href="https://wa.me/5511988345716?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                  className="w-full bg-[#0f107c] text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base"
                >
                  Solicitar Orçamento
                </button> */}

                 <a
                  href="https://wa.me/5511988345716?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0f107c] text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Solicitar Orçamento
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>





              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
