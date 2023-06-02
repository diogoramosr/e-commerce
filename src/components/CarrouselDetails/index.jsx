import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import api from "../../services/api";

export default function CompCarrousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await api.get("/carrouselCart");
      setItems(response.data);
    }
    getItems();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={5}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-[9rem] top-[12rem] ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
              id="prev"
            >
              <svg
                width={14}
                height={21}
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
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 px-10 items-start justify-center transition ease-out duration-700"
                >
                  {items.map((item, index) => (
                    <Slide index={index}>
                      <div class="flex flex-col items-center justify-between py-4 w-full h-[35rem] bg-gradient-to-b from-primary from-65% via-secondary via-100% to-dark rounded-lg">
                        <img
                          src={item.thumbnail_urls[1]}
                          alt={item.title}
                          className="object-cover object-center w-full p-2"
                        />
                        <div className="w-full">
                          <h3 className="text-xl w-full lg:text-sm font-semibold leading-5 lg:leading-6 max-w-[17rem] truncate uppercase px-2">
                            {item.title}
                          </h3>
                          <p className="font-bold mt-4 px-2">
                            R$ {item.price.toFixed(2)}
                          </p>{" "}
                          <p className="font-semibold text-[13.5px] px-2">
                            {item.price >= 1000
                              ? "12x de R$ " + (item.price / 12).toFixed(2)
                              : "10x de R$ " + (item.price / 10).toFixed(2)}
                          </p>
                        </div>
                        <div className="flex justify-center w-full">
                          <a href={`/detalhes/${item.category}/${item._id}`}>
                            <button className="p-2 w-[10rem] uppercase font-bold text-primary bg-dark text-sm">
                              Quero!
                            </button>
                          </a>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-[9rem] top-[12rem] mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
              id="next"
            >
              <svg
                width={14}
                height={21}
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
          totalSlides={items.length}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-[25rem] top-[13rem] ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
              id="prev"
            >
              <svg
                width={14}
                height={21}
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
                  {items.map((item, index) => (
                    <Slide index={index}>
                      <div className="flex flex-col items-center justify-between py-4 w-full h-[43rem] sm:w-auto bg-gradient-to-b from-primary from-65% via-secondary via-100% to-dark rounded-lg">
                        <img
                          src={item.thumbnail_urls[1]}
                          alt={item.title}
                          className="object-cover object-center w-full p-2"
                        />
                        <div className="w-full mt-4 ">
                          <h3 className="text-xl w-full px-2 lg:text-sm font-semibold leading-5 lg:leading-6 max-w-[17rem] truncate uppercase">
                            {item.title}
                          </h3>
                          <p className="font-bold mt-4 px-2">
                            R$ {item.price.toFixed(2)}
                          </p>{" "}
                          <p className="font-semibold text-[13.5px] px-2">
                            {item.price >= 1000
                              ? `12x de R$ ${(item.price / 12).toFixed(2)}`
                              : `10x de R$ ${(item.price / 10).toFixed(2)}`}
                          </p>
                        </div>

                        <div className="flex h-full items-end pb-6 mt-4">
                          <a href={`/detalhes/${item.category}/${item._id}`}>
                            <button className="p-2 w-[10rem] uppercase font-bold text-primary bg-dark text-sm">
                              Quero!
                            </button>
                          </a>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-[25rem] top-[13rem] mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
              id="next"
            >
              <svg
                width={14}
                height={21}
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
          className="block md:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={items.length}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 -left-6 ml-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
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
                  className="h-full w-full py-10 flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
                >
                  {items.map((item, index) => (
                    <Slide index={index}>
                      <div className="flex items-center justify-center flex-shrink-0 relative w-full sm:w-auto p-10">
                        <img
                          src={item.thumbnail_urls[1]}
                          alt={item.title}
                          className="object-cover object-center w-full"
                        />
                        <div className="absolute w-full h-full p-6">
                          <div className="flex flex-col h-full items-end justify-end mt-16">
                            <h2 className="text-lg truncate w-full font-bold uppercase">
                              {item.title}
                            </h2>
                            <p className="font-bold text-md w-full">
                              R$ {item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 -right-6 mr-8 bg-dark p-1 focus:outline-none focus:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-[#121212] cursor-pointer"
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
  );
}
