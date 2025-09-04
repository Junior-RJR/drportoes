"use client"

export default function TermsOfService() {
  return (
    <div className="prose max-w-none">
      <h3 className="text-xl font-bold mb-4">Termos de Uso</h3>

      <p className="mb-4">Ao utilizar nossos serviços, você concorda com os seguintes termos e condições.</p>

      <h4 className="text-lg font-semibold mb-2">Serviços Oferecidos</h4>
      <p className="mb-4">
        A Doutor Portões oferece serviços de instalação, manutenção e reparo de portões automáticos.
      </p>

      <h4 className="text-lg font-semibold mb-2">Garantia</h4>
      <p className="mb-4">
        Oferecemos garantia de 12 meses para instalações e 6 meses para reparos, conforme especificado no contrato de
        serviço.
      </p>

      <h4 className="text-lg font-semibold mb-2">Responsabilidades do Cliente</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Fornecer acesso adequado ao local de instalação</li>
        <li>Manter o equipamento conforme orientações técnicas</li>
        <li>Realizar manutenções preventivas recomendadas</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Limitações</h4>
      <p className="mb-4">
        Nossa responsabilidade está limitada ao valor do serviço contratado. Não nos responsabilizamos por danos
        indiretos.
      </p>

      <h4 className="text-lg font-semibold mb-2">Alterações</h4>
      <p>
        Reservamos o direito de alterar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente
        após a publicação.
      </p>
    </div>
  )
}
