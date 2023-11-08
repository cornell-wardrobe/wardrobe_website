import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Logo from "../components/images/wardrobe_logo.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Events", href: "events", current: false },
  { name: "Team", href: "team", current: false },
  { name: "Media", href: "media", current: false },
  { name: "Apply", href: "apply", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavBar() {
  const location = useLocation();
  const path = location.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (event) => {
      // Ensure that if the click is on the dropdown button, we don't close the dropdown
      if (event.target.closest("#rent-dropdown") || event.target.closest("#rent-dropdown-button")) {
        return;
      }
      setIsDropdownOpen(false);
    };

    document.addEventListener('mousedown', closeDropdown);
    return () => document.removeEventListener('mousedown', closeDropdown);
  }, []);

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
    <Disclosure as="nav" className="bg-white shadow nav:sticky nav:top-0 z-10">
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
                    {/* <a
                      href={"rent"}
                      className={classNames(
                        "flex items-center hover:text-black text-md font-medium px-3 py-2",
                        path === "/rent" ? "text-blue-600" : "text-gray-500"
                      )}
                    >
                      <ShoppingCartIcon className="h-6" />
                      Rent
                    </a> */}
                    <div class="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className={classNames(
                            "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-md font-medium px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                            isDropdownOpen ? "text-blue-600" : "text-gray-500"
                          )}
                          id="rent-dropdown-button"
                          aria-expanded={isDropdownOpen ? "true" : "false"}
                          aria-haspopup="true"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                          <ShoppingCartIcon className="h-6" />
                          Rent
                          <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>

                      <div
                        className={classNames(
                          "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                          !isDropdownOpen && "hidden"
                        )}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="rent-dropdown"
                        tabindex="-1"
                      >
                        <div class="py-1" role="none">
                          <a href="rent" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Rental Form</a>
                          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Size Guide</a>
                          <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Dress Code Guide</a>
                          <form method="POST" action="#" role="none">
                          </form>
                        </div>
                      </div>
                    </div>
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
