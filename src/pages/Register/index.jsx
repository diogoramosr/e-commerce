import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function PageRegister() {
  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleRegister(event) {
    event.preventDefault();
    const { firstName, lastName, dateOfBirth, phoneNumber, email, password } =
      formValues;

    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !phoneNumber ||
      !email ||
      !password
    ) {
      alert("Preencha todos os campos.");
      return;
    }

    const userData = {
      name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth,
      phone_number: phoneNumber,
      email,
      password,
    };

    signUp(userData);
    setFormValues({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      password: "",
    });
    navigate("/signin");
  }

  return (
    <div>
      <section class="relative py-20 lg:py-10 overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap -mx-4 justify-center items-center">
              <div class="w-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0">
                <div class="max-w-md lg:py-20 mx-auto lg:mr-0">
                  <h3 class="font-heading text-center text-2xl uppercase font-semibold mb-4">
                    Torne-se um membro da <br />
                    Hunter
                  </h3>
                  <p class="text-lg text-secondary text-center mb-10">
                    Crie seu perfil de membro da Hunter e consiga acesso
                    antecipado às melhores comunidades, inspirações e aos
                    produtos Hunter.
                  </p>
                  <div class="flex flex-wrap mb-6 items-center -mx-2">
                    <div class="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                      <a
                        class="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-secondary transition duration-100"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        <span class="ml-4 text-sm font-semibold text-secondary">
                          Entrar com Facebook
                        </span>
                      </a>
                    </div>
                    <div class="w-full md:w-1/2 px-2">
                      <a
                        class="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-secondary transition duration-100"
                        href="#"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
                        </svg>
                        <span class="ml-4 text-sm font-semibold text-secondary">
                          Entrar com a Apple{" "}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="flex mb-6 items-center">
                    <div class="w-full h-px bg-gray-300"></div>
                    <span class="mx-4 text-sm font-semibold text-secondary">
                      Ou
                    </span>
                    <div class="w-full h-px bg-gray-300"></div>
                  </div>
                  <form onSubmit={handleRegister}>
                    <div class="mb-6">
                      <input
                        class="w-full py-3 px-4 text-sm placeholder-secondary border-[1px] outline-none focus:border-black rounded-lg"
                        type="email"
                        name="email"
                        placeholder="Endereço de e-mail"
                        required
                        value={formValues.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="mb-6">
                      <input
                        class="w-full py-3 px-4 text-sm placeholder-secondary border-[1px] outline-none focus:border-black rounded-lg"
                        type="text"
                        name="firstName"
                        placeholder="Nome"
                        required
                        value={formValues.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        class="w-full py-3 px-4 text-sm placeholder-secondary border-[1px] outline-none focus:border-black rounded-lg"
                        type="text"
                        name="lastName"
                        placeholder="Sobrenome"
                        required
                        value={formValues.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        class="w-full py-3 px-4 text-sm placeholder-secondary border-[1px] outline-none focus:border-black rounded-lg"
                        type="tel"
                        name="phoneNumber"
                        placeholder="(xx) xxxxx-xxxx"
                        required
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        class="w-full py-3 px-4 text-sm placeholder-secondary border-[1px] outline-none focus:border-black rounded-lg"
                        type="date"
                        name="dateOfBirth"
                        placeholder="Data de Nascimento"
                        required
                        value={formValues.dateOfBirth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div class="mb-7">
                      <div class="relative">
                        <input
                          class="w-full py-3 px-4 text-sm placeholder-secondary border-[1px] outline-none focus:border-black rounded-lg"
                          type="password"
                          name="password"
                          placeholder="Senha"
                          required
                          value={formValues.password}
                          onChange={handleInputChange}
                        />
                        <button class="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                          <svg
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            stroke-linejoin="round"
                            stroke-miterlimit="2"
                            viewBox="0 0 24 24"
                            className="fill-current w-6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z"
                              fill-rule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="flex mb-4 items-center">
                      <div className="flex items-center justify-between">
                        <input
                          type="checkbox"
                          class="form-checkbox"
                          className="w-8 h-8 mr-2"
                        />
                        <label class="block ml-2 mb-2 text-[13px]">
                          Inscreva-se para receber e-mails de novidades da Hunter
                          sobre produtos, ofertas e seus benefícios de membro
                        </label>
                      </div>
                    </div>
                    <div class="flex mb-8 items-center text-center">
                      <p class="block ml-2 mb-2 text-secondary text-[13px]">
                        Ao criar uma conta, você concorda com a{" "}
                        <a href="" className="underline">
                          Política de Privacidade
                        </a>{" "}
                        e com os{" "}
                        <a href="" className="underline">
                          Termos de Uso
                        </a>{" "}
                        da Hunter.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <button
                        type="submit"
                        className="mb-7 uppercase text-base leading-4 text-white font-semibold bg-black w-full py-5 "
                      >
                        Junte-se a nós
                      </button>
                      <span class="text-[15px] font-semibold text-secondary">
                        <span>Já é um usuário?</span>
                        <a
                          class="ml-1 inline-block underline text-dark"
                          href="/signin"
                        >
                          Fazer login.
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
