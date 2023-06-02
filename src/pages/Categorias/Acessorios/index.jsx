import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import api from "../../../services/api";

import CompHeader from "../../../components/Header";
import CompFilter from "../../../components/Filters";
import CompPagination from "../../../components/Pagination";
import CompFooter from "../../../components/Footer";

export default function PageAcessorios() {
  const [acessorios, setAcessorios] = useState([]);
  const rotas = "accessories";

  useEffect(() => {
    async function loadAcessorios() {
      const response = await api.get("/accessories");
      setAcessorios(response.data.results);
    }
    loadAcessorios();
  }, []);

  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>Hunter Store - Acessórios</title>
        <meta
          name="description"
          content="Encontre os melhores acessórios eletrônicos na Hunter Store. Temos uma grande variedade de produtos para você escolher. Confira agora!"
        />
        <meta
          name="keywords"
          content="Acessórios eletrônicos, fones de ouvido, cabos, carregadores, capas, películas"
        />
      </Helmet>

      <CompHeader />

      <section className="max-w-[1200px] h-[20rem] mt-[8rem] mx-auto rounded-md relative bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/58641b112847839.601c2f472aa8f.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-l bg-primary/10"></div>
      </section>

      <section>
        <CompFilter title="Acessórios" products={acessorios} rota={rotas} />
      </section>

      <CompPagination total={acessorios.length} />
      <CompFooter />
    </div>
  );
}
