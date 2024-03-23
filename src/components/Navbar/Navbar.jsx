import { useState } from "react";
import { navItems } from "./NavItems";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  // drawer for mobile view
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenMobileDrawer(!openMobileDrawer);
  };
  return (
    <nav className="nav-container sticky top-0 z-50 py-3 backdrop-blur-lg shadow-sm shadow-neutral-800">
      <div className="items-container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="logo flex items-center flex-shrink-0">
            <a href="#" className="text-2xl text-gray-300 font-bold">
              Top{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                Toolz
              </span>
            </a>
          </div>
          <div className="nav-items">
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-200 font-semibold hover:text-orange-600"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block buttons">
            <a
              href="#"
              className="px-8 py-2 rounded-md text-gray-200 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-700"
            >
              Sign IN
            </a>
          </div>
          {/* drawer */}
          <div className="lg:hidden">
            <button
              className="text-white text-2xl"
              onClick={handleDrawerToggle}
            >
              {openMobileDrawer ? <IoClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
        {/* mobile drawer items */}
        {openMobileDrawer && (
          <div className="fixed right-0 top-16 z-20 w-full p-12 flex flex-col gap-6 items-center justify-center lg:hidden bg-neutral-900 text-gray-200">
            <ul className="space-y-4 text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#"
                className="px-8 py-2 rounded-md text-gray-200 cursor-pointer bg-gradient-to-r from-orange-500 to-orange-700"
              >
                Sign IN
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
