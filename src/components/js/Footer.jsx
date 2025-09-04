"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ChevronUp } from "lucide-react"
import Modal from "./Modal"
import PrivacyPolicy from "./PrivacyPolicy"
import TermsOfService from "./TermsOfService"

export default function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const services = [
    "Instalação de Portões",
    "Manutenção Preventiva",
    "Reparo de Portões",
    "Automação Residencial",
    "Portões Industriais",
    "Sistemas de Segurança",
  ]

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <footer className="bg-[#020229] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#0f107c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Doutor Portões</h3>
                <p className="text-gray-400 text-sm">Especialistas em Portões</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 15 anos oferecendo soluções completas em portões automáticos com qualidade, segurança e
              garantia total.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0f107c] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0f107c] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#0f107c] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-[#0f107c] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-[#0f107c] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Certificações</h5>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">ISO</div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs">CERT</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-[#0f107c] mt-1" size={20} />
                <div>
                  <p className="font-medium">(11) 98834-5716</p>
                  <p className="text-gray-400 text-sm">Horário comercial</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-[#0f107c] mt-1" size={20} />
                <div>
                  <p className="font-medium">portoesdoutor@gmail.com</p>
                  <p className="text-gray-400 text-sm">Resposta rápida</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-[#0f107c] mt-1" size={20} />
                <div>
                  <p className="font-medium">Rua Forte de Iguatemi, 220</p>
                  <p className="text-gray-400 text-sm">Jardim Adutora, São Paulo SP</p>
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-800">
              <h5 className="font-semibold text-blue-400 mb-2">Horário Comercial</h5>
              <p className="text-sm text-gray-300">Seg-Sex: 9h às 18h</p>
              <p className="text-sm text-gray-300">Sáb: 9h às 12h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Doutor Portões. Todos os direitos reservados.
              </p>
              <p className="text-gray-300 text-sm">
                Desenvolvido por{" "}
                <a
                  href="https://kjrdev.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b5b6f1] hover:text-opacity-80 transition-colors font-medium"
                >
                  KJR Desenvolvimento
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Termos de Uso
              </button>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-[#0f107c] rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-colors"
              >
                <ChevronUp size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} title="Política de Privacidade">
        <PrivacyPolicy />
      </Modal>

      <Modal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} title="Termos de Uso">
        <TermsOfService />
      </Modal>
    </footer>
  )
}
