import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import CompHeader from "../../components/Header";
import CompFilter from "../../components/Filters";

import api from "../../services/api";

export default function CompSearch() {
  const [searchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [rota, setRota] = useState([]);

  const query = searchParams.get("q");

  const getSearchItems = async (url) => {
    try {
      const response = await api.get(url);
      const itemsArray = Array.isArray(response.data) ? response.data : [];

      const rotaObj = {};
      itemsArray.forEach((item) => {
        if (!rotaObj[item.category]) {
          rotaObj[item.category] = [];
        }
        rotaObj[item.category].push({ ...item, categoria: item.category });
      });

      const rotaItem = [...new Set(itemsArray.map((item) => item.category))];

      setItems(itemsArray);
      setRota(rotaItem);
      console.log(rotaItem);
    } catch (err) {
      console.log(err);
      setItems([]);
    }
  };

  useEffect(() => {
    const searchWithQueryURL = `/search?q=${query.toString()}`;
    getSearchItems(searchWithQueryURL);
  }, [query]);

  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>{query} - Comprar mais barato é na Hunter</title>
        <meta
          name="description"
          content="Encontre os melhores produtos eletrônicos na Hunter Store. Busque por marcas como Apple, Samsung, LG e mais."
        />
        <meta
          name="keywords"
          content="produtos eletrônicos, celular, smartphone, TV, notebook, Apple, Samsung, LG"
        />
      </Helmet>
      <CompHeader />
      <section className="mt-5">
        <CompFilter
          title={`Busca: ${query.toLowerCase()}`}
          products={items}
          rota={rota}
        />
      </section>
    </div>
  );
}
