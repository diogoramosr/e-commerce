import React from "react";
import { Helmet } from "react-helmet";

import CompHeader from "../../components/Header";
import CompFooter from "../../components/Footer";

export default function PageHome() {
  return (
    <div>
      <Helmet>
        <title>Hunter Store - Home</title>
        <meta
          name="description"
          content="Encontre os melhores produtos eletrônicos na Hunter Store. Smartphones, TVs, notebooks e muito mais com preços incríveis!"
        />
        <meta
          name="keywords"
          content="eletrônicos, smartphones, TVs, notebooks, Hunter Store"
        />
      </Helmet>
      <CompHeader />
      <section className="max-w-[1240px] flex flex-col items-center mx-auto mt-[7rem] py-4">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center md:py-1 md:px-10 lg:px-32 mb-3">
          <h1 className="font-bold leading-none text-5xl xl:max-w-3xl">
            O favorito de todos
          </h1>
          <p className="mt-4 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-secondary">
            Conheça o iPhone 14: o mais novo lançamento da Apple, repleto de
            recursos avançados para simplificar sua vida.
          </p>
          <a
            href="/categorias/celulares-e-smartphones"
            type="button"
            className="px-8 py-1 text-lg font-semibold underline"
          >
            Shop
          </a>
        </div>
        <div className="lg:w-[40rem] -mt-14 lg:mt-[1rem]">
          <img src="./iphone14.png" alt="" className="w-full h-full" />
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-20 lg:px-8 mt-[3rem]">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Encontre seu mundo
            </h2>
            <p className="max-w-md mx-auto mt-4 text-secondary text-lg sm:mb-12 xl:max-w-3xl">
              Vários produtos para você escolher. Vários jeitos de voar.
              Encontre o seu.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-4">
            <li>
              <a href="/categorias/games" className="relative block group">
                <img
                  src="/gameHome.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-primary">Games</h3>
                  <span className="mt-1.5 inline-block bg-dark px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary">
                    Shop
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/categorias/computadores-e-notebooks  "
                className="relative block group"
              >
                <img
                  src="/computerHome.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-primary">
                    Computadores
                  </h3>
                  <span className="mt-1.5 inline-block bg-dark px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary">
                    Shop
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="/categorias/audio" className="relative block group">
                <img
                  src="/audioHome.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-primary">Audio</h3>
                  <span className="mt-1.5 inline-block bg-dark px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary">
                    Shop
                  </span>
                </div>
              </a>
            </li>
            <li>
              <a href="/categorias/acessorios" className="relative block group">
                <img
                  src="/acessorios.png"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-primary">
                    Acessórios
                  </h3>

                  <span className="mt-1.5 inline-block bg-dark px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary">
                    Shop
                  </span>
                </div>
              </a>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a
                href="/categorias/celulares-e-smartphones"
                className="relative block group"
              >
                <img
                  src="/mobileHome.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-primary">
                    Celulares e Smartphones
                  </h3>
                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-primary">
                    Shop
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto lg:p-0 p-5">
        <div className="h-full mt-[10rem] p-8 rounded-xl bg-red">
          <div className="flex justify-between lg:gap-0 gap-10 p-8 items-center flex-wrap">
            <div className="flex flex-col text-primary lg:w-[32rem] w-full items-start">
              <p className="text-md ">20 % OFF</p>
              <h3 className="uppercase font-bold lg:text-8xl text-4xl">
                Desconto
              </h3>
              <p>1 Mai a 2 Jun</p>
              <span>Mais frete grátis! Usar código: HUNTER</span>
            </div>
            <div className="absolute lg:left-[12rem] lg:-mt-[18rem] lg:w-[42rem] md:w-[32rem] md:left-[18rem] md:-mt-[10rem] lg:visible md:visible invisible ">
              <img src="/ofertas.png" className="h-full w-full" />
            </div>
            <div className="flex gap-y-4 flex-col lg:mt-0 items-start justify-between lg:w-[25rem] w-full text-primary">
              <p>Aproveite por tempo limitado.</p>
              <h3 className="text-4xl uppercase font-bold">Ofertas</h3>
              <p>
                Descubra um mundo de ofertas incríveis.
                <br />
                <span>
                  Só na <span className="font-bold font-2xl">HUNTER.</span>
                </span>
              </p>
              <a
                href="/novidades"
                className="rounded-3xl text-center font-semibold bg-primary p-3 w-[10rem] text-red-700 hover:scale-105 transition-all duration-300"
              >
                <span className="text-red">Shop</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] mx-auto mt-[7rem]">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Na Hunter Store é diferente.
            </h2>
            <p className="max-w-md mx-auto mt-4 text-secondary text-lg xl:max-w-3xl">
              Ainda mais motivos para comprar com a gente.
            </p>
          </div>
          <div className="2xl:container 2xl:mx-auto mt-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-20 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4 items-center justify-start">
              <div className="flex space-x-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M3 18h-2c-.552 0-1-.448-1-1v-2h15v-9h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.121-.728 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-4-2.8h-14v-10c0-.552.448-1 1-1h12c.552 0 1 .448 1 1v10zm3-6v3h4.715l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.42z" />
                </svg>
                <div>
                  <p className="text-xl leading-5 font-semibold">
                    Frete Grátis
                  </p>
                  <p className="text-base leading-6 font-normal mt-1">
                    a partir de R$ 149,99
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z" />{" "}
                </svg>
                <div>
                  <p className="text-xl leading-5 font-semibold">
                    Parcelamento
                  </p>
                  <p className="text-base leading-6 font-normal mt-1">
                    em até 12x sem juros
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.934 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.934 2.002-2 2.002-1.067 0-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.994 5.002v1.098c0 1.067-.932 1.9-1.998 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm4.996 12v7h-18v-7h18zm2-2h-22v14h22v-14z" />{" "}
                </svg>

                <div>
                  <p className="text-xl leading-5 font-semibold">
                    Retire grátis nas lojas
                  </p>
                  <p className="text-base leading-6 font-normal mt-1">
                    sem valor mínimo
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M18 24h-12c-1.104 0-2-.896-2-2v-20c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v20c0 1.104-.896 2-2 2zm1-5.083h-14v3.083c0 .552.449 1 1 1h12c.552 0 1-.448 1-1v-3.083zm-7 3c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm7-17h-14v13h14v-13zm-1-3.917h-12c-.551 0-1 .449-1 1v1.917h14v-1.917c0-.551-.448-1-1-1zm-4.5 1.917h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5z" />{" "}
                </svg>
                <div>
                  <p className="text-xl leading-5 font-semibold">
                    Baixe o nosso App
                  </p>
                  <p className="text-base leading-6 font-normal mt-1">
                    fique por dentro das novidades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto container py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
            <div className="relative">
              <img
                className="hidden lg:block"
                src="./hunterEspecial.jpg"
                alt="table-chair"
              />
              <img
                className="hidden sm:block lg:hidden"
                src="./hunterEspecial.jpg"
                alt="table-chair"
              />
              <img
                className="sm:hidden"
                src="./hunterEspecial.jpg"
                alt="table-chair"
              />
              <div className="absolute bottom-4 sm:bottom-2 inset-x-4 sm:inset-x-10 p-2 flex flex-col justify-start items-start bg-primary">
                <div>
                  <p className="text-2xl leading-6 uppercase">
                    Especial <span className="font-semibold">Hunter</span>
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center space-x-2">
                    <a
                      className="text-sm font-medium leading-none hover:underline uppercase"
                      href="/novidades"
                    >
                      clique aqui
                    </a>
                    <svg
                      className="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33337 8H12.6667"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.6667L12.6667 8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 5.33333L12.6667 8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="hidden lg:block"
                src="./jblEspecial.jpg"
                alt="chair-wood-fire"
              />
              <img
                className="hidden sm:block lg:hidden"
                src="./jblEspecial.jpg"
                alt="chair-wood-fire"
              />
              <img
                className="sm:hidden"
                src="./jblEspecial.jpg"
                alt="chair-wood-fire"
              />
              <div className="absolute bottom-4 sm:bottom-4 inset-x-4 sm:inset-x-10 p-2 bg-primary flex flex-col justify-start items-start">
                <div>
                  <p className="text-2xl leading-6 uppercase">
                    <span className="font-semibold">JBL</span> FLIP
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center space-x-2">
                    <a
                      className="text-sm font-medium leading-none hover:underline uppercase"
                      href="/categorias/audio"
                    >
                      Vem ver
                    </a>
                    <svg
                      className="fill-current"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33337 8H12.6667"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.6667L12.6667 8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 5.33333L12.6667 8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1240px] mx-auto mt-[6rem]">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">As melhores marcas</h2>
          <p className="max-w-md mx-auto mt-4 text-secondary text-lg sm:mb-12 xl:max-w-3xl">
            As melhores marcas de produtos eletrônicos em um só lugar!
          </p>
        </div>
        <div className="bg-secondary-light p-6 mt-2 rounded-lg">
          <div className="container items-center flex flex-wrap justify-center mx-auto">
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="fill-current w-14 h-14"
              >
                <title>Apple icon</title>
                <path d="M9.438 31.401c-0.63-0.422-1.193-0.938-1.656-1.536-0.516-0.615-0.984-1.266-1.422-1.938-1.021-1.495-1.818-3.125-2.375-4.849-0.667-2-0.99-3.917-0.99-5.792 0-2.094 0.453-3.922 1.339-5.458 0.651-1.198 1.625-2.203 2.797-2.906 1.135-0.708 2.453-1.094 3.786-1.12 0.469 0 0.974 0.068 1.51 0.198 0.385 0.109 0.854 0.281 1.427 0.495 0.729 0.281 1.13 0.453 1.266 0.495 0.427 0.156 0.786 0.224 1.068 0.224 0.214 0 0.516-0.068 0.859-0.172 0.193-0.068 0.557-0.188 1.078-0.411 0.516-0.188 0.922-0.349 1.245-0.469 0.495-0.146 0.974-0.281 1.401-0.349 0.521-0.078 1.036-0.104 1.531-0.063 0.948 0.063 1.813 0.266 2.589 0.557 1.359 0.547 2.458 1.401 3.276 2.615-0.349 0.214-0.667 0.458-0.969 0.734-0.651 0.573-1.198 1.25-1.641 2.005-0.573 1.026-0.865 2.188-0.859 3.359 0.021 1.443 0.391 2.714 1.12 3.813 0.521 0.802 1.208 1.484 2.047 2.047 0.417 0.281 0.776 0.474 1.12 0.604-0.161 0.5-0.333 0.984-0.536 1.464-0.464 1.078-1.016 2.109-1.667 3.083-0.578 0.839-1.031 1.464-1.375 1.88-0.536 0.635-1.052 1.12-1.573 1.458-0.573 0.38-1.25 0.583-1.938 0.583-0.469 0.021-0.932-0.042-1.38-0.167-0.385-0.13-0.766-0.271-1.141-0.432-0.391-0.177-0.792-0.333-1.203-0.453-0.51-0.135-1.031-0.198-1.552-0.198-0.536 0-1.057 0.068-1.547 0.193-0.417 0.12-0.818 0.26-1.214 0.432-0.557 0.234-0.927 0.391-1.141 0.458-0.427 0.125-0.87 0.203-1.318 0.229-0.693 0-1.339-0.198-1.979-0.599zM18.578 6.786c-0.906 0.453-1.771 0.646-2.63 0.583-0.135-0.865 0-1.75 0.359-2.719 0.318-0.828 0.745-1.573 1.333-2.24 0.609-0.693 1.344-1.266 2.172-1.677 0.88-0.453 1.719-0.698 2.521-0.734 0.104 0.906 0 1.797-0.333 2.76-0.307 0.854-0.76 1.641-1.333 2.344-0.583 0.693-1.302 1.266-2.115 1.682z"></path>
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Samsung icon</title>
                <path d="M26.422 13.708l0.063 3.589h-0.031l-1.042-3.589h-1.708v4.521h1.13l-0.063-3.714h0.031l1.115 3.714h1.635v-4.521zM4.891 13.708l-0.854 4.568h1.234l0.63-4.156h0.026l0.615 4.156h1.224l-0.844-4.568zM11.797 13.708l-0.563 3.484h-0.031l-0.568-3.484h-1.865l-0.089 4.568h1.146l0.031-4.109h0.010l0.766 4.109h1.161l0.766-4.109h0.031l0.031 4.109h1.146l-0.109-4.568zM2.109 16.979c0.047 0.104 0.031 0.26 0.016 0.333-0.031 0.156-0.141 0.307-0.443 0.307-0.292 0-0.458-0.167-0.458-0.411v-0.443h-1.224v0.349c0 1.026 0.807 1.328 1.667 1.328 0.823 0 1.51-0.286 1.62-1.036 0.063-0.396 0.016-0.656 0-0.75-0.214-0.964-1.958-1.234-2.078-1.771-0.016-0.094-0.016-0.182 0-0.245 0.031-0.151 0.135-0.307 0.411-0.307s0.427 0.167 0.427 0.411v0.276h1.146v-0.318c0-0.995-0.901-1.146-1.542-1.146-0.813 0-1.484 0.271-1.604 1.005-0.031 0.198-0.047 0.385 0.016 0.615 0.182 0.943 1.818 1.219 2.047 1.802zM16.979 16.979c0.047 0.104 0.031 0.245 0.016 0.333-0.031 0.156-0.141 0.307-0.443 0.307-0.292 0-0.458-0.167-0.458-0.411v-0.443h-1.224v0.349c0 1.010 0.792 1.318 1.651 1.318 0.823 0 1.495-0.276 1.604-1.042 0.063-0.396 0.016-0.641 0-0.75-0.182-0.948-1.911-1.234-2.031-1.755-0.016-0.094-0.016-0.182 0-0.245 0.026-0.151 0.135-0.307 0.411-0.307 0.26 0 0.427 0.167 0.427 0.411v0.276h1.13v-0.318c0-0.995-0.885-1.146-1.526-1.146-0.813 0-1.469 0.255-1.589 1.005-0.031 0.198-0.031 0.385 0.010 0.615 0.188 0.943 1.792 1.203 2.021 1.802zM20.828 17.589c0.323 0 0.411-0.214 0.443-0.333 0.016-0.047 0.016-0.125 0.016-0.172v-3.375h1.161v3.286c0 0.089 0 0.26-0.016 0.302-0.073 0.859-0.75 1.135-1.589 1.135s-1.51-0.276-1.589-1.135c0-0.042-0.016-0.214-0.016-0.302v-3.286h1.161v3.375c0 0.063 0 0.125 0.016 0.172 0 0.12 0.094 0.333 0.411 0.333zM30.365 17.542c0.339 0 0.443-0.214 0.474-0.333 0.016-0.047 0.016-0.125 0.016-0.167v-0.661h-0.474v-0.672h1.62v1.224c0 0.094 0 0.151-0.016 0.307-0.078 0.839-0.797 1.13-1.604 1.13-0.813 0-1.526-0.292-1.604-1.13-0.016-0.156-0.016-0.214-0.016-0.307v-1.927c0-0.073 0.016-0.229 0.016-0.302 0.104-0.859 0.792-1.135 1.604-1.135 0.807 0 1.51 0.276 1.604 1.135 0.016 0.135 0.016 0.302 0.016 0.302v0.156h-1.146v-0.26c0 0 0-0.109-0.016-0.172-0.016-0.104-0.109-0.333-0.458-0.333-0.339 0-0.427 0.214-0.458 0.333-0.016 0.063-0.016 0.141-0.016 0.219v2.094c0 0.057 0 0.12 0.016 0.167 0 0.12 0.12 0.333 0.443 0.333z" />
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Lenovo icon</title>
                <path d="M27.005 15.229c-0.63-0.005-1.13 0.526-1.089 1.151-0.021 0.63 0.479 1.151 1.104 1.156 0.63 0.005 1.125-0.526 1.089-1.156 0.021-0.625-0.479-1.146-1.104-1.151zM18.323 15.229c-0.625-0.005-1.13 0.526-1.083 1.151-0.021 0.63 0.474 1.151 1.104 1.156 0.625 0.005 1.125-0.526 1.083-1.156 0.021-0.625-0.474-1.146-1.104-1.151zM8.979 15.156c-0.339-0.010-0.661 0.141-0.87 0.411-0.203 0.286-0.286 0.635-0.229 0.979l1.969-0.813c-0.146-0.349-0.49-0.578-0.87-0.578zM0 10.667v10.667h32v-10.667zM6.677 18.438h-3.708v-5.333h1.146v4.297h2.563zM9.099 17.609c0.432 0.005 0.854-0.146 1.177-0.438l0.714 0.547c-0.51 0.505-1.193 0.786-1.911 0.786-1.224 0.12-2.297-0.823-2.333-2.052-0.036-1.234 0.979-2.234 2.214-2.188 0.609-0.031 1.203 0.214 1.62 0.667 0.271 0.328 0.443 0.724 0.495 1.146l-2.885 1.203c0.245 0.224 0.573 0.344 0.911 0.328zM15.609 18.438h-1.13v-2.339c-0.016-0.5-0.443-0.891-0.948-0.865-0.5-0.031-0.927 0.365-0.932 0.865v2.339h-1.125v-4.109h1.13v0.589c0.318-0.411 0.813-0.651 1.333-0.656 0.927-0.052 1.698 0.703 1.667 1.63zM18.255 18.505c-1.87-0.078-2.734-2.359-1.38-3.656 1.349-1.292 3.594-0.339 3.594 1.531-0.005 1.208-1.010 2.172-2.214 2.125zM21.984 18.432l-1.688-4.104h1.286l1.021 2.802 1.021-2.802h1.286l-1.693 4.104zM26.932 18.505c-1.865-0.078-2.729-2.359-1.38-3.656 1.354-1.292 3.594-0.339 3.594 1.531-0.005 1.208-1.005 2.172-2.214 2.125zM29.599 17.948h-0.188v0.49h-0.109v-0.49h-0.182v-0.104h0.479zM30.323 18.438h-0.109v-0.422l-0.182 0.286h-0.016l-0.182-0.286v0.422h-0.109v-0.594h0.12l0.177 0.281 0.177-0.281h0.12z" />
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>JBL icon</title>
                <path d="m0 5.264 2.022 4.59 2.022-4.59zm2.022 7.601c.698 0 1.266-.565 1.266-1.26 0-.699-.568-1.262-1.266-1.262a1.262 1.262 0 1 0 0 2.523zM.928 16.227c0 .957.862 2.509 3.315 2.509s3.315-1.188 3.315-2.51V5.266H5.369l.001 11.342c0 .62-.503 1.14-1.126 1.14a1.127 1.127 0 0 1-1.128-1.124l-.001-2.311H.928zm8.289 2.311V5.264h4.374c.845 0 2.187.693 2.187 2.163v2.261c0 .662-.58 1.833-1.44 1.833.86 0 1.44.742 1.44 1.305v3.979c0 .676-.546 1.733-2.187 1.733zm3.38-7.559c.796 0 .995-.134.995-2.214s-.2-2.246-.995-2.246h-1.195v4.457zm.995 3.811c0-2.081 0-2.69-.864-2.69h-1.326v5.348l1.326.003c.863 0 .863-.581.863-2.66zm3.779 3.748H24v-4.226h-2.189l.002 2.31a1.126 1.126 0 0 1-2.255 0V5.265H17.37z" />
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Asus icon</title>
                <path d="M23.904 10.788V9.522h-4.656c-.972 0-1.41.6-1.482 1.182v.018-1.2h-1.368v1.266h1.362zm-6.144.456-1.368-.078v1.458c0 .456-.228.594-1.02.594H14.28c-.654 0-.93-.186-.93-.594v-1.596l-1.386-.102v1.812h-.03c-.078-.528-.276-1.14-1.596-1.23L6 11.22c0 .666.474 1.062 1.218 1.14l3.024.306c.24.018.414.09.414.288 0 .216-.18.24-.456.24H5.946V11.22l-1.386-.09v3.348h5.646c1.26 0 1.662-.654 1.722-1.2h.03c.156.864.912 1.2 2.19 1.2h1.41c1.494 0 2.202-.456 2.202-1.524zm4.398.258-4.338-.258c0 .666.438 1.11 1.182 1.17l3.09.24c.24.018.384.078.384.276 0 .186-.168.258-.516.258h-4.212v1.29h4.302c1.356 0 1.95-.474 1.95-1.554 0-.972-.534-1.338-1.842-1.422zm-10.194-1.98h1.386v1.266h-1.386zM3.798 11.07l-1.506-.15L0 14.478h1.686zm7.914-1.548h-4.23c-.984 0-1.416.612-1.518 1.2v-1.2H3.618c-.33 0-.486.102-.642.33l-.648.936h9.384z" />
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Xiaomi icon</title>
                <path d="M19.96 20a.32.32 0 0 1-.32-.32V4.32a.32.32 0 0 1 .32-.32h3.71a.32.32 0 0 1 .33.32v15.36a.32.32 0 0 1-.33.32zm-6.22 0s-.3-.09-.3-.32v-9.43A2.18 2.18 0 0 0 11.24 8H4.3c-.4 0-.3.3-.3.3v11.38c0 .27-.3.32-.3.32H.33a.32.32 0 0 1-.33-.32V4.32A.32.32 0 0 1 .33 4h12.86a4.28 4.28 0 0 1 4.25 4.27l.01 11.41a.32.32 0 0 1-.32.32zm-6.9 0a.3.3 0 0 1-.3-.3v-9a.3.3 0 0 1 .3-.3h3.77a.3.3 0 0 1 .29.3v9a.3.3 0 0 1-.3.3z" />
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Razer icon</title>
                <path d="M23.4 0a.385.385 0 00-.278.125L22.91.35l-.401.182a.711.711 0 00-.417 0 .305.305 0 01-.171 0 1.005 1.005 0 00-.567 0A.936.936 0 0021 .596a.877.877 0 00-.412.337l-.037.048a1.246 1.246 0 00-.898.684 1.07 1.07 0 00-.07.225 1.935 1.935 0 00-.337-.193 2.026 2.026 0 00-2.063.305 2.08 2.08 0 00-.69 2.139c.086.376.23.737.428 1.069.496.776 1.079 1.494 1.737 2.138.526.512.996 1.078 1.401 1.69l.053.096c.396.754.321 1.31-.219 1.647a1.358 1.358 0 01-.572.198 2.491 2.491 0 00-.144-2.07 2.342 2.342 0 00-.3-.406c-.79-.866-1.63-.674-1.962-.449a.385.385 0 00-.15.455l.027.058a.385.385 0 00.38.188 1.07 1.07 0 01.962.582c.23.384.23.862 0 1.246a4.812 4.812 0 01-.534-.535l-.07-.07-.037-.042a3.368 3.368 0 00-1.92-1.208 3.09 3.09 0 00-.406-1.455 4.368 4.368 0 00-1.358-1.48 2.673 2.673 0 00-.267-.16 3.085 3.085 0 00-2.251-2.717 2.7 2.7 0 00-2.968 1.139c-.053.086-.112.171-.165.267a12.26 12.26 0 00-1.038 2.78 11.64 11.64 0 01-.775 2.187l-.059.107c-.213.374-.406.583-.609.647a.406.406 0 01-.374-.064c-.203-.14-.155-.423 0-.973a3.33 3.33 0 00.128-.45c.07-.33-.005-.673-.203-.946a1.07 1.07 0 00-.786-.411c-.49-.018-.94.27-1.128.722l-.08.15a.968.968 0 00-.316-.46.936.936 0 00-.294-.129 1.016 1.016 0 00-.535-.198.342.342 0 01-.17-.053.711.711 0 00-.434-.097l-.326-.256-.144-.278c-.18-.35-.707-.238-.727.155a.385.385 0 00.032.727l.305.075.342.267c.026.14.093.268.192.37.043.04.072.092.086.149.058.184.167.347.315.47a.877.877 0 00.727.465h.06c.262.313.662.477 1.068.439a1.07 1.07 0 00.23-.054 1.935 1.935 0 000 .38 2.026 2.026 0 001.3 1.636 2.08 2.08 0 002.208-.481c.276-.26.51-.562.695-.893.422-.817.75-1.68.978-2.572.179-.711.433-1.401.76-2.058l.058-.096c.454-.722.973-.936 1.535-.637.18.096.338.231.46.396-.714.12-1.34.543-1.717 1.16-.084.146-.152.3-.203.46-.353 1.117.23 1.748.593 1.925.16.077.353.035.466-.102l.037-.053a.385.385 0 000-.423 1.07 1.07 0 010-1.128c.218-.384.627-.62 1.07-.615-.04.245-.1.486-.177.722l-.034.093a3.533 3.533 0 00-.084 2.324 3.09 3.09 0 00-1.07 1.07 4.368 4.368 0 00-.603 1.913 2.674 2.674 0 000 .31 3.085 3.085 0 00-1.23 3.31 2.7 2.7 0 002.47 2h.31a12.26 12.26 0 002.925-.493 11.64 11.64 0 012.283-.422h.117c.304-.037.61.035.866.203.102.09.152.224.134.358 0 .246-.289.348-.855.466a3.33 3.33 0 00-.45.117 1.192 1.192 0 00-.721.647 1.07 1.07 0 00.037.888c.229.435.704.683 1.193.62h.165a.968.968 0 00-.235.502.936.936 0 000 .364c-.019.183.013.368.091.535.03.054.045.115.043.176-.002.151.045.3.133.422l-.058.412-.166.262a.385.385 0 00.497.535c.287.265.74-.016.63-.39l-.085-.3.064-.433a.711.711 0 00.22-.353.305.305 0 01.085-.15c.131-.141.218-.318.252-.508a.936.936 0 00.122-.336.877.877 0 00-.085-.535v-.053c.134-.376.08-.794-.144-1.123a1.07 1.07 0 00-.16-.171c.115-.05.226-.11.33-.182a2.026 2.026 0 00.77-1.94 2.08 2.08 0 00-1.518-1.674 3.71 3.71 0 00-1.123-.155c-.919.043-1.83.19-2.716.438-.697.198-1.414.322-2.138.369h-.112c-.85-.032-1.294-.374-1.316-1.01-.007-.204.031-.407.113-.594.459.559 1.138.89 1.86.909.17 0 .338-.018.503-.054 1.144-.25 1.4-1.069 1.374-1.475a.385.385 0 00-.321-.353h-.064a.385.385 0 00-.353.235 1.07 1.07 0 01-.984.535 1.214 1.214 0 01-1.069-.631c.233-.088.473-.158.716-.209h.155a3.368 3.368 0 002.01-1.069c.449.243.95.372 1.46.374.679.01 1.35-.138 1.962-.433.094-.044.185-.094.273-.15a3.085 3.085 0 003.48-.587 2.7 2.7 0 00.498-3.139 6.884 6.884 0 00-.15-.273 12.259 12.259 0 00-1.887-2.288 11.64 11.64 0 01-1.508-1.764l-.064-.102a1.294 1.294 0 01-.257-.85.406.406 0 01.16-.267c.225-.107.444.08.83.508.1.118.21.228.326.331.25.225.584.334.92.3a1.07 1.07 0 00.748-.476c.263-.416.24-.951-.06-1.342l-.085-.145c.18.035.365.019.535-.048a.936.936 0 00.32-.197c.178-.076.33-.2.44-.359a.342.342 0 01.133-.123.711.711 0 00.3-.326l.384-.155h.31a.385.385 0 00.353-.577l-.005.01a.385.385 0 00-.118-.128A.385.385 0 0023.4 0zm.006.398l-.187.315.347.086-.395.005-.658.262a.262.262 0 01-.171.262c-.316.182-.198.321-.583.487-.08.032-.107.101-.256.176-.15.075-.407-.027-.535 0a.32.32 0 00-.203.535c.085.144.486.679.192 1.112a.711.711 0 01-1.107.102c-.368-.305-.866-1.214-1.577-.877-.71.336-.502 1.128-.085 1.796.882 1.39 2.705 2.673 3.523 4.277 1 2-1.107 4.336-3.673 3.117a2.326 2.326 0 01-.396.24c-1.069.535-2.512.578-3.395-.117-.395.941-1.79 1.182-2.031 1.24-.423.08-.832.22-1.214.418.487 1.614 2.47 1.454 2.908.427 0 0 .054.824-1.069 1.07a2.139 2.139 0 01-2.288-1.16c-.33.346-.507.81-.492 1.288.027.69.46 1.337 1.69 1.385 1.662.064 4.25-1.203 6.014-.669 1.344.335 1.723 2.065.642 2.93a2.732 2.732 0 01-1.23.385c-.182.01-.198.091-.181.145.016.053.117.053.278.053.582-.053 1.208.283.93 1.166-.043.123.155.352.117.534-.053.262-.112.203-.112.289-.07.412-.235.326-.337.679a.257.257 0 01-.203.208l-.101.706.112.38-.182-.321-.251.257.214-.332.101-.7a.262.262 0 01-.16-.267c0-.364-.182-.332-.128-.75.037-.085 0-.042 0-.31.016-.186.23-.341.272-.48.043-.14.054-.45-.369-.45-.198.006-.85.075-1.069-.39a.711.711 0 01.465-1.01c.45-.16 1.497-.123 1.556-.91.059-.785-.727-.999-1.513-.972-1.657.059-3.663 1.01-5.48.903-2.23-.128-3.198-3.133-.861-4.737a2.326 2.326 0 010-.465c.09-1.219.77-2.47 1.812-2.85-.593-.818-.128-2.149-.058-2.384.135-.4.213-.818.23-1.24-1.642-.37-2.497 1.411-1.824 2.304 0 0-.743-.369-.395-1.465a2.139 2.139 0 012.138-1.4 1.786 1.786 0 00-.871-1.07c-.61-.3-1.385-.267-2.043.77-.887 1.411-1.063 4.293-2.427 5.544-.961 1-2.652.463-2.86-.909a2.732 2.732 0 01.278-1.256c.08-.166.032-.214-.038-.23-.07-.016-.123.07-.187.214a.823.823 0 01-1.475.224c-.097-.107-.342.006-.535-.17-.192-.177-.128-.188-.192-.241-.321-.273-.16-.375-.418-.636a.257.257 0 01-.08-.284L.796 7.2.41 7.102h.38l-.102-.347.182.353.534.438a.262.262 0 01.31 0c.321.182.38.01.717.262.07.054.133.027.283.134.15.107.187.374.278.476a.32.32 0 00.572-.096c.086-.193.332-.77.866-.728.457.027.77.47.642.91-.091.47-.652 1.357 0 1.801.652.444 1.235-.134 1.604-.829.775-1.46.957-3.678 1.957-5.202 1.23-1.887 4.309-1.224 4.533 1.604.145.06.283.136.412.225 1.032.69 1.759 1.924 1.567 2.994 1.02-.129 1.919.957 2.09 1.138.28.328.606.612.968.845 1.165-1.23.037-2.865-1.07-2.732 0 0 .69-.46 1.466.39.61.728.666 1.772.139 2.561.465.113.956.034 1.363-.219.583-.353.925-1.07.353-2.138-.776-1.476-3.187-3.075-3.588-4.876-.384-1.333.928-2.528 2.219-2.021.38.21.705.51.946.871.102.155.166.134.214.086.048-.048-.005-.14-.096-.268a.823.823 0 01.534-1.39c.145-.027.161-.289.418-.374.256-.086.23-.016.31-.048.395-.15.406.043.759-.048.1-.038.212-.01.283.07l.68-.263zm-10.297 6.26c-.065.53-.348 1.647-.187 2.332.155.871.823.823 1.069.395.163-.332.2-.711.107-1.069a3.106 3.106 0 00-.984-1.636zm.256.872c.17.262.293.551.364.856a1.3 1.3 0 010 .759c-.086.187-.332.187-.423-.23-.04-.462-.02-.928.06-1.385zm1.727 2.661c-.517.012-.67.472-.47.82.207.31.521.534.882.63a3.106 3.106 0 001.908-.037c-.422-.32-1.25-1.123-1.903-1.342a1.255 1.255 0 00-.417-.07zm.088.401a.807.807 0 01.201.04c.429.197.83.45 1.192.753a2.82 2.82 0 01-.962-.107 1.3 1.3 0 01-.642-.396c-.095-.134-.036-.3.21-.29zm-2.285.183a1.54 1.54 0 00-.984.45 3.106 3.106 0 00-.936 1.673c.535-.203 1.604-.519 2.139-.973.663-.588.251-1.166-.22-1.15zm-.025.341c.188.008.276.217-.04.488a5.39 5.39 0 01-1.234.631c.134-.277.315-.528.534-.743a1.3 1.3 0 01.7-.374.284.284 0 01.04-.002z" />
              </svg>
            </div>
            <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
              <svg
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Acer icon</title>
                <path d="M23.943 9.364c-.085-.113-.17-.198-.595-.226-.113 0-.453-.029-1.048-.029-1.56 0-2.636.482-3.175 1.417.142-.935-.765-1.417-2.749-1.417-2.324 0-3.798.935-4.393 2.834-.226.709-.226 1.276-.056 1.73h-.567c-.425.027-.992.056-1.36.056-.85 0-1.39-.142-1.588-.425-.17-.255-.17-.737.057-1.446.368-1.162 1.247-1.672 2.664-1.672.737 0 1.445.085 1.445.085.085 0 .142-.113.142-.198l-.028-.085-.057-.397c-.028-.255-.227-.397-.567-.453-.311-.029-.567-.029-.907-.029h-.028c-1.842 0-3.146.624-3.854 1.814.255-1.219-.596-1.814-2.551-1.814-1.105 0-1.9.029-2.353.085-.368.057-.595.199-.68.454l-.17.51c-.028.085.029.142.142.142.085 0 .425-.057.992-.086a24.816 24.816 0 0 1 1.672-.085c1.077 0 1.559.284 1.389.822-.029.114-.114.199-.255.227-1.02.17-1.842.284-2.438.369-1.7.226-2.692.736-2.947 1.587-.369 1.162.538 1.728 2.72 1.728 1.078 0 2.013-.056 2.75-.198.425-.085.652-.17.737-.453l.396-1.304c-.028 1.304.85 1.955 2.721 1.955.794 0 1.559-.028 1.927-.085.369-.056.567-.141.652-.425l.085-.396c.397.623 1.276.935 2.608.935 1.417 0 2.239-.029 2.465-.114a.523.523 0 0 0 .369-.311l.028-.085.17-.539c.029-.085-.028-.142-.142-.142l-.906.057c-.596.029-1.077.057-1.418.057-.651 0-1.076-.057-1.332-.142-.368-.142-.538-.397-.51-.822l2.863-.368c1.275-.17 2.154-.567 2.579-1.19l-.992 3.315c-.028.057 0 .114.028.142.029.028.085.057.199.057h1.19c.198 0 .283-.114.312-.199l1.048-3.656c.142-.481.567-.708 1.36-.708.71 0 1.22 0 1.56.028h.028c.057 0 .17-.028.255-.17l.17-.51c0-.085 0-.17-.057-.227zM4.841 13.73c-.368.057-.907.085-1.587.085-1.219 0-1.729-.255-1.587-.737.113-.34.425-.567.935-.624l2.75-.368zm12.669-2.95c-.114.369-.652.624-1.616.766l-2.295.311.056-.198c.199-.624.454-1.02.794-1.247.34-.227.907-.34 1.7-.34 1.05.028 1.503.255 1.36.708z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative overflow-hidden max-w-[1240px] mx-auto mt-14">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  O QUE VOCÊ ESTÁ BUSCANDO?
                </h1>
                <p className="mt-4 text-xl text-secondary">
                  Encontre aqui tudo o que precisa para levar a sua experiência
                  tecnológica ao próximo nível.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="./womenSearch.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./mobileSearch.png"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./airpodsSearch.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./desktopSearch.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./airpodSearch.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./gamesSearch.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="./manSearch.png"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-dark px-8 py-3 text-center font-medium text-primary hover:scale-105 transition ease-in-out duration-300"
                  >
                    Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
          <div className="z-30 relative lg:w-1/2">
            <div className="hidden bg-secondary-light w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
              <div className="w-full lg:w-auto lg:-mr-32">
                <img
                  src="./loja.jpg"
                  alt="image with decent chairs"
                  className="w-full relative z-30 lg:pl-20 px-6 py-14"
                />
              </div>
            </div>
            <div className="absolute top-0 bg-secondary-light md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full lg:hidden">
              <img
                src="./loja.jpg"
                alt="image with decent chairs"
                className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14"
              />
            </div>
          </div>
          <div className="bg-secondary-light lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
              <h1 className="md:w-8/12 lg:w-[90%] xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold uppercase">
                Nossas lojas
              </h1>
              <p className="md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-dark mt-5">
                Compre no site e retire na loja se preferir. Encontre a Hunter
                mais próxima de você.
              </p>
              <button className="uppercase  sm:w-auto w-full mt-8 text-base justify-between font-medium leading-none text-white py-4 px-8 bg-black flex items-center hover:scale-105 transition ease-in-out duration-300">
                Conheça nossas lojas
                <div className="ml-2 mt-0.5">
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 8H12.6666"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.6667L12.6667 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 5.33301L12.6667 7.99967"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold sm:text-4xl">
              Assine a nossa newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-secondary md:mb-12 sm:text-xl">
              Mantenha-se atualizado com o progresso do roteiro, anúncios e
              descontos exclusivos sinta-se à vontade para se inscrever com seu
              e-mail.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium"
                  >
                    Endereço de email
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm rounded-lg sm:rounded-none sm:rounded-l-lg border outline-none focus:border-dark focus:border-1 "
                    placeholder="Digite seu e-mail"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div className="w-1/4">
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-primary rounded-lg border cursor-pointer bg-dark sm:rounded-none sm:rounded-r-lg -ml-1"
                  >
                    Se inscrever
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm newsletter-form-footer text-center">
                Preocupamos-nos com a proteção dos seus dados.{" "}
                <a
                  href="#"
                  className="font-bold text-primary-600 hover:underline"
                >
                  Leia nossa política de privacidade.
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CompFooter />
    </div>
  );
}
