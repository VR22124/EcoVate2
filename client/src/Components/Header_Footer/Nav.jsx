import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import Create from "../Context";
const Nav = () => {
  const { isSignedIn } = useAuth();
  const navi=useNavigate();
  const login = isSignedIn;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  const clicklog = () =>{
    navi('/signin')
  }
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductMenu = () => {
    setProductMenuOpen(!productMenuOpen);
  };

  return (
    <header className="bg-green-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 xl:-ml-10 ">
            <img className="h-[68px] w-auto" src={logo} alt="" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <UserButton />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6 ml-2 "
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <span
            className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer"
            onClick={() => {
              if (isSignedIn) {
                navi("/Ecoconnect");
              } else {
                navi("/signin");
              }
            }}
          >
            EcoConnect
          </span>
          <span
            onClick={() => {
              if (isSignedIn) {
                navi("/Ecofund");
              } else {
                navi("/signin");
              }
            }}
            className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer"
          >
            EcoFund
          </span>
          <span
            onClick={() => {
              if (isSignedIn) {
                navi("/Ecovision");
              } else {
                navi("/signin");
              }
            }}
            className="text-lg font-semibold leading-6 text-gray-900 cursor-pointer"
          >
            Ecovision
          </span>
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-gray-900"
              aria-expanded={productMenuOpen}
              onClick={toggleProductMenu}
            >
              Services
              <svg
                className="h-5 w-5 flex-none text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {productMenuOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-44 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {[
                    {
                      name: "EcoCorp",
                      path: "/Ecocorp",
                    },
                    {
                      name: "EcoCalc",
                      path: "/Ecocalc",
                    },
                  ].map((item) => (
                    <div
                      key={item.path}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link
                          to={item.path}
                          className="block font-semibold text-gray-900 text-lg"
                        >
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {login ? (
            <UserButton />
          ) : (
            <span className="text-lg font-semibold leading-6 text-gray-900">
              <button onClick={clicklog}>Log in</button>
              <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img className="h-8 w-auto" src={logo} alt="" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-lg">
                  <Link
                    to="/Ecoconnect"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoConnect
                  </Link>
                  <Link
                    to="/Ecofund"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoFund
                  </Link>
                  <Link
                    to="/Ecocorp"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoCorp
                  </Link>
                  <Link
                    to="/Ecovision"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoVision
                  </Link>
                  <Link
                    to="/Ecocalc"
                    className="-mx-3 block rounded-lg py-2 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    EcoCalc
                  </Link>
                </div>
                {isSignedIn ? (
                  <div></div>
                ) : (
                  <div className="py-6">
                    <span className="-mx-3 block rounded-lg py-2.5 px-3 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                      <SignInButton>Log in </SignInButton>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
