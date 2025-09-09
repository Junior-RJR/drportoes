"use client"

export default function PrivacyPolicy() {
  return (
    <div className="prose max-w-none text-gray-800">
      {/* <h3 className="text-xl font-bold mb-4">Política de Privacidade</h3> */}

      <p className="mb-4">
        A Doutor Portões respeita sua privacidade e está comprometida em proteger suas informações pessoais.
      </p>

      <h4 className="text-lg font-semibold mb-2">Coleta de Informações</h4>
      <p className="mb-4">
        Coletamos informações quando você preenche nossos formulários de contato, incluindo nome, email, telefone e
        mensagem.
      </p>

      <h4 className="text-lg font-semibold mb-2">Uso das Informações</h4>
      <p className="mb-4">Utilizamos suas informações para:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Responder às suas solicitações de orçamento</li>
        <li>Entrar em contato sobre nossos serviços</li>
        <li>Melhorar nosso atendimento</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Proteção de Dados</h4>
      <p className="mb-4">
        Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado.
      </p>

      <h4 className="text-lg font-semibold mb-2">Contato</h4>
      <p>Para questões sobre esta política, entre em contato conosco através do email: portoesdoutor@gmail.com</p>
    </div>
  )
}
