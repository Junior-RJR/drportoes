"use client"

import React from "react"
import Header from "./components/js/Header"
import Hero from "./components/js/Hero"
import Services from "./components/js/Services"
import About from "./components/js/About"
import Carousel from "./components/js/Carousel"
import Testimonials from "./components/js/Testimonials"
import Contact from "./components/js/Contact"
import Footer from "./components/js/Footer"
import Modal from "./components/js/Modal"
import PrivacyPolicy from "./components/js/PrivacyPolicy"
import TermsOfService from "./components/js/TermsOfService"
import "./components/css/globals.css"

function App() {
  const [activeModal, setActiveModal] = React.useState(null)

  const openModal = (modalType) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Carousel />
      <Testimonials />
      <Contact />
      <Footer onOpenModal={openModal} />

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511988345716" // coloque seu número aqui
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <img
          src="/images/icons/whats.svg"
          alt="WhatsApp"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        />
      </a>

      {activeModal === "privacy" && (
        <Modal isOpen={true} onClose={closeModal} title="Política de Privacidade">
          <PrivacyPolicy />
        </Modal>
      )}

      {activeModal === "terms" && (
        <Modal isOpen={true} onClose={closeModal} title="Termos de Serviço">
          <TermsOfService />
        </Modal>
      )}
    </div>
  )
}

export default App
