import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import api from "../../../services/api";

import CompHeader from "../../../components/Header";
import CompFilter from "../../../components/Filters";
import CompPagination from "../../../components/Pagination";
import CompFooter from "../../../components/Footer";

export default function PageSmartphone() {
  const [smartphone, setSmartphone] = useState([]);
  const rotas = "smartphone";

  useEffect(() => {
    async function loadSmartphone() {
      const response = await api.get("  ");
      setSmartphone(response.data);
    }
    loadSmartphone();
  }, []);

  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>Hunter Store - Celulares e Smartphones</title>
        <meta
          name="description"
          content="Encontre os melhores celulares e smartphones na Hunter Store. Diversas marcas e modelos com preços incríveis!"
        />
        <meta
          name="keywords"
          content="celulares, smartphones, telefones, apple, samsung, motorola, xiaomi, huawei"
        />
      </Helmet>

      <CompHeader />

      <section className="max-w-[1200px] h-[20rem] mx-auto mt-[8rem] rounded-md relative bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/05e13587504223.5db9ffd319f54.png)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-l bg-primary/10"></div>
      </section>

      <section>
        <CompFilter
          title="Celulares e Smartphones"
          products={smartphone}
          rota={rotas}
        />
      </section>

      <CompPagination total={smartphone.length} />
      <CompFooter />
    </div>
  );
}
