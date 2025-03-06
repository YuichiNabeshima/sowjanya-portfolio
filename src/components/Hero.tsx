"use client"

import { useEffect, useRef, useState } from "react"

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Start animation after page load
    setIsLoaded(true)

    if (!typingRef.current) return

    const roles = ["Data Engineer", "Data Analyst", "Problem Solver"]
    let roleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingDelay = 200

    const type = () => {
      const currentRole = roles[roleIndex]

      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1)
        }
        charIndex--
        typingDelay = 100
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1)
        }
        charIndex++
        typingDelay = 200
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true
        typingDelay = 1000
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        roleIndex = (roleIndex + 1) % roles.length
      }

      setTimeout(type, typingDelay)
    }

    setTimeout(type, typingDelay)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div
              className={`transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                Hi, I'm{" "}
                <span className="text-primary relative inline-block after:content-[''] after:absolute after:w-full after:h-3 after:bg-primary/20 after:bottom-1 after:left-0 after:-z-10 after:rounded-md">
                  Sowjanya
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-gray-600">
                I'm a <span className="text-accent relative" ref={typingRef}></span>
                <span className="animate-blink">|</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 px-4 sm:px-0">
                Transforming raw data into meaningful insights and building robust data pipelines to drive business
                decisions.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start mb-16 sm:mb-0">
                <a
                  href="#contact"
                  className={`btn py-2 px-5 sm:py-3 sm:px-7 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: "600ms" }}
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className={`btn-outline py-2 px-5 sm:py-3 sm:px-7 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: "800ms" }}
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 relative transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full border-4 border-primary/30 overflow-hidden relative z-10">
              <img src="/placeholder.svg?height=500&width=500" alt="Sowjanya" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 z-0">
              <div className="w-24 h-24 bg-primary/20 rounded-full absolute top-0 right-1/4 animate-float"></div>
              <div className="w-16 h-16 bg-secondary/20 rounded-full absolute bottom-1/4 right-10 animate-float-slow"></div>
              <div className="w-28 h-28 bg-accent/20 rounded-full absolute bottom-1/3 left-10 animate-float-medium"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-center transition-all duration-1000 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: "1000ms" }}
      >
        <a href="#about" className="inline-block">
          <div className="w-8 h-12 border-2 border-primary rounded-3xl mx-auto relative">
            <div className="w-1.5 h-1.5 bg-primary rounded-full absolute top-2.5 left-1/2 -translate-x-1/2 animate-scroll"></div>
          </div>
          <div className="mt-2">
            <span className="block w-2.5 h-2.5 border-b-2 border-r-2 border-primary transform rotate-45 mx-auto animate-arrow"></span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

