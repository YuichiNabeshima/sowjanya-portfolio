"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container h-full flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">
          Sowjanya<span className="text-accent">.</span>
        </a>

        <div className={`w-8 h-5 relative cursor-pointer z-[101] md:hidden`} onClick={toggleMenu}>
          <div
            className={`absolute w-full h-0.5 bg-primary top-1/2 -translate-y-1/2 transition-all duration-300 ${isMenuOpen ? "bg-transparent" : ""}`}
          ></div>
          <div
            className={`absolute w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
          ></div>
          <div
            className={`absolute w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
          ></div>
        </div>

        <nav
          className={`fixed md:static top-0 ${isMenuOpen ? "right-0" : "-right-full"} w-[70%] md:w-auto h-screen md:h-auto bg-white/90 md:bg-transparent shadow-2xl md:shadow-none p-24 md:p-0 transition-all duration-300 z-50 md:z-auto backdrop-blur-sm md:backdrop-blur-none`}
        >
          <ul className="flex flex-col md:flex-row gap-5 md:gap-8">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

