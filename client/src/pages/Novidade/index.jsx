import React from "react";
import { Helmet } from "react-helmet";

import { HiGlobeAlt } from "react-icons/hi";

import CompHeader from "../../components/Header";
import CompCarrousel from "../../components/CarrouselNovelties";
import CompFooter from "../../components/Footer";

export default function PageNovidades() {
  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>Hunter Store - Novidades</title>
        <meta
          name="description"
          content="Fique por dentro das últimas novidades em produtos eletrônicos na Hunter Store."
        />
        <meta
          name="keywords"
          content="novidades, produtos eletrônicos, Hunter Store"
        />
      </Helmet>
      <CompHeader />

      <section>
        <div className="max-w-[1240px] mx-auto mt-[8rem]">
          <div className="flex flex-wrap p-2 items-center lg:justify-between justify-start gap-4 gap-y-[4rem]">
            <div className="pl-2">
              <h1 className="lg:text-[3.5rem] text-[2.5rem] text-start lg:w-[45rem] font-semibold">
                Shop.
                <span className="text-secondary">
                  O melhor jeito de comprar o que você ama.
                </span>
              </h1>
            </div>
            <div className="flex flex-col lg:w-[21rem] items-center justify-between gap-y-3">
              <div className="lg:mb-0 p-1 w-full flex items-center gap-x-4">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_6.png"
                  alt=""
                  className="h-12 w-12 rounded-full overflow-hidden"
                />
                <div className="flex flex-col items-start">
                  <p className="font-semibold">
                    Precisa de ajuda para comprar?
                  </p>
                  <a href="#" className="text-blue-700 hover:underline">
                    Fale com um especialista
                  </a>
                </div>
              </div>
              <div className="lg:mb-0 w-full flex items-center p-1 gap-x-4">
                <p>
                  <HiGlobeAlt className="w-12 h-12 overflow-hidden rounded-full" />
                </p>
                <div className="flex flex-col items-start">
                  <p className="font-semibold">Visite uma Hunter Store</p>
                  <a
                    href="#"
                    target="_blank"
                    className="text-blue-700 hover:underline"
                  >
                    Procure uma loja perto de você
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1360px] ml-auto mt-[5.5rem]">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">Novidades</h2>
            <p className="max-w-md mx-auto mt-4 text-secondary text-lg sm:mb-12 xl:max-w-3xl">
              Veja os últimos lançamentos em produtos eletrônicos.
            </p>
          </div>
          <CompCarrousel />
        </div>
      </section>

      <section>
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6 mt-[4rem]">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">Boas compras</h2>
            <p className="max-w-md mx-auto mt-4 text-secondary text-lg sm:mb-12 mb-4 xl:max-w-3xl">
              Presentes de última hora que vão surpreender quem dá e quem ganha.
            </p>
          </div>
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <div className="flex flex-col md:flex-row items-strech justify-between bg-[#020129] py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-2xl shadow-xl">
              <div className="flex flex-col justify-center md:w-1/2 gap-y-5">
                <h3 className=" font-semibold text-primary uppercase">
                  Guia de presentes para o Natal
                </h3>
                <h1 className="text-3xl lg:text-4xl font-semibold text-primary">
                  Ainda dá tempo de presentear com Hunter Store
                </h1>
                <p className="text-base lg:text-xl text-primary mt-2">
                  Presentes de última hora que vão surpreender quem dá e quem
                  ganha.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img src="/saci.png" alt="" />
              </div>
            </div>
            <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-between items-center relative  rounded-2xl shadow-lg">
              <div className="flex flex-col justify-center items-start pt-4 gap-y-3">
                <h3 className=" font-semibold uppercase">
                  Embalagem para presente
                </h3>
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Deixe tudo mais especial com uma Embalagem para presente.
                </h1>
              </div>
              <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                <img
                  src="/presente.png"
                  alt=""
                  className="md:w-20 md:h-20 lg:w-full lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto mt-[4rem]">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">Lojas especiais</h2>
            <p className="max-w-md mx-auto mt-4 text-secondary text-lg sm:mb-12 xl:max-w-3xl">
              Desconto para estudantes e professores em Mac e iPad.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 p-5 gap-6 h-full items-center justify-items-center w-full">
            <div className="lg:w-[30rem] lg:h-[35rem] md:w-[50%] md:h-[40rem] py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-between items-center relative rounded-2xl shadow-lg hover:scale-105 duration-500">
              <div className="flex flex-col justify-center items-start pt-4 gap-y-3">
                <h3 className=" text-sm font-semibold uppercase">
                  Educação e Instituições
                </h3>
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Economize no Mac ou iPad com os preços especiais para a
                  educação¹.
                </h1>
              </div>
              <div className="flex justify-end md:absolute md:bottom-4 lg:bottom-0">
                <img
                  src="/storeCard.png"
                  alt=""
                  className="md:w-full md:h-full lg:w-full lg:h-full"
                />
              </div>
            </div>
            <div className="lg:w-[30rem] lg:h-[35rem] md:w-[50%] md:h-[40rem] py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-between items-center relative rounded-2xl shadow-lg hover:scale-105 duration-500 bg-[#1D1D1F]">
              <div className="flex flex-col justify-center items-start pt-4 gap-y-3">
                <h3 className="text-sm font-semibold uppercase text-primary">
                  Negócios
                </h3>
                <h1 className="text-3xl lg:text-4xl font-semibold text-primary">
                  Seja qual for o tamanho da sua empresa, queremos trabalhar com
                  você¹.
                </h1>
              </div>
              <div className="flex justify-end md:absolute md:bottom-4 lg:bottom-0">
                <img
                  src="/store.png"
                  alt=""
                  className="md:w-full md:h-full lg:w-full lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto mt-[4rem] mb-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              É melhor com a Hunter
            </h2>
            <p className="max-w-md mx-auto mt-4 text-secondary text-lg sm:mb-12 xl:max-w-3xl">
              Faça ainda mais com os produtos e serviços Hunter.{" "}
            </p>
          </div>
          <div className="flex flex-wrap p-3 gap-x-10  h-full items-between justify-center w-full">
            <div className="lg:w-[32%] lg:h-[40rem] md:w-[50%] md:h-[40rem] py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-between items-center relative rounded-2xl shadow-lg hover:scale-105 duration-500">
              <div className="flex flex-col justify-center items-start pt-4 gap-y-3">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Cinco serviços Hunter. Uma só assinatura.
                </h1>
              </div>
              <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                <img
                  src="/card_promo.png"
                  alt="Embalagem para presente"
                  className="md:w-full md:h-full lg:w-full lg:h-full"
                />
              </div>
            </div>
            <div className="lg:w-[32%] lg:h-[40rem] md:w-[50%] md:h-[40rem] py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-between items-center relative rounded-2xl shadow-lg hover:scale-105 duration-500">
              <div className="flex flex-col justify-center items-start pt-4 gap-y-3">
                <h3 className=" font-semibold uppercase">Casa</h3>
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Veja como um app pode controlar toda a sua casa.
                </h1>
              </div>
              <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                <img
                  src="/app_casa.png"
                  alt="Embalagem para presente"
                  className="md:w-full md:h-full lg:w-full lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompFooter />
    </div>
  );
}
