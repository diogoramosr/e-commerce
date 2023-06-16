import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import api from "../../../services/api";

import CompHeader from "../../../components/Header";
import CompFilter from "../../../components/Filters";
import CompPagination from "../../../components/Pagination";
import CompFooter from "../../../components/Footer";

export default function PageNotebook() {
  const [laptop, setLaptop] = useState([]);
  const rotas = "computers";

  useEffect(() => {
    async function loadLaptop() {
      const response = await api.get("/computers");
      setLaptop(response.data.results);
    }
    loadLaptop();
  }, []);

  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>Hunter Store - Notebook e Computadores</title>
        <meta
          name="description"
          content="Encontre as melhores ofertas em notebooks e computadores na Hunter Store. Compre agora e tenha frete grátis!"
        />
        <meta
          name="keywords"
          content="Computadores, Notebooks, Laptops, Gaming, Desempenho, Qualidade"
        />
      </Helmet>
      <CompHeader />

      <section className="max-w-[1200px] h-[20rem] mt-[8rem] mx-auto rounded-md relative bg-[url(https://s.zst.com.br/cms-assets/2020/11/setup-gamer-capatopo.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-l bg-primary/10"></div>
      </section>

      <section>
        <CompFilter
          title="Notebook e Computadores"
          products={laptop}
          rota={rotas}
        />
      </section>

      <CompPagination total={laptop.length} />
      <CompFooter />
    </div>
  );
}
