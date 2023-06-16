import { useState, useContext, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiShoppingBag, HiUserCircle, HiHeart, HiSearch } from "react-icons/hi";

import { CartContext } from "../../contexts/cartContext";
import { AuthContext } from "../../contexts/authContext";

import CompCategorias from "./categorias";

export default function CompHeader() {
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const navigate = useNavigate();

  const { user, signOut } = useContext(AuthContext);
  const { getCartInfo } = useContext(CartContext);

  const cartInfo = getCartInfo();
  const totalItems = cartInfo.items.length;

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY < 100;
      setIsTop(top);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  }

  function handelLogout() {
    signOut();
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div>
          <header
            className={`fixed top-0 left-0 inset-x-0 z-50 right-0 duration-300 ease-in-out  ${
              isTop
                ? "bg-primary"
                : "opacity-100 lg:opacity-100 bg-primary border-b-[.1rem] border-primary-light"
            }`}
          >
            <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-6">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2">
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 mb-14 z-50"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-stretch">
                  <div className="flex items-center">
                    <CompCategorias />
                  </div>
                  {searchOpen ? (
                    <></>
                  ) : (
                    <div className="flex flex-shrink-0 items-center lg:m-0 m-auto ">
                      <a href="/">
                        <img
                          className="block h-8 w-auto lg:hidden"
                          src="/logo.png"
                          alt="Logo Hunter"
                        />
                        <img
                          className="hidden h-8 w-auto lg:block text-wh"
                          src="/logo.png"
                          alt="Logo Hunter"
                        />
                      </a>
                    </div>
                  )}
                  {searchOpen && (
                    <form
                      onSubmit={handleSubmit}
                      className="w-1/3 md:block hidden ml-12"
                    >
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium sr-only"
                      >
                        Search
                      </label>
                      <div className="flex item-center">
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full p-3 pl-4 text-sm border outline-none focus:border-dark focus:border-1 rounded-lg"
                          placeholder="Digite o que você procura..."
                          required
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type="submit" className="-ml-10">
                          <HiSearch className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  )}
                  <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <ul className="flex items-center justify-between gap-x-2">
                      <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="md:block hidden py-2"
                      >
                        <HiSearch className="w-5 h-5" />
                      </button>
                      <Menu
                        as="div"
                        className="relative text-left md:block hidden"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold">
                            <HiUserCircle className="text-2xl" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 w-56 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-dark ring-opacity-5 focus:outline-none">
                            <div className="">
                              <Menu.Item>
                                {user ? (
                                  <button
                                    onClick={handelLogout}
                                    className="block w-full text-left px-4 py-2 text-sm hover:bg-secondary-light rounded-t-md"
                                  >
                                    Sair
                                  </button>
                                ) : (
                                  <a
                                    href="/signin"
                                    className="block px-4 py-2 text-sm hover:bg-secondary-light rounded-t-md"
                                  >
                                    Entre / Cadastre-se
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                <a
                                  href="/help"
                                  className="block px-4 py-2 text-sm hover:bg-secondary-light rounded-b-md"
                                >
                                  Ajuda
                                </a>
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <li>
                        <a
                          href="/favoritos"
                          className="px-3 py-2 rounded-md text-xl md:flex items-center hidden mr-5"
                        >
                          <HiHeart />
                        </a>
                      </li>
                      <li>
                        <a
                          href="/carrinho"
                          className="px-3 py-2 rounded-md text-xl flex items-center mr-10 md:mr-0"
                        >
                          <HiShoppingBag />
                          {totalItems > 0 && <span>({totalItems})</span>}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <Disclosure.Panel className="sm:hidden absolute top-0 w-full z-[40] bg-primary right-0 left-0">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {user ? (
                  <button
                    onClick={handelLogout}
                    className="block px-4 py-2 text-sm hover:bg-secondary-light"
                  >
                    Sair
                  </button>
                ) : (
                  <a href="/signin" className="block px-4 py-2 text-sm hover:bg-secondary-light hover:rounded-md">
                    Entre / Cadastre-se
                  </a>
                )}
                <a href="/favoritos" className="block px-4 py-2 text-sm hover:bg-secondary-light hover:rounded-md">
                  Favoritos
                </a>
                <a href="/help" className="block px-4 py-2 text-sm hover:bg-secondary-light hover:rounded-md">
                  Ajuda
                </a>
                <form onSubmit={handleSubmit}>
                  <label
                    htmlFor="mobile-search"
                    className="mb-2 text-sm font-medium sr-only"
                  >
                    Search
                  </label>
                  <div className="flex item-center">
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full p-4 pl-4 text-sm border outline-none focus:border-dark focus:border-1 rounded-lg"
                      placeholder="Digite o que você procura..."
                      required
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="-ml-10">
                      <HiSearch className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </Disclosure.Panel>
          </header>
        </div>
      )}
    </Disclosure>
  );
}