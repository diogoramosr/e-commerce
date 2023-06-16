import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navigation = [
  { id: 1, name: "Novidades", href: "/novidades" },
  { id: 2, name: "Games", href: "/categorias/games" },
  { id: 3, name: "Computadores", href: "/categorias/computadores-e-notebooks" },
  { id: 4, name: "Smartphones", href: "/categorias/celulares-e-smartphones" },
  { id: 5, name: "Audio", href: "/categorias/audio" },
  { id: 6, name: "Acessórios", href: "/categorias/acessorios" },
];

export default function CompCategorias() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="flex justify-center w-full px-4 py-2 text-sm rounded-md shadow-sm">
            <span className="font-semibold">Categorias</span>
            <ChevronDownIcon
              className="h-5 w-5 ml-2 text-secondary"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute z-10 w-56 origin-top-right rounded-md shadow-lg ring-1 bg-primary ring-dark ring-opacity-5 focus:outline-none mt-1">
            <div className="flex flex-col gap-y-1">
              {navigation.map((item) => (
                <Menu.Item
                  key={item.id}
                  className="hover:bg-secondary-light py-1.5 px-2"
                >
                  {({ active }) => (
                    <a href={item.href} className="text-[14px] font-medium">
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
