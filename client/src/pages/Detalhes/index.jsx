import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { HiHeart, HiOutlineHeart } from "react-icons/hi";

import moment from "moment/moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

import api from "../../services/api";

import CompHeader from "../../components/Header";
import CompCarrouselDetails from "../../components/CarrouselDetails";
import CompFooter from "../../components/Footer";

import { CartContext } from "../../contexts/cartContext";

export default function PageDetalhes() {
  const { _id, categoria } = useParams();
  const [products, setProducts] = useState([]);
  const [salvo, setSalvo] = useState(false);
  const [exibirImagemAmpliada, setExibirImagemAmpliada] = useState(true);

  SwiperCore.use([Navigation]);

  const { addItem } = useContext(CartContext);

  const navigation = useNavigate();

  function handleAddCart(item) {
    addItem(item);
    toast.success("Produto adicionado ao carrinho!");
  }

  function salvarItems() {
    const listItems = localStorage.getItem("@hunterstore");
    let itemsSalvos = JSON.parse(listItems, categoria) || [];

    const itemsId = itemsSalvos.some(
      (itemSalvo) => itemSalvo._id === products._id
    );

    const itemTitle = itemsSalvos.some(
      (itemSalvo) => itemSalvo.title === products.title
    );

    if (itemsId || itemTitle) {
      toast.warn("Produto já está nos favoritos!");
      return;
    }

    itemsSalvos.push(products);
    localStorage.setItem("@hunterstore", JSON.stringify(itemsSalvos));
    setSalvo(true);
    alert("Produto adicionado aos favoritos!");
  }

  function removerItems() {
    const listItems = localStorage.getItem("@hunterstore");
    let itemsSalvos = JSON.parse(listItems, categoria) || [];

    const itemsId = itemsSalvos.some(
      (itemSalvo) => itemSalvo._id === products._id
    );

    const itemTitle = itemsSalvos.some(
      (itemSalvo) => itemSalvo.title === products.title
    );

    if (itemsId || itemTitle) {
      itemsSalvos = itemsSalvos.filter((item) => item._id !== products._id);
      localStorage.setItem("@hunterstore", JSON.stringify(itemsSalvos));
      setSalvo(false);
      alert("Produto removido dos favoritos!");
      return;
    }
  }

  useEffect(() => {
    async function loadProducts() {
      await api
        .get(`/${categoria}/${_id}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch(() => {
          navigation("/", { replace: true });
        });
    }
    loadProducts();

    return () => {};
  }, [_id, navigation]);

  return (
    <div className="lg:p-0 p-2 pt-0 pb-0 overflow-hidden">
      <Helmet>
        <title>{products.title}</title>
        <meta
          name="description"
          content="Detalhes do produto disponível na Hunter Store."
        />
        <meta
          name="keywords"
          content="produtos eletrônicos, detalhes, hunter store"
        />
      </Helmet>

      <CompHeader />

      <section>
        <div className="bg-dark mt-[7rem] w-full">
          <div className="text-center p-3">
            <p className="text-primary text-[13px]">
              <svg
                width="20"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-primary inline-block mr-1"
              >
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>
              Apresentando produtos disponíveis para{" "}
              <strong>Campinas - SP</strong>. Preços válidos somente para essa
              Região.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:block md:block hidden max-w-[1240px] mx-auto">
          <div className="grid grid-cols-4 items-center justify-items-center text-[12px] w-full py-3 bg-secondary-light rounded-sm">
            <p className="flex items-center justify-center lg:gap-x-1 flex-wrap uppercase font-bold border-r-[2px] border-secondary w-full p-1">
              <svg
                width="19"
                height="19"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M16.9344 16.4867V3C16.9344 1.89543 16.0389 1 14.9344 1L3.81738 1C2.71281 1 1.81738 1.89543 1.81738 3V15.6298M12.4401 17.3018H5.90305"
                  stroke="black"
                  strokeWidth="2"
                ></path>
                <path
                  d="M16.934 6.43384H17.7385C18.6951 6.43384 19.5178 7.11127 19.7013 8.05012L20.9622 14.5C21.2037 15.7352 20.2579 16.8837 18.9994 16.8837H16.5254"
                  stroke="black"
                  strokeWidth="2"
                ></path>
                <path
                  d="M16.3427 16.884C16.3427 17.9693 15.4886 18.8099 14.4828 18.8099C13.4769 18.8099 12.6228 17.9693 12.6228 16.884C12.6228 15.7987 13.4769 14.958 14.4828 14.958C15.4886 14.958 16.3427 15.7987 16.3427 16.884Z"
                  fill="#222222"
                  stroke="black"
                  strokeWidth="2"
                ></path>
                <path
                  d="M5.71993 16.8837C5.71993 17.969 4.86581 18.8097 3.85997 18.8097C2.85412 18.8097 2 17.969 2 16.8837C2 15.7984 2.85412 14.9578 3.85997 14.9578C4.86581 14.9578 5.71993 15.7984 5.71993 16.8837Z"
                  fill="#222222"
                  stroke="black"
                  strokeWidth="2"
                ></path>
              </svg>
              frete grátis
              <span className="font-normal">confira as regras</span>
            </p>
            <p className="flex items-center justify-center lg:gap-x-1 flex-wrap uppercase font-bold border-r-[2px] border-secondary w-full p-1">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.504.7l2.702 2.81a1.167 1.167 0 010 1.606l-2.71 2.82M7.18 4.318h9.346M4.154 13.736l-2.703-2.811a1.167 1.167 0 010-1.605L4.162 6.5M10.477 10.117H1.131"
                  stroke="#000"
                  strokeWidth="2"
                ></path>
              </svg>
              Até 30 dias{" "}
              <span className="font-normal">Para solicitar sua troca</span>
            </p>
            <p className="flex items-center justify-center gap-x-1 flex-wrap uppercase font-bold border-r-[2px] border-secondary w-full p-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm1.476 12.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z" />
              </svg>
              Nossas lojas
            </p>
            <p className="flex items-center justify-center lg:gap-x-1 flex-wrap uppercase font-bold w-full p-1">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M2 9.453v-9.453h9.352l10.648 10.625-3.794 3.794 1.849 4.733-12.34 4.848-5.715-14.547zm1.761 1.748l4.519 11.503 10.48-4.118-1.326-3.395-4.809 4.809-8.864-8.799zm-.761-10.201v8.036l9.622 9.552 7.963-7.962-9.647-9.626h-7.938zm12.25 8.293c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.803-.682.411-1.118.585-1.456.585-.361 0-1.083-.409-.961-1.219.052-.345.25-.696.572-1.019.652-.652 1.544-.848 2.276-.107l.744-.744c-.476-.475-1.096-.792-1.761-.792-.566 0-1.125.228-1.663.677l-.626-.626-.698.699.653.652c-.569.826-.842 2.021.076 2.937 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589.001 1.18.498 1.078 1.258-.052.386-.26.764-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.25-7.292c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
              </svg>
              Ganhe 5% de desconto <span className="font-normal">no pix</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-8 lg:mt-[4rem] md:mt-[5rem] mt-[8rem] h-full">
          <div className="lg:w-[55%] md:w-[45%] w-full lg:max-h-[40rem]">
            <div className="flex flex-col items-center justify-center w-full h-full py-24 sm:py-8 px-4">
              <div className="lg:w-[40rem] w-full py-2 pr-4 flex items-center lg:justify-between justify-end">
                <p className="uppercase text-[12px] p-1 w-[20rem] underline lg:flex hidden items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="mr-1"
                  >
                    <path d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                  </svg>
                  Clique na imagem para ampliar
                </p>
                <a type="button">
                  {salvo ? (
                    <button onClick={() => removerItems()}>
                      <HiHeart size={20} />
                    </button>
                  ) : (
                    <button onClick={() => salvarItems()}>
                      <HiOutlineHeart size={20} />
                    </button>
                  )}
                </a>
              </div>
              <CarouselProvider
                className="lg:block hidden"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={3}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-dark"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full p-1 max-h-[35rem] mx-auto overflow-x-hidden overflow-y-hidden">
                    <label htmlFor="my-modal-5" className="cursor-pointer">
                      <Slider>
                        <div
                          id="slider"
                          className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                        >
                          {products.thumbnail_urls &&
                            products.thumbnail_urls.map((item, index) => (
                              <Slide index={index}>
                                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                  <img
                                    src={products.thumbnail_urls[index]}
                                    alt={products.title}
                                    className="object-contain object-center w-full "
                                    onClick={() =>
                                      setExibirImagemAmpliada(true)
                                    }
                                  />
                                </div>
                              </Slide>
                            ))}
                        </div>
                      </Slider>
                    </label>
                    <input
                      type="checkbox"
                      id="my-modal-5"
                      className={`${
                        exibirImagemAmpliada ? "modal-toggle" : "modal-action"
                      }`}
                    />
                    <div className="modal">
                      <div
                        className="w-full absolute h-full"
                        onClick={() => setExibirImagemAmpliada(false)}
                      ></div>
                      <div className="modal-box rounded-none w-11/12 max-w-6xl py-2 px-2 overflow-hidden">
                        <ButtonBack
                          role="button"
                          aria-label="slide backward"
                          className="absolute z-30 left-0 top-[50%] ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                          id="prev"
                        >
                          <svg
                            width={8}
                            height={14}
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current text-dark"
                          >
                            <path
                              d="M7 1L1 7L7 13"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </ButtonBack>
                        <Slider>
                          <div
                            id="slider"
                            className="h-full flex items-center justify-around transition ease-out duration-700 w-full"
                          >
                            {products.thumbnail_urls &&
                              products.thumbnail_urls.map((item, index) => (
                                <Slide index={index}>
                                  <div className="flex flex-shrink-0 relative w-full items-center justify-center h-full sm:w-auto">
                                    <img
                                      src={products.thumbnail_urls[index]}
                                      alt={products.title}
                                      className="object-contain object-center max-w-[45rem] px-12"
                                    />
                                  </div>
                                </Slide>
                              ))}
                          </div>
                        </Slider>
                        <ButtonNext
                          role="button"
                          aria-label="slide forward"
                          className="absolute z-50 right-0 top-[50%] mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                          id="next"
                        >
                          <svg
                            width={8}
                            height={14}
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current text-dark"
                          >
                            <path
                              d="M1 1L7 7L1 13"
                              stroke="white"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </ButtonNext>
                      </div>
                    </div>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-dark"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>

              <CarouselProvider
                className="lg:hidden md:block hidden"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={3}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-dark"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                      >
                        {products.thumbnail_urls &&
                          products.thumbnail_urls.map((item, index) => (
                            <Slide index={index}>
                              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img
                                  src={products.thumbnail_urls[index]}
                                  alt={products.title}
                                  className="object-contain object-center w-full"
                                />
                              </div>
                            </Slide>
                          ))}
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>

              <CarouselProvider
                className="block md:hidden"
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={3}
                visibleSlides={1}
                step={1}
                infinite={true}
              >
                <div className="w-full relative flex items-center justify-center">
                  <ButtonBack
                    role="button"
                    aria-label="slide backward"
                    className="absolute z-30 left-0 ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                    id="prev"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-dark"
                    >
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonBack>
                  <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                      <div
                        id="slider"
                        className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                      >
                        {products.thumbnail_urls &&
                          products.thumbnail_urls.map((item, index) => (
                            <Slide index={index}>
                              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                <img
                                  src={products.thumbnail_urls[index]}
                                  alt={products.title}
                                  className="object-contain object-center w-full"
                                />
                              </div>
                            </Slide>
                          ))}
                      </div>
                    </Slider>
                  </div>
                  <ButtonNext
                    role="button"
                    aria-label="slide forward"
                    className="absolute z-30 right-0 mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
                    id="next"
                  >
                    <svg
                      width={8}
                      height={14}
                      viewBox="0 0 8 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-dark"
                    >
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </ButtonNext>
                </div>
              </CarouselProvider>
            </div>
          </div>
          <div className="lg:w-[40%] md:w-[50%] w-full flex flex-col flex-wrap items-center justify-between">
            <div className="w-full flex-col items-center justify-center">
              <p className="font-bold text-md uppercase">{products.brand}</p>
              <h2 className="lg:text-2xl text-2xl">{products.title}</h2>
            </div>
            <div className="w-full grid grid-cols-2 justify-items-center items-center mt-5 mb-6">
              <div className="flex items-center flex-wrap gap-x-2 w-full">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                    fill="#1F2937"
                  />
                </svg>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20ZM9.99976 15.1C10.1601 15.0959 10.3186 15.1338 10.4598 15.21L14.2298 17.21L13.5098 13C13.4818 12.8392 13.4936 12.6741 13.5442 12.5189C13.5947 12.3638 13.6825 12.2234 13.7998 12.11L16.7998 9.17996L12.5998 8.55996C12.4457 8.52895 12.3012 8.46209 12.1778 8.3648C12.0545 8.2675 11.9558 8.14251 11.8898 7.99996L9.99976 4.24996L8.10976 7.99996C8.03741 8.14366 7.93145 8.26779 7.80089 8.3618C7.67032 8.45581 7.51899 8.51692 7.35976 8.53996L3.15976 9.15996L6.15976 12.09C6.27704 12.2034 6.36478 12.3438 6.41533 12.4989C6.46588 12.6541 6.4777 12.8192 6.44976 12.98L5.72976 17.14L9.49976 15.14C9.65951 15.0806 9.83261 15.0667 9.99976 15.1Z"
                    fill="#1F2937"
                  />
                </svg>
                <p className="text-xl font-bold ml-2">
                  {(products.assessment / 1).toFixed(1)}
                </p>
              </div>
              <a href="#" className="hover:underline font-medium ml-24">
                ( Avalie agora! )
              </a>
            </div>
            <div className="w-full mt-10 flex flex-col items-start justify-center">
              <p className="font-medium text-[20px] text-red">
                R$
                {products.price > 0
                  ? `${products.price.toFixed(2)} à vista`
                  : ``}
              </p>
              <p className="font-bold text-[15px] mb-10">
                {products.price >= 1000
                  ? " OU 12x de R$ " + (products.price / 12).toFixed(2)
                  : " OU 10x de R$ " + (products.price / 10).toFixed(2)}
              </p>

              <button
                onClick={() => handleAddCart(products)}
                className="bg-dark text-primary p-4 w-full mx-auto font-semibold"
              >
                COMPRAR
              </button>
            </div>
            <div className="flex items-center justify-around text-[12px] w-full py-3 bg-secondary-light">
              <strong className="flex items-center gap-x-3">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9344 16.4867V3C16.9344 1.89543 16.0389 1 14.9344 1L3.81738 1C2.71281 1 1.81738 1.89543 1.81738 3V15.6298M12.4401 17.3018H5.90305"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M16.934 6.43384H17.7385C18.6951 6.43384 19.5178 7.11127 19.7013 8.05012L20.9622 14.5C21.2037 15.7352 20.2579 16.8837 18.9994 16.8837H16.5254"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M16.3427 16.884C16.3427 17.9693 15.4886 18.8099 14.4828 18.8099C13.4769 18.8099 12.6228 17.9693 12.6228 16.884C12.6228 15.7987 13.4769 14.958 14.4828 14.958C15.4886 14.958 16.3427 15.7987 16.3427 16.884Z"
                    fill="#222222"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M5.71993 16.8837C5.71993 17.969 4.86581 18.8097 3.85997 18.8097C2.85412 18.8097 2 17.969 2 16.8837C2 15.7984 2.85412 14.9578 3.85997 14.9578C4.86581 14.9578 5.71993 15.7984 5.71993 16.8837Z"
                    fill="#222222"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                </svg>
                FRETE GRÁTIS
              </strong>
              <span className="flex items-center gap-x-1.5">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.63632 7.45458V5.64778V3.54545C9.63632 2.13964 8.49668 1 7.09086 1V1C5.68505 1 4.54541 2.13964 4.54541 3.54545V5.64778V7.45458"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M17 8.87735L13.5844 12.2929C13.1939 12.6834 12.5607 12.6834 12.1702 12.2929L11 11.1227"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.51237 14.7172C6.51154 14.7361 6.51245 14.7547 6.51492 14.7727C6.53253 14.9009 6.62961 15 6.74779 15H7.2522C7.37039 15 7.46747 14.9009 7.48507 14.7727C7.48755 14.7547 7.48845 14.7361 7.48762 14.7172L7.42038 13.1801C7.5578 13.1072 7.67832 12.9998 7.77334 12.8675C7.91498 12.6702 8 12.4179 8 12.1428C8 12.1309 7.99984 12.119 7.99952 12.1072C7.98708 11.643 7.73237 11.2484 7.375 11.0831C7.25919 11.0295 7.13261 11 7 11C6.86739 11 6.7408 11.0295 6.625 11.0831C6.26763 11.2484 6.01292 11.643 6.00048 12.1072C6.00016 12.119 6 12.1309 6 12.1428C6 12.4179 6.08502 12.6702 6.22665 12.8674C6.32168 12.9998 6.44219 13.1072 6.57962 13.1801L6.51237 14.7172Z"
                    fill="black"
                  ></path>
                  <path
                    d="M12.1973 10C11.1599 8.2066 9.22085 7 7 7C3.68629 7 1 9.68629 1 13C1 16.3137 3.68629 19 7 19C9.973 19 12.441 16.8377 12.917 14"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                </svg>{" "}
                COMPRA <strong>100% SEGURA</strong>
              </span>
            </div>
            <div className=" w-full mt-5 p-1 flex flex-col items-center justify-center gap-y-3 ">
              <div className="flex w-full items-center justify-center text-[11px]">
                <svg
                  className="mr-4"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.2 11.25H8.8V6.74997H7.2V11.25ZM8 0C3.584 0 0 3.36 0 7.5C0 11.64 3.584 15 8 15C12.416 15 16 11.64 16 7.5C16 3.36 12.416 0 8 0ZM8.00002 13.5C4.47202 13.5 1.60002 10.8075 1.60002 7.49996C1.60002 4.19246 4.47202 1.49996 8.00002 1.49996C11.528 1.49996 14.4 4.19246 14.4 7.49996C14.4 10.8075 11.528 13.5 8.00002 13.5ZM7.2 5.24999H8.8V3.74999H7.2V5.24999Z"
                    fill="#9ca3af"
                  ></path>
                </svg>{" "}
                VENDIDO E ENVIADO POR{" "}
                <strong className="ml-1">HUNTER STORE</strong>
              </div>
            </div>
            <div className="flex flex-col py-2 gap-y-2 mt-10 items-center justify-center w-full">
              <div className="flex gap-x-3">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9344 16.4867V3C16.9344 1.89543 16.0389 1 14.9344 1L3.81738 1C2.71281 1 1.81738 1.89543 1.81738 3V15.6298M12.4401 17.3018H5.90305"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M16.934 6.43384H17.7385C18.6951 6.43384 19.5178 7.11127 19.7013 8.05012L20.9622 14.5C21.2037 15.7352 20.2579 16.8837 18.9994 16.8837H16.5254"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M16.3427 16.884C16.3427 17.9693 15.4886 18.8099 14.4828 18.8099C13.4769 18.8099 12.6228 17.9693 12.6228 16.884C12.6228 15.7987 13.4769 14.958 14.4828 14.958C15.4886 14.958 16.3427 15.7987 16.3427 16.884Z"
                    fill="#222222"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M5.71993 16.8837C5.71993 17.969 4.86581 18.8097 3.85997 18.8097C2.85412 18.8097 2 17.969 2 16.8837C2 15.7984 2.85412 14.9578 3.85997 14.9578C4.86581 14.9578 5.71993 15.7984 5.71993 16.8837Z"
                    fill="#222222"
                    stroke="black"
                    strokeWidth="2"
                  ></path>
                </svg>
                <strong className="text-[15px]">CALCULAR FRETE</strong>
              </div>
              <form className="w-full flex items-center justify-center">
                <div className="relative w-3/5 rounded-md">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-[12.5px] w-full z-20 text-[13px] bg-secondary-light rounded-lg outline-none placeholder:text-black placeholder:font-bold placeholder:text-[11px]"
                    placeholder="DIGITE SEU CEP"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 p-3 text-sm font-medium text-primary bg-dark rounded-r-lg"
                  >
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
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-light max-w-[1532px] mx-auto">
        <div className="max-w-[1200px] mx-auto mt-[2rem] flex-col item-center py-8">
          <div className="mb-10 space-y-4">
            <h3 className="text-2xl">Informações do produto</h3>
            <p className="text-start">
              {products.description ? products.description : "Sem descrição"}
            </p>
          </div>
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl leading-7">Ficha técnica</h3>
            </div>
            <div className="mt-6 border-t border-gray-200">
              <dl className="divide-y divide-gray-200">
                <div className="px-4 py-6 flex items-center justify-between sm:gap-4 sm:px-0">
                  <dt className="text-sm font-semibold leading-6">
                    Fabricante
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-dark sm:col-span-2 sm:mt-0">
                    {products.manufacturer ? products.manufacturer : "N/a"}
                  </dd>
                </div>
                <div className="px-4 py-6 flex items-center justify-between sm:gap-4 sm:px-0">
                  <dt className="text-sm font-semibold leading-6 text-gray-900">
                    Modelo
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-dark sm:col-span-2 sm:mt-0">
                    {products.model ? products.model : "N/a"}
                  </dd>
                </div>
                <div className="px-4 py-6 flex items-center justify-between sm:gap-4 sm:px-0">
                  <dt className="text-sm font-semibold leading-6 text-gray-900">
                    Color
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-dark sm:col-span-2 sm:mt-0">
                    {products.color ? products.color : "N/a"}
                  </dd>
                </div>
                <div className="px-4 py-6 flex items-center justify-between sm:gap-4 sm:px-0">
                  <dt className="text-sm font-semibold leading-6 text-gray-900">
                    Marca
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-dark sm:col-span-2 sm:mt-0">
                    {products.brand ? products.brand : "N/a"}
                  </dd>
                </div>
                <div className="px-4 py-6 flex items-center justify-between sm:gap-4 sm:px-0">
                  <dt className="text-sm font-semibold leading-6 text-gray-900">
                    Linha do Produto
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-dark sm:col-span-2 sm:mt-0">
                    {products.line ? products.line : "N/a"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 px-4 py-9 ">
          <h3 className="text-center lg:mb-20 mb-10 font-semibold lg:text-3xl text-2xl lg:leading-9 leading-7 w-9/12 md:w-full mx-auto">
            Opiniões dos consumidores
          </h3>
          <div className=" relative md:flex justify-center items-center ">
            <div className="md:w-4/12 w-full">
              <div className=" flex space-x-2 md:mt-0 mt-10">
                <svg
                  className="cursor-pointer"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                    fill="#FFE135"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                    fill="#FFE135"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                    fill="#FFE135"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                    fill="#FFE135"
                  />
                </svg>
                <svg
                  className="cursor-pointer"
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z"
                    fill="#FFE135"
                  />
                </svg>
                <p className=" text-gray-600 text-base leading-4 font-normal">
                  {products.assessment}/5
                </p>
              </div>
              <h3 className="my-4 font-semibold lg:text-2xl text-xl lg:leading-6 leading-5">
                Baseado em {products.comments && products.comments.length}{" "}
                {products.comments && products.comments.length > 1
                  ? "Avaliações"
                  : "Avaliação"}
              </h3>
              <a
                href="#"
                className="hover:text-dark focus:outline-none focus:text-dark hover:underline text-sm leading-3 text-secondary cursor-pointer "
              >
                Ver todos os comentários
              </a>
            </div>
            <div className="hidden md:block relative md:w-8/12 w-full overflow-x-hidden md:mt-0 mt-10">
              <div
                id="slider"
                className="flex justify-start items-start transition ease-out duration-700 gap-4"
              >
                <Swiper
                  slidesPerView={3}
                  navigation={
                    (true,
                    {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    })
                  }
                  className="mySwiper"
                  speed={700}
                >
                  {products.comments &&
                    products.comments.map((comment) => (
                      <SwiperSlide style={{ width: "100% !important" }}>
                        <div className="w-72 flex-none">
                          <div className="w-full">
                            <div className="mb-6 capitalize">
                              {comment.username}
                            </div>
                            <div className="md:w-full h-full relative">
                              <p className=" text-secondary font-normal text-base leading-7">
                                "{comment.comment}"
                              </p>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm">
                                Enviado em:{" "}
                                {moment(comment.createdAt).format("DD/MM/YYYY")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="flex justify-end items-end mt-10 pr-2 pb-1">
                <div className="flex items-center space-x-3">
                  <button
                    id="prev"
                    aria-label="slide backward"
                    className="swiper-button-prev focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.666 20H8.33268"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 26.6667L8.33333 20"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 13.3335L8.33333 20.0002"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    id="next"
                    aria-label="slide forward"
                    className="swiper-button-next focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33398 20H31.6673"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 26.6667L31.6667 20"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 13.3335L31.6667 20.0002"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="block md:hidden relative md:w-8/12 w-full overflow-x-hidden md:mt-0 mt-10 ">
              <div
                id="slider2"
                className="flex justify-start items-start transition ease-out duration-700 gap-0 space-x-2"
              >
                <Swiper
                  slidesPerView={1}
                  navigation={
                    (true,
                    {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    })
                  }
                  className="mySwiper"
                  speed={700}
                >
                  {products.comments &&
                    products.comments.map((comment) => (
                      <SwiperSlide style={{ width: "100%" }}>
                        <div
                          id="sizeDiv"
                          className="w-full sm:w-6/12 flex-none  "
                        >
                          <div className=" w-full">
                            <div className="mb-6 capitalize">
                              {comment.username}
                            </div>
                            <div className="md:w-full h-full relative">
                              <p className=" text-secondary font-normal text-base leading-7">
                                "{comment.comment}"
                              </p>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm">
                                Enviado em:{" "}
                                {moment(comment.createdAt).format("DD/MM/YYYY")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className=" flex justify-end items-end mt-10 pr-2 pb-1">
                <div className="flex items-center space-x-3">
                  <button
                    id="prev2"
                    aria-label="slide backward"
                    className="swiper-button-prev focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.666 20H8.33268"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 26.6667L8.33333 20"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 13.3335L8.33333 20.0002"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    id="next2"
                    aria-label="slide forward"
                    className="swiper-button-next focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33398 20H31.6673"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 26.6667L31.6667 20"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 13.3335L31.6667 20.0002"
                        stroke="#2C3E50"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompCarrouselDetails />

      <section>
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <div className="flex flex-col md:flex-row items-strech justify-between bg-primary-light rounded-xl py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
              <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Melhor negócio
                </h1>
                <p className="text-base lg:text-xl text-red mt-2">
                  Economize até <span className="font-bold">50%</span>
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
              </div>
            </div>
            <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-primary-light rounded-xl py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl lg:text-4xl font-semibold">
                  Game Console
                </h1>
                <p className="text-base lg:text-xl text-red">
                  Economize até <span className="font-bold">30%</span>
                </p>
              </div>
              <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                <img
                  src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
                  alt=""
                  className="md:w-20 md:h-20 lg:w-full lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-xl p-10 sm:text-center rounded-2xl bg-primary-light">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">
              Assine a nossa newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-secondary md:mb-12 sm:text-xl">
              Mantenha-se atualizado com as últimas notícias e ofertas da nossa
              loja.
              <br />
              Não se preocupe, não vamos encher seu e-mail de spam.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium"
                  >
                    Email
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
                    className="block p-3 pl-10 w-full text-sm rounded-lg border-dark focus:border-[1px] outline-none sm:rounded-none sm:rounded-l-lg"
                    placeholder="E-mail"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-700 border-[#1D4ED8] sm:rounded-none sm:rounded-r-lg"
                  >
                    Assinar
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-center newsletter-form-footer">
                Ao assinar, você concorda com nossos
                <a href="#" className="font-medium ml-1 underline">
                  Termos de Serviço
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </section>

      <CompFooter />
    </div>
  );
}
