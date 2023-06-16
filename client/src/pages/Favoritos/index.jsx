import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { HiTrash } from "react-icons/hi";

import CompHeader from "../../components/Header";
import CompProductCard from "../../components/ProductCard";

export default function PageFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const listFavoritos = localStorage.getItem("@hunterstore");
    setFavoritos(JSON.parse(listFavoritos) || []);
  }, []);

  function excluirFavoritos(id) {
    let filtroFavoritos = favoritos.filter((item) => {
      return item._id !== id;
    });

    setFavoritos(filtroFavoritos);
    localStorage.setItem("@hunterstore", JSON.stringify(filtroFavoritos));
    alert("Removido com sucesso");
  }

  return (
    <div>
      <Helmet>
        <title>Hunter Store - Favoritos</title>
        <meta
          name="description"
          content="Veja aqui os seus produtos favoritos na Hunter Store."
        />
        <meta
          name="keywords"
          content="Hunter Store, favoritos, produtos, compras"
        />
      </Helmet>
      <div className="lg:p-0 p-2 pt-0 pb-0 mb-10">
        <CompHeader />
        <section className="max-w-[1240px] mx-auto lg:p-0 p-5">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Favoritos
            </h1>
          </div>
        </section>
        <section className="max-w-[1240px] mx-auto lg:p-0 p-5 mt-10">
          <div className="flex lg:col-span-4 flex-wrap items-center lg:justify-between justify-center gap-x-5 gap-y-8">
            {favoritos.length === 0 && (
              <h2 className="w-full text-center text-[1.5rem] font-bold tracking-tight">
                Ops! Parece que você não salvou nenhum item ainda...
              </h2>
            )}
            {favoritos.length > 0 &&
              favoritos.map((item) => (
                <div key={item._id}>
                  <CompProductCard
                    key={item._id}
                    product={item}
                    categoria={item.category}
                  />
                  <button
                    onClick={() => excluirFavoritos(item._id)}
                    className="w-full mt-2 p-1 flex justify-center items-center gap-x-2"
                  >
                    <span className="text-sm font-bold">Remover</span>
                    <HiTrash className="text-right" />
                  </button>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
