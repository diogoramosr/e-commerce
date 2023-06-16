import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";

export default function PageSignIn() {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.setItem("redirectTo", location.pathname);

  async function handleLogin() {
    try {
      if (email && password) {
        const response = await signIn(email, password);
        if (!response) {
          alert("Email ou senha inválidos");
          return;
        }
        const redirectTo = localStorage.getItem("redirectTo");
        if (redirectTo === "/signin") {
          navigate("/");
        } else {
          navigate(redirectTo);
        }
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    } catch (error) {
      console.log("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Por favor, tente novamente.");
    }
  }

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <a href="/">
            <img
              className="mx-auto h-18 w-auto"
              src="/logo.png"
              alt="Hunter Store Logo"
            />
          </a>
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight">
            SUA CONTA PARA TUDO DA HUNTER
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="mb-5">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Endereço de e-mail"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 outline-none py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-secondary  sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Senha"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 outline-none py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-secondary sm:text-sm sm:leading-6"
              />
              <div className="text-sm my-5 flex justify-between items-center">
                <div className="form-control flex items-center">
                  <label className="label cursor-pointer gap-x-2">
                    <input
                      type="checkbox"
                      class="form-checkbox"
                      className="w-5 h-5"
                    />
                    <span className="text-[14px]">Mantenha-me conectado</span>
                  </label>
                </div>
                <a href="#" className="font-medium text-[14px] hover:underline">
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-7 ">
            <p className="text-center text-[13px]">
              Ao fazer login, você concorda com a{" "}
              <a href="#" className="underline">
                Política de privacidade
              </a>{" "}
              e com os{" "}
              <a href="#" className="underline">
                Termos de uso
              </a>{" "}
              do Hunter.com.br.
            </p>
            <button
              onClick={handleLogin}
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <p className="text-center text-[14px] text-secondary">
              Não tem uma conta?
              <a
                href="/register"
                className="font-semibold text-black underline ml-1"
              >
                Cadastre-se gratuitamente
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
