import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import api from "../../../services/api";

import CompHeader from "../../../components/Header";
import CompFilter from "../../../components/Filters";
import CompPagination from "../../../components/Pagination";
import CompFooter from "../../../components/Footer";

export default function PageGames() {
  const [game, setGames] = useState([]);
  const rotas = "games";

  useEffect(() => {
    async function loadGames() {
      const response = await api.get("/games");
      setGames(response.data.results);
    }
    loadGames();
  }, []);
  return (
    <div className="lg:p-0 p-2 pt-0 pb-0">
      <Helmet>
        <title>Hunter Store - Games</title>
        <meta name="description" content="Os melhores jogos eletrônicos em um só lugar!" />
        <meta name="keywords" content="jogos, games, PlayStation, Xbox, Nintendo, PC" />
      </Helmet>

      <CompHeader />

      <section className="max-w-[1200px] h-[20rem] mt-[8rem] mx-auto rounded-md relative bg-[url(https://assets1.ignimgs.com/2020/07/30/topps4-oneup-1596133216321.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-l bg-primary/10"></div>
      </section>

      <section>
        <CompFilter title="Games" products={game} rota={rotas} />
      </section>

      <CompPagination total={game.length}/>
      <CompFooter />
    </div>
  );
}
