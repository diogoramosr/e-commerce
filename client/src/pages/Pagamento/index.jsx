import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { CartContext } from "../../contexts/cartContext";
import { AuthContext } from "../../contexts/authContext";

import CompLoader from "../../components/Loader";

export default function PagePagemento() {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [road, setRoad] = useState("");
  const [cep, setCep] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let totalPrice = 0;
    let quantidadeTotal = 0;

    Object.values(cart).forEach((item) => {
      totalPrice += item.produto.price * item.quantidade;
      quantidadeTotal += item.quantidade;
    });

    setTotalPrice(totalPrice);
    setTotalQuantity(quantidadeTotal);
  }, [cart]);
  const envio = totalQuantity * 1.5;

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "/order";
    }, 5000);
    localStorage.removeItem("cart");
  };

  return (
    <div className="pt-2 pb-2">
      <Helmet>
        <title>Hunter Store - Pagamento</title>
        <meta
          name="description"
          content="Realize o pagamento na Hunter Store de forma segura e rápida. Aceitamos diferentes formas de pagamento."
        />
        <meta
          name="keywords"
          content="pagamento, Hunter Store, forma de pagamento"
        />
      </Helmet>
      {loading && <CompLoader />}
      <div className="bg-white">
        <div class="flex flex-col items-center border-b py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="/">
            <img
              className="w-auto lg:block h-full"
              src="/logo.png"
              alt="Logo Hunter"
            />
          </a>
          <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div class="relative">
              <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li class="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span class="font-semibold text-gray-900">Shop</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li class="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span class="font-semibold text-gray-900">Envio</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li class="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                    href="#"
                  >
                    3
                  </a>
                  <span class="font-semibold text-gray-900">Pagamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <d class="px-4 pt-8">
            <p class="text-xl font-medium">Resumo do pedido</p>
            <p class="text-gray-400">
              Verifique seus itens. E selecione um método de envio adequado.{" "}
            </p>

            {Object.keys(cart).length > 0 ? (
              Object.keys(cart).map((key) => {
                const { produto, quantidade } = cart[key];
                return (
                  <div
                    key={key}
                    class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
                  >
                    <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                      <img
                        class="m-2 h-36 w-36 rounded-md border object-center"
                        src={produto.thumbnail_urls[1]}
                        alt=""
                      />
                      <div class="flex w-full flex-col px-4 py-4 space-y-4">
                        <Link
                          to={`/detalhes/${produto.category}/${produto._id}`}
                          class="font-semibold hover:underline"
                        >
                          {produto.title}
                        </Link>
                        <span class="float-right text-gray-400">
                          Quantidade: {quantidade}
                        </span>
                        <p class="text-lg font-bold">
                          R$ {produto.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-4 mt-10 rounded-lg border bg-white px-2">
                <p class="text-lg font-medium">Seu carrinho está vazio</p>
              </div>
            )}

            <p class="mt-8 text-lg font-medium">Métodos de Envio</p>
            <form class="mt-5 grid gap-6">
              <div class="relative">
                <input
                  class="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_1"
                >
                  <img
                    class="w-14 object-contain"
                    src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Fedex Delivery</span>
                    <p class="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Dias
                    </p>
                  </div>
                </label>
              </div>
              <div class="relative">
                <input
                  class="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  for="radio_2"
                >
                  <img
                    class="w-14 object-contain"
                    src="https://componentland.com/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div class="ml-5">
                    <span class="mt-2 font-semibold">Fedex Delivery</span>
                    <p class="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Dias
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </d>
          <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 flex flex-col items-center justify-around">
            <p class="text-xl font-medium">Detalhes do pagamento</p>
            <p class="text-gray-400">
              Conclua seu pedido fornecendo seus detalhes de pagamento.{" "}
            </p>
            <div class="">
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">
                Email
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Endereço de email"
                  value={user.email}
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                for="card-holder"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Titular do cartão{" "}
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="SEU NOME COMPLETO AQUI"
                  value={holder}
                  onChange={(e) => setHolder(e.target.value)}
                />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">
                Detalhes do cartão
              </label>
              <div class="flex gap-x-1">
                <div class="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      class="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="credit-expiry"
                  class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                />
                <input
                  type="text"
                  name="credit-cvc"
                  class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
              <label
                for="billing-address"
                class="mt-4 mb-2 block text-sm font-medium"
              >
                Endereço de Cobrança{" "}
              </label>
              <div class="flex flex-col sm:flex-row gap-x-1">
                <div class="relative flex-shrink-0 sm:w-7/12 ">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Endereço da Rua"
                    value={road}
                    onChange={(e) => setRoad(e.target.value)}
                  />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--twemoji"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        fill="#009B3A"
                        d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"
                      ></path>
                      <path
                        fill="#FEDF01"
                        d="M32.728 18L18 29.124L3.272 18L18 6.875z"
                      ></path>
                      <circle
                        fill="#002776"
                        cx="17.976"
                        cy="17.924"
                        r="6.458"
                      ></circle>
                      <path
                        fill="#CBE9D4"
                        d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"
                      ></path>
                      <path
                        fill="#88C9F9"
                        d="M12 18.233h1v1h-1zm1 2h1v1h-1z"
                      ></path>
                      <path
                        fill="#55ACEE"
                        d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"
                      ></path>
                      <path fill="#3B88C3" d="M19 20.233h1v1h-1z"></path>
                    </svg>
                  </div>
                </div>
                <select
                  type="text"
                  name="billing-state"
                  class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                  <option value="EX">Estrangeiro</option>
                </select>
                <input
                  type="text"
                  name="billing-zip"
                  class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </div>

              <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Subtotal</p>
                  <p class="font-semibold text-gray-900">
                    {totalPrice.toFixed(2)}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Envio</p>
                  <p class="font-semibold text-gray-900">{envio.toFixed(2)}</p>
                </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">
                  R$ {(totalPrice + envio).toFixed(2)}
                </p>
              </div>
            </div>
            <Link
              onClick={handleRedirect}
              class="w-full p-2 text-primary rounded-md text-center font-bold text-lg bg-red mt-3"
            >
              Faça a encomenda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
