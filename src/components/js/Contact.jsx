"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSendOptions, setShowSendOptions] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSendOptions(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendByEmail = () => {
    const subject = `Orçamento - ${formData.service || "Serviço de Portão"}`
    const body = `Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Serviço: ${formData.service}
Mensagem: ${formData.message}`

    const mailtoLink = `mailto:portoesdoutor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink

    setShowSendOptions(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const sendByWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message}`

    const whatsappLink = `https://wa.me/5511988345716?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")

    setShowSendOptions(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 98834-5716",
      subtitle: "Horário comercial",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "portoesdoutor@gmail.com",
      subtitle: "Resposta em até 2 horas",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua Henrique Mazzauti, 219",
      subtitle: "Jardim Sapopemba, São Paulo - SP",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta: 9h às 18h",
      subtitle: "Sábado: 9h às 12h",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solicite seu orçamento gratuito ou tire suas dúvidas conosco
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicite seu Orçamento</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                <h4 className="text-xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-600">Entraremos em contato em breve.</p>
              </div>
            ) : showSendOptions ? (
              <div className="text-center py-8">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Como deseja enviar sua mensagem?</h4>
                <div className="space-y-4">
                  <button
                    onClick={sendByEmail}
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Mail className="mr-2" size={20} />
                    Enviar por E-mail
                  </button>
                  <button
                    onClick={sendByWhatsApp}
                    className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Enviar por WhatsApp
                  </button>
                  <button
                    onClick={() => setShowSendOptions(false)}
                    className="w-full bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Serviço de Interesse</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="instalacao">Instalação de Portão</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="reparo">Reparo</option>
                    <option value="automacao">Automação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensagem *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva seu projeto ou necessidade..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0f107c] text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-800 font-medium">{item.info}</p>
                        <p className="text-gray-600 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-600 text-white p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <MessageCircle size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-1">Atendimento via WhatsApp</h4>
                  <p className="mb-4">Fale conosco agora mesmo pelo WhatsApp</p>
                  <button
                    onClick={() => window.open("https://wa.me/5511988345716", "_blank")}
                    className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Chamar no WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                title="Localização no Google Maps"
                src="https://www.google.com/maps/embed?pb=!4v1694097880472!6m8!1m7!1s3_0RRMm3AR2BtRz5Bp1XqQ!2m2!1d-23.5870126!2d-46.3956405!3f177.23358!4f0!5f1.1924812503605782"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* <div className="p-4 text-center">
                <p className="text-gray-600 font-medium">Rua Henrique Mazzauti, 219</p>
                <p className="text-gray-600">Jardim Sapopemba, São Paulo - SP</p>
                <p className="text-gray-500 text-sm mt-2">Atendemos toda a região metropolitana</p>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
