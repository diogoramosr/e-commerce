import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "./contexts/authContext";

// PAGES
import PageHome from "./pages/Home";
import PageNovidades from "./pages/Novidade";
import PageGames from "./pages/Categorias/Games";
import PageNotebook from "./pages/Categorias/ComputadorLaptop";
import PageSmartphone from "./pages/Categorias/Smartphone";
import PageAudio from "./pages/Categorias/Audio";
import PageAcessorios from "./pages/Categorias/Acessorios";
import PageDetalhes from "./pages/Detalhes";
import PageFavoritos from "./pages/Favoritos";
import PageCart from "./pages/Cart";
import PageHelp from "./pages/Help";
import PageSignIn from "./pages/SignIn";
import PageRegister from "./pages/Register";
import PagePagamento from "./pages/Pagamento";
import PageSearch from "./pages/Search";
import Error from "./pages/404";
import PageOrder from "./pages/Order";

export default function RoutesWeb() {
  const { user } = useContext(AuthContext);

  function RequireAuth({ children }) {
    if (!user) {
      return <PageSignIn />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/novidades" element={<PageNovidades />} />
        <Route path="/categorias/games" element={<PageGames />} />
        <Route path="/categorias/computadores-e-notebooks" element={<PageNotebook />} />
        <Route
          path="/categorias/celulares-e-smartphones"
          element={<PageSmartphone />}
        />
        <Route path="/categorias/audio" element={<PageAudio />} />
        <Route path="/categorias/acessorios" element={<PageAcessorios />} />
        <Route path="/detalhes/:categoria/:_id" element={<PageDetalhes />} />
        <Route path="/favoritos" element={<PageFavoritos />} />
        <Route path="/help" element={<PageHelp />} />

        <Route path="/signin" element={<PageSignIn />} />
        <Route path="/register" element={<PageRegister />} />

        <Route path="/carrinho" element={<PageCart />} />

        <Route
          path="/pagamentos"
          element={
            <RequireAuth>
              <PagePagamento />
            </RequireAuth>
          }
        />

        <Route path="/search" element={<PageSearch />} />
        <Route path="/order" element={<PageOrder />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
