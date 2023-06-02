import React from "react";
import { Link } from "react-router-dom";

export default function PageOrder() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Compra Finalizada 🎉
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Obrigado por comprar conosco! Seu pedido foi finalizado com sucesso
            e em breve você receberá um e-mail com os detalhes da sua compra.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>
          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Pagamento Aprovado
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Preparação do Pedido
              </h3>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Pedido Enviado
              </h3>
            </div>
          </div>
          <div className="mt-12 lg:mt-24 rounded-lg border bg-white py-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Código do Pedido
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Anote o código do seu pedido para acompanhar o status da
                entrega.
              </p>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Código:{" "}
                <span className="font-bold">
                  {Math.floor(Math.random() * 1111111111)}
                </span>
              </p>
              <Link
                to="/"
                className="inline-block px-8 py-3 mt-8 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800"
              >
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
