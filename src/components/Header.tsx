"use client"

import { useState, useEffect, useRef } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLDivElement>(null)
  const scrollTimerRef = useRef<number | null>(null)
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      if (window.scrollY > 50) {
        setIsScrolled(true)
      }
      return
    }

    const handleScroll = () => {
      if (scrollTimerRef.current !== null) {
        return
      }

      scrollTimerRef.current = window.setTimeout(() => {
        if (window.scrollY > 50) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
        scrollTimerRef.current = null
      }, 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimerRef.current !== null) {
        clearTimeout(scrollTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "visible"
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleAnchorClick = () => {
    closeMenu()
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-sm shadow-md" : "bg-transparent"}`}
    >
      <div className="container h-full flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary" onClick={handleAnchorClick}>
          Sowjanya<span className="text-accent">.</span>
        </a>

        <div className={`w-8 h-5 relative cursor-pointer z-[101] md:hidden`} onClick={toggleMenu} ref={toggleRef}>
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
          ref={menuRef}
          className={`fixed md:static top-0 ${isMenuOpen ? "right-0" : "-right-full"} w-[70%] md:w-auto h-screen md:h-auto bg-white/90 md:bg-transparent shadow-2xl md:shadow-none p-24 md:p-0 transition-all duration-300 z-50 md:z-auto backdrop-blur-sm md:backdrop-blur-none overflow-y-auto md:overflow-visible`}
        >
          <ul className="flex flex-col md:flex-row gap-5 md:gap-8">
            <li>
              <a
                href="#home"
                onClick={handleAnchorClick}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleAnchorClick}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleAnchorClick}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={handleAnchorClick}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={handleAnchorClick}
                className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleAnchorClick}
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

