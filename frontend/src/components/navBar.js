import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Logo from "../components/images/wardrobe_logo.png";
import { useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Events", href: "events", current: false },
  { name: "Team", href: "team", current: false },
  { name: "Donation", href: "donation", current: false },
  { name: "Apply", href: "apply", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const location = useLocation();

  const path = location.pathname;
  for (let i = 0; i < navigation.length; i++) {
    if (
      (path === "/" && navigation[i].href === "/") ||
      path === "/" + navigation[i].href
    ) {
      navigation[i].current = true;
    } else {
      navigation[i].current = false;
    }
  }

  return (
    <Disclosure as="nav" className="bg-white shadow nav:sticky nav:top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-5 nav:px-9 lg:px-15">
            <div className="relative flex h-28 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center nav:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center nav:items-stretch nav:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <a href={"/"}>
                    <img
                      className="block h-14 w-auto lg:hidden"
                      src={Logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-14 w-auto lg:block"
                      src={Logo}
                      alt="Your Company"
                    />
                  </a>
                </div>
                <div className="hidden nav:ml-6 nav:block">
                  <div className="flex items-center space-x-4 p-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "hover:text-black text-md font-medium px-3 py-2",
                          item.current ? "text-blue-600" : "text-gray-500"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div
                      id="vertical bar"
                      className="h-20 border-l-black border-[1px]"
                    ></div>
                    <a
                      href={"rent"}
                      className={classNames(
                        "flex items-center hover:text-black text-md font-medium px-3 py-2",
                        path === "/rent" ? "text-blue-600" : "text-gray-500"
                      )}
                    >
                      <ShoppingCartIcon className="h-6" />
                      Rent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="nav:hidden">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    "hover:text-black text-md font-medium px-3 py-2",
                    item.current ? "text-blue-600" : "text-gray-500"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <a
                href={"rent"}
                className={classNames(
                  "flex items-center hover:text-black text-md font-medium px-3 py-2",
                  path === "/rent" ? "text-blue-600" : "text-gray-500"
                )}
              >
                <ShoppingCartIcon className="h-6" />
                Rent
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavBar;
