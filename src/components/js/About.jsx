"use client"

import { useState } from "react"
import { Award, Users, Clock, Shield, ChevronRight } from "lucide-react"
import equipe from "../images/equipe.jpg";

export default function About() {
  const [activeTab, setActiveTab] = useState(0)

  const stats = [
    { icon: Award, number: "15+", label: "Anos de Experiência" },
    { icon: Users, number: "6000+", label: "Clientes Satisfeitos" },
    { icon: Clock, number: "Horário Comercial", label: "Atendimento" },
    { icon: Shield, number: "100%", label: "Garantia" },
  ]

    const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  const tabs = [
    {
      title: "Nossa História",
      content:
        "Fundada em 2008, a Doutor Portões nasceu da paixão por oferecer soluções de qualidade em automação de portões. Ao longo dos anos, construímos uma reputação sólida baseada na excelência do atendimento e na qualidade dos nossos serviços.",
    },
    {
      title: "Missão",
      content:
        "Nossa missão é proporcionar segurança, praticidade e tranquilidade aos nossos clientes através de soluções inovadoras em portões automáticos, sempre com o melhor custo-benefício do mercado.",
    },
    {
      title: "Valores",
      content:
        "Trabalhamos com transparência, qualidade e compromisso. Cada projeto é tratado com dedicação máxima, garantindo a satisfação total do cliente e a durabilidade dos nossos serviços.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#0f107c] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <IconComponent className="text-white" size={32} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre a Doutor Portões</h2>

            {/* Tabs */}
            <div className="mb-8">
              <div className="flex space-x-1 bg-gray-200 rounded-lg p-1 mb-6">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-300 ${
                      activeTab === index ? "bg-white text-bg-[#0f107c] shadow-sm" : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 leading-relaxed text-lg">{tabs[activeTab].content}</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Equipe técnica especializada e certificada",
                "Materiais de primeira qualidade",
                "Atendimento personalizado e humanizado",
                "Suporte técnico completo pós-venda",
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0f107c] rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button 
            onClick={scrollToServices}
            className="bg-[#0f107c] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center group">
              Conheça Nossos Serviços
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={equipe}
                alt="Equipe Doutor Portões"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">100%</div>
                  <div className="text-gray-600 text-sm">Garantia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
