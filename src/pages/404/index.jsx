import React from "react";
import { Helmet } from "react-helmet";

export default function Page404() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Hunter Store - Página não encontrada</title>
        <meta
          name="description"
          content="Desculpe, a página que você está procurando não existe."
        />
        <meta
          name="keywords"
          content="Hunter Store, e-commerce, página não encontrada"
        />
      </Helmet>

      <section className="flex items-center h-full p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Desculpe, não foi possível encontrar esta página.
            </p>
            <p className="mt-4 mb-8">
              Mas não se preocupe, você pode encontrar muitas outras coisas em
              nossa página inicial.
            </p>
            <a
              rel="noopener noreferrer"
              href="/"
              className="px-8 py-3 font-semibold rounded hover:underline"
            >
              Voltar à página inicial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
