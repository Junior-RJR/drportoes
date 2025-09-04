"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        {/* Top Bar - Hidden on mobile */}
        <div className="bg-[#0f107c] text-white py-2 px-4 hidden md:block">
          <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>(11) 98834-5716</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>portoesdoutor@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, SP</span>
            </div>
          </div>
        </div>

        {/* Mobile Top Bar - Simplified */}
        <div className="bg-blue-900 text-white py-1 px-4 md:hidden">
          <div className="flex justify-center items-center text-xs">
            <Phone className="w-3 h-3 mr-1" />
            <span>(11) 98834-5716</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-2 md:py-4 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-3">
              <img className="logo-header" src="/images/logo-dr-portoes.png" alt="Logo Doutor Portões" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#0f107c] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
              >
                Orçamento Grátis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-900 z-50 relative"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-gray-700" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40"
          style={{
            backgroundColor: "#1e3a8a",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            position: "fixed",
          }}
        >
          <div
            className="flex flex-col h-full w-full"
            style={{
              backgroundColor: "#1e3a8a",
              minHeight: "100vh",
            }}
          >
            {/* Top bar in mobile menu */}
            <div className="py-3 px-4" style={{ backgroundColor: "#1e3a8a" }}>
              <div className="flex justify-center items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-white" />
                <span className="text-white">(11) 98834-5716</span>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-medium text-white hover:text-blue-200 transition-colors py-4 border-b border-blue-700"
                style={{ color: "white" }}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-2xl font-medium text-white hover:text-blue-200 transition-colors py-4 border-b border-blue-700"
                style={{ color: "white" }}
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-2xl font-medium text-white hover:text-blue-200 transition-colors py-4 border-b border-blue-700"
                style={{ color: "white" }}
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-2xl font-medium text-white hover:text-blue-200 transition-colors py-4 border-b border-blue-700"
                style={{ color: "white" }}
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-2xl font-medium text-white hover:text-blue-200 transition-colors py-4 border-b border-blue-700"
                style={{ color: "white" }}
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-2xl font-medium text-white hover:text-blue-200 transition-colors py-4 border-b border-blue-700"
                style={{ color: "white" }}
              >
                Contato
              </button>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-xl mt-8"
              >
                Orçamento Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
