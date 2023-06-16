import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cartContext";

export default function PageCart() {
  const { cart, addItem, removeItem, getCartInfo } = useContext(CartContext);

  const cartInfo = getCartInfo();
  const totalValue = cartInfo.totalValue;

  function handleRemove(item) {
    removeItem(item);
  }

  function handleAdd(item) {
    addItem(item);
  }

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Finalizar compra</title>
        <meta
          name="description"
          content="Veja os itens no seu carrinho de compras na Hunter Store"
        />
        <meta
          name="keywords"
          content="carrinho, compras, ecommerce, Hunter Store"
        />
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
        <div className="flex flex-col w-full p-6 space-y-4 sm:p-10 text-black">
          <h2 className="text-xl font-semibold">Meu Carrinho</h2>
          <div className="flex-col items-center justify-between">
            <div>
              <ul className="flex flex-col items-center divide-y mb-5 divide-gray-700">
                {Object.keys(cart).map((key) => {
                  const { produto, quantidade } = cart[key];
                  return (
                    <li
                      key={key}
                      className="flex w-full justify-between items-center py-6 px-3"
                    >
                      <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap items-center lg:justify-between justify-center w-full h-full space-x-2">
                        <img
                          src={produto.thumbnail_urls[1]}
                          className="flex-shrink-0 lg:w-[10rem] lg:h-[10rem] md:w-[15rem] md:h-[15rem] w-[10rem] h-[10rem] border-transparent rounded outline-none object-contain bg-primary-light p-2"
                        />

                        <div className="flex flex-wrap items-center w-full h-full mt-2">
                          <div className="space-y-3 flex flex-col items-start w-full py-2">
                            <Link
                              className="text-lg font-semibold leading-snug sm:pr-8 hover:underline"
                              to={`/detalhes/${produto.category}/${produto._id}`}
                            >
                              {produto.title}
                            </Link>
                            <p className="text-[11px]">
                              Produto fornecido e entregue por Hunter Store
                            </p>
                            <span className="p-1 bg-red rounded-md text-[12px] font-bold text-primary">
                              Informe seu CEP abaixo
                            </span>
                          </div>

                          <div className="w-full gap-x-2 flex items-center justify-between mt-3">
                            <div className="flex flex-col items-center justify-center w-full">
                              <p className="text-[14px] line-through">
                                De {(produto.price * 1.2).toFixed(2)}
                              </p>
                              <p className="text-[14px]">
                                Por:{" "}
                                <span className="font-bold text-[15px]">
                                  R$ {produto.price.toFixed(2)}
                                </span>
                              </p>
                            </div>

                            <div className="flex items-center justify-center gap-x-4 w-full">
                              <button
                                type="submit"
                                onClick={() => handleRemove(key)}
                              >
                                <svg
                                  clipRule="evenodd"
                                  fillRule="evenodd"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="2"
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm4.253 7.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </button>
                              {quantidade}
                              <button
                                type="submit"
                                onClick={() => handleAdd(produto)}
                              >
                                <svg
                                  clipRule="evenodd"
                                  fillRule="evenodd"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="2"
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </button>
                            </div>

                            <div className="w-full flex justify-center items-center">
                              <p className="lg:text-lg text-md font-bold">
                                R$ {(produto.price * quantidade).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {totalValue > 0 ? (
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-col p-2 lg:w-[30%] md:w-[35%] w-[50%]">
                <p className="text-lg mb-2 font-semibold">Entrega</p>
                <div className="relative w-full rounded-md">
                  <input
                    type="text"
                    className="block p-[12.5px] w-full z-20 text-[13px] bg-primary-light rounded-lg outline-none placeholder:text-black placeholder:font-bold placeholder:text-[11px]"
                    placeholder="DIGITE SEU CEP"
                    required
                  />
                  <button className="absolute top-0 right-0 p-3 text-sm font-medium text-white bg-dark rounded-r-lg">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-right">
                <p className="text-[14px]">
                  Subtotal: R$ {totalValue.toFixed(2)}
                </p>
                <p className="text-[20px]">Total: R$ {totalValue.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full p-5">
              <p className="font-bold text-xl text-center">
                Seu carrinho está vazio...
              </p>
            </div>
          )}
          <div className="flex justify-end items-center flex-wrap gap-3">
            <a
              href="/"
              className="px-6 py-2 border rounded-md border-dark lg:w-[14rem] font-semibold md:w-[13rem] text-center w-full"
            >
              Continuar comprando
            </a>
            <a
              href="/pagamentos"
              className="px-6 py-2 border rounded-md border-black bg-black text-white font-semibold lg:w-[13rem] md:w-[13rem] text-center w-full"
            >
              Finalizar compra
            </a>
          </div>
        </div>
      </section>

      <footer>
        <section className="font-dark mb-5 p-5 border-t border-dark">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-center text-sm mb-6">
              Aqui na <b className="font-bold">Hunter Store</b>, você além de
              ter lançamentos exclusivos e produtos originais também tem:
            </p>
            <ul className="flex justify-center flex-wrap items-center gap-10">
              <li className="flex items-center gap-x-2">
                <img
                  src="https://authenticfeet.vteximg.com.br/arquivos/lojatesteicon.png"
                  className="f-img-bene w-10 h-10 object-contain"
                  alt="Ícone de retirada na loja"
                />
                <span className="text-sm">Retire na loja</span>
              </li>
              <li className="flex items-center gap-x-2">
                <img
                  src="https://authenticfeet.vteximg.com.br/arquivos/f-c-lojas.png"
                  className="f-img-bene w-10 h-10 object-contain"
                  alt="Ícone de mais de 105 lojas"
                />
                <span className="text-sm">+ DE 1 LOJAS</span>
              </li>
              <li className="flex items-center gap-x-2">
                <img
                  src="https://authenticfeet.vteximg.com.br/arquivos/f-c-troca.png"
                  className="f-img-bene w-10 h-10 object-contain"
                  alt="Ícone de 1ª troca grátis"
                />
                <span className="text-sm">1ª TROCA GRÁTIS</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-dark text-primary pt-16">
          <div className="container grid lg:grid-cols-2 grid-cols-1 gap-y-8 items-center mx-auto">
            <div className="flex space-x-5  items-center justify-center">
              <p className="lg:text-lg text-[12px] font-bold">
                Formas de pagamento
              </p>
              <span>|</span>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <img
                  className="w-8"
                  src="https://authenticfeet.vteximg.com.br/arquivos/f-visa.png"
                  alt="Visa"
                />
                <img
                  className="w-8"
                  src="https://authenticfeet.vteximg.com.br/arquivos/mastercard-seeklogo.png"
                  alt="Mastercard"
                />
                <img
                  className="w-8"
                  src="https://authenticfeet.vteximg.com.br/arquivos/f-american-express.png"
                  alt="American Express"
                />
                <img
                  className="w-8"
                  src="https://authenticfeet.vteximg.com.br/arquivos/f-elo-seeklogo.png"
                  alt="Elo"
                />
                <img
                  className="w-10"
                  src="https://authenticfeet.vteximg.com.br/arquivos/f-hipercard.png"
                  alt="Hipercard"
                />
                <img
                  className="w-14"
                  src="https://authenticfeet.vteximg.com.br/arquivos/pix-white-logo-.png"
                  alt="PIX"
                />
              </div>
            </div>
            <div className="flex space-x-5 items-center justify-center">
              <p className="lg:text-lg text-[12px] font-bold">
                Segurança e Qualidade
              </p>
              <span>|</span>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a href="#" target="_blank">
                  <img
                    src="//service.yourviews.com.br/Image/9d947f0e-c9a6-4eb9-ad6f-580b845d3074/Footer.jpg"
                    title="Loja Confiável"
                    alt="Loja Confiável"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    className="w-16 h-16"
                    src="https://authenticfeet.vteximg.com.br/arquivos/selo_pci-menor.png"
                    alt="PCI"
                  />
                </a>
                <div id="armored_website" className="w-16 h-16">
                  <param id="aw_preload" value="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark text-primary text-[10px] p-10">
          <div className="container leading-5">
            <p className="text-center w-85">
              www.hunterstore.com.br | relacionamento@hunterstore.com.br | ©
              2023 Hunter Store. TODOS OS DIREITOS RESERVADOS.
              <br />
              Hunter Store E-commerce Ltda. | CNPJ: 15.123.1234/13313-10 - Av.
              John Boyd Dunlop , 3900 – 10º andar – Campinas – SP – CEP:
              10052-999.
            </p>
            <p className="text-center">
              Preços e condições de pagamento exclusivos para compras realizadas
              através do site e televendas. Os estoques são limitados e os
              valores não se aplicam à nossa rede de lojas físicas podendo
              sofrer alterações sem aviso prévio. Em caso de divergência, o
              preço válido é o do carrinho.
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
