import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import api from "../../../services/api";

import CompHeader from "../../../components/Header";
import CompFilter from "../../../components/Filters";
import CompPagination from "../../../components/Pagination";
import CompFooter from "../../../components/Footer";

export default function PageAudio() {
  const [audio, setAudio] = useState([]);
  const rotas = "audio";

  useEffect(() => {
    async function loadAudio() {
      const response = await api.get("  ");
      setNotebook(response.data);
    }
    loadAudio();
  }, []);

  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>Hunter Store - Audio</title>
        <meta
          name="description"
          content="Encontre os melhores produtos de áudio na Hunter Store."
        />
        <meta
          name="keywords"
          content="áudio, fones de ouvido, caixas de som, amplificadores"
        />
      </Helmet>

      <CompHeader />

      <section className="max-w-[1200px] h-[20rem] mt-[8rem] mx-auto rounded-md relative bg-[url(https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/70d043167453069.Y3JvcCw4ODgsNjk0LDIwNiwyMDQ.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-l bg-primary/10"></div>
      </section>

      <section>
        <CompFilter title="Audio" products={audio} rota={rotas} />
      </section>

      <CompPagination total={audio.length} />
      <CompFooter />
    </div>
  );
}
