import React from "react";
import { Helmet } from "react-helmet";

import CompFooter from "../../components/Footer";
import CompFaq from "../../components/Faq";

export default function PageAjuda() {
  return (
    <div>
      <Helmet>
        <title>Hunter Store - Ajuda</title>
        <meta name="description" content="Página de ajuda do Hunter Store" />
        <meta name="keywords" content="ajuda, suporte, Hunter Store" />
      </Helmet>
      <section>
        <div className="w-full">
          <div className="max-w-[1245px] mx-auto px-4 py-6 lg:border-b-[1px]  ">
            <a href="/">
              <img
                className="w-auto lg:block h-full"
                src="/logo.png"
                alt="Logo Hunter"
              />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1240px] mx-auto mt-4 h-full p-5">
          <h1 className="w-full text-center mb-4 text-[2.5rem] font-semibold">
            Central de Ajuda
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="border-[1px] p-4">
              <h3 className="border-b-[1px] text-center text-2xl font-semibold pb-1">
                Meus pedidos
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Acompanhar meus pedidos
                </p>
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Acessar ou estornar meus vales-trocas
                </p>
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Verificar status de pagamento
                </p>
              </div>
            </div>
            <div className="border-[1px] p-4">
              <h3 className="border-b-[1px] text-center text-2xl font-semibold pb-1">
                Meus pedidos
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Acompanhar meus pedidos
                </p>
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Acessar ou estornar meus vales-trocas
                </p>
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Verificar status de pagamento
                </p>
              </div>
            </div>
            <div className="border-[1px] p-4">
              <h3 className="border-b-[1px] text-center text-2xl font-semibold pb-1">
                Meus pedidos
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Acompanhar meus pedidos
                </p>
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Acessar ou estornar meus vales-trocas
                </p>
                <p className="font-semibold hover:underline cursor-pointer">
                  {">"} Verificar status de pagamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1240px] mx-auto mt-[6rem] h-full p-5 border-[1px]">
          <div className="grid grid-cols-2 items-center justify-items-between  border-b-[1px] mb-[3em] pb-5 ">
            <div className="h-full">
              <h2 className="w-full text-start mb-1 text-[1.5rem] font-semibold">
                ASSISTÊNCIA RÁPIDA
              </h2>
              <p className="text-start ml-[3rem] text-gray-600">
                Perguntas frequentes
              </p>
            </div>
            <div className="">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  class="block w-full pl-10 text-sm focus:outline-none border-[1px] rounded-full p-4 focus:border-black"
                  placeholder="Busque aqui por mais informações"
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Entrega
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  É possível alterar o endereço de entrega após ter efetuado a
                  compra?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  O que devo fazer se ainda não recebi o meu pedido, e o prazo
                  de entrega já se excedeu?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Como identificar a melhor opção de frete para o meu pedido?
                </p>
              </div>
              <p className="font-semibold cursor-pointer hover:underline text-end mt-3">
                ver mais
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Devoluções
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Como preparar um pacote ou produto para o processo de
                  devolução?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Qual é a política para a devolução de um pedido realizado em
                  Hunter.com.br?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  30 dias de teste - Hunter ZoomX Invincible Run
                </p>
              </div>
              <p className="font-semibold cursor-pointer hover:underline text-end mt-3">
                ver mais
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Produtos
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Qual é a política de devolução para produtos personalizados?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Como eu posso encontrar um produto que não está disponível na
                  loja online Hunter?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  O que posso fazer se o produto chegar danificado ou
                  defeituoso?
                </p>
              </div>
              <p className="font-semibold cursor-pointer hover:underline text-end mt-3">
                ver mais
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Pedidos
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Como cancelar um pedido?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Que tipo de e-mail ou comunicação irei receber sobre a minha
                  compra?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  É possível alterar um pedido após o fechamento?
                </p>
              </div>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Pagamentos
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Meu boleto venceu. Como devo proceder?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Qual o prazo de aprovação do meu pedido?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Quais são as opções de pagamento disponíveis em Hunter.com.br?
                </p>
              </div>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Corporativo
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Qual é o comprometimento da Hunter em relação à
                  sustentabilidade?
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Atualização das políticas de privacidade e termos de uso para
                  a Hunter Brasil
                </p>
                <p className="hover:underline cursor-pointer text-gray-500">
                  Posso usar materiais de propaganda da Hunter, como por exemplo
                  imagens, logos ou marcas registradas?
                </p>
              </div>
              <p className="font-semibold cursor-pointer hover:underline text-end mt-3">
                ver mais
              </p>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Termos de Serviço
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Termos de Serviço
                </p>
              </div>
            </div>
            <div className="p-5 bg-gray-50 rounded-md">
              <h3 className="text-start text-2xl font-semibold pb-1">
                Política de Privacidade
              </h3>
              <div className="flex flex-col items-start justify-between mt-3 gap-3">
                <p className="hover:underline cursor-pointer text-gray-500">
                  Política de Privacidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CompFaq />
      <section>
        <div className="max-w-[1240px] mx-auto h-full p-5 mb-[5rem] mt-[4rem]">
          <div className="text-center mb-[3rem]">
            <h1 className="w-full mb-1 text-[2.5rem] font-semibold">
              Entre em contato
            </h1>
            <p className="text-gray-500 font-semibold">
              Nosso time de atendimento está disponível de segunda a sábado das
              08h às 20h, exceto feriados.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="lg:border-r-[3px] border-black p-4 flex flex-col items-center justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M2.001 9.352c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.09-1.305-1.705-2.984-1.705-4.695-.001-4.826 4.718-8.352 9.999-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm20.883 10.169c-.029 1.001.558 2.435 1.088 3.479-1.419-.258-3.438-.824-4.352-1.385-.772.188-1.514.274-2.213.274-3.865 0-6.498-2.643-6.498-5.442 0-3.174 3.11-5.467 6.546-5.467 3.457 0 6.546 2.309 6.546 5.467 0 1.12-.403 2.221-1.117 3.074zm-7.424-2.429c0-.206-.061-.378-.184-.517-.125-.139-.318-.255-.584-.349-.242-.085-.393-.155-.455-.208-.129-.108-.133-.292.018-.394.075-.051.18-.077.312-.077.217 0 .428.046.627.14l.15-.524c-.221-.1-.475-.149-.768-.149-.336 0-.605.082-.807.244s-.303.37-.303.622c0 .39.273.675.822.858.184.061.311.121.385.179.156.123.146.338-.012.446-.082.056-.195.083-.342.083-.255 0-.504-.062-.752-.188l-.137.542c.244.123.527.184.846.184.371 0 .662-.083.869-.248.211-.164.315-.379.315-.644zm3.656.846l-.154-2.875h-.906l-.613 1.983-.508-1.983h-.895l-.184 2.875h.615l.102-2.321h.008s.352 1.439.59 2.273h.516c.396-1.209.631-1.968.699-2.273h.014c0 .406.021 1.18.067 2.321h.649zm2.451-.846c0-.209-.064-.386-.189-.527-.124-.14-.322-.259-.59-.353-.237-.084-.389-.154-.449-.205-.123-.103-.125-.273.016-.369.072-.049.176-.074.305-.074.232 0 .435.052.637.147l.158-.556-.012-.006c-.221-.1-.48-.15-.774-.15-.338 0-.612.083-.815.248-.205.165-.311.379-.311.634 0 .396.281.688.836.872.179.061.306.12.379.177.146.115.14.318-.012.42-.078.054-.19.081-.333.081-.274 0-.521-.072-.761-.195l-.145.574c.273.136.559.19.863.19.374 0 .67-.084.879-.251.211-.167.318-.388.318-.657z" />
              </svg>
              <h3 className="text-center text-2xl font-semibold pb-1">
                Assistente virtual
              </h3>
              <p className="text-gray-500 text-center">
                Tire dúvidas, consulte seus pedidos e veja o status do
                atendimento.
              </p>
            </div>
            <div className="lg:border-r-[3px] border-black p-4 flex flex-col items-center justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path d="M22 5v14h-20v-14h20zm2-2h-24v18h24v-18zm-2 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z" />
              </svg>
              <h3 className="text-center text-2xl font-semibold pb-1">
                E-mail
              </h3>
              <p className="text-gray-500 text-center">
                Faça sua solicitação com os nossos atletas de atendimento.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center justify-around">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" />
              </svg>
              <h3 className="text-center text-2xl font-semibold pb-1">
                (11) 4004-2456
              </h3>
              <p className="text-gray-500 text-center">
                Acompanhe suas solicitações com os nossos atletas de
                atendimento.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CompFooter />
    </div>
  );
}
