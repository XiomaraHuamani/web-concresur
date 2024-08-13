import React, { useState } from "react";
import { Routes } from "../resources/navBarRoutes";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import classNames from "classnames";
import navlogo from "../assets/img/nav-logo.svg";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleArticleClick = () => {
    // Navegar a la parte superior de la página cuando se hace clic en un artículo recomendado
    window.scrollTo(0, 0);
  };
  return (
    <header className="fixed w-full top-0 inset-x-0 z-50 bg-primary">
      <div className="px-4 sm:px-10 relative z-10 md:px-16 lg:px-16 xl:px-24 xxl:px-32 py-8 w-full flex justify-between items-center h-[90px]">
        <Link
          to={"hero"}
          spy={true}
          smooth={true}
          offset={-112}
          duration={700}
          className="cursor-pointer relative z-10 lg:z-0"
        >
          <div className="flex gap-2 items-end">
            <img
              src={navlogo}
              alt="My Icon"
              width="250"
              height="220"
              className="h-[200px] md:h-[190px] w-[150px] md:w-[160px]"
            />
          </div>
        </Link>
        <nav className="text-primary-100 font-medium break-words leading-4 hidden lg:block">
          <ul className="flex gap-18 xl:gap-60 items-center">
            <div className="hidden sm:ml-2 sm:block ">
              <div className="flex space-x-1 ">
                {Routes.map((item) => (
                  <Link
                    to={item.url}
                    key={item.label}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-white-300 hover:bg-gray-300 hover:bg-opacity-30 hover:text-white",
                      "rounded-md px-5 py-3 text-primary-100 font-medium break-words"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex gap-5 xl:gap-1 items-center ">
              <div className="hidden sm:ml-2 sm:block ">
                {/* <div className="rounded-md px-2 py-2  hover:bg-gray-300 hover:bg-opacity-30">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-white-500 rounded-md hover:bg-gray-300 hover:bg-opacity-30 ">
                    <FaWhatsapp className="w-6 h-6 hover:text-blue-800 rounded-md " />
                  </a>
                </div> */}
              </div>
              <div className="hidden sm:ml-2 sm:block ">
                <div className="rounded-md px-2 py-2  hover:bg-gray-300 hover:bg-opacity-30">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-500 rounded-md hover:bg-gray-300 hover:bg-opacity-30 "
                  >
                    <FaFacebook className="w-6 h-6 hover:text-blue-800" />
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-2 sm:block ">
                <div className="rounded-md px-2 py-2  hover:bg-gray-300 hover:bg-opacity-30">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-500 rounded-md hover:bg-gray-300 hover:bg-opacity-30 "
                  >
                    <FaInstagram className="w-6 h-6 hover:text-blue-800" />
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-2 sm:block">
                <div className="rounded-md px-2 py-2 hover:bg-gray-300 hover:bg-opacity-30">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white-500 rounded-md hover:bg-gray-300 hover:bg-opacity-30"
                  >
                    <FaTiktok className="w-5 h-5 hover:text-blue-800 rounded-md" />
                  </a>
                </div>
              </div>
            </div>
          </ul>
        </nav>
        {/* <div className='hidden lg:block'>
          <Link
            // onClick={handleArticleClick}
            to={'contacto'}
            spy={true}
            smooth={true}
            offset={-112}
            duration={700}
            className='block px-8 py-4 rounded-[100px] bg-primary-100 transition-all ease-in-out duration-300 hover:bg-greenGemma text-primary-800 break-words font-medium tracking-[0.03125rem] leading-4 cursor-pointer'
          >
            Cotiza tu local
          </Link>
        </div> */}
        <div className="flex justify-center items-center lg:hidden">
          <motion.button
            initial="hide"
            animate={mobileNav ? "show" : "hide"}
            onClick={toggleMobileNav}
            className="w-11 h-11 bg-primary-100 rounded-xl space-y-[6px] px-[10px] relative z-10 lg:z-0"
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: 45,
                  y: 9,
                },
              }}
              className="w-6 rounded-[3px] bg-primary h-[3px] block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  opacity: 1,
                },
                show: {
                  opacity: 0,
                },
              }}
              className="w-6 rounded-[3px] bg-primary h-[3px] block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: -45,
                  y: -9,
                },
              }}
              className="w-6 rounded-[3px] bg-primary h-[3px] block"
            ></motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <motion.div
              key="mobile-nav"
              variants={{
                hide: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "afterChildren",
                    staggerChildren: 0.25,
                  },
                },
                show: {
                  x: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                    staggerChildren: 0.25,
                  },
                },
              }}
              initial="hide"
              animate="show"
              exit="hide"
              className="fixed inset-0 bg-primary py-6 px-4 sm:px-10 md:px-16 flex flex-col justify-center space-y-10 lg:hidden"
            >
              <motion.ul
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="list-none space-y-6 text-[20px] xs:text-[24px] sm:text-[32px] md:text-[40px] text-primary-100 font-medium break-words leading-[100%]"
              >
                {Routes.map((route) => (
                  <li key={route.id}>
                    <Link
                      activeClass="active"
                      to={route.url}
                      spy={true}
                      smooth={true}
                      offset={-112}
                      duration={700}
                      className="cursor-pointer"
                      onClick={() => toggleMobileNav()}
                    >
                      {route.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
              <motion.div
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="w-full h-px bg-primary-200"
              ></motion.div>
              <motion.ul
                variants={{
                  hide: {
                    y: "25%",
                    opacity: 0,
                  },
                  show: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="list-none flex justify-center gap-x-8 sm:gap-x-12 text-primary-100"
              ></motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
