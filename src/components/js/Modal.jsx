"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative">
          <div className="flex items-center justify-center p-4 border-b border-gray-200">
            {/* Botão X → só no mobile */}
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute left-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-700
                         md:hidden"
            >
              <X size={20} />
            </button>

            {/* Título */}
            <h3 className="text-xl font-bold text-gray-800 text-center md:text-left">
              {title}
            </h3>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">{children}</div>

        {/* Rodapé → só no desktop */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0f107c] text-white rounded-lg hover:bg-opacity-90 transition-colors hidden md:inline-flex"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}
