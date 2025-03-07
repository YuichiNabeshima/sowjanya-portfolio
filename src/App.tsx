"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import FloatingBubbles from "./components/FloatingBubbles"

function App() {
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    document.body.style.overflow = loading ? "hidden" : "visible"

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [loading])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={`min-h-screen flex flex-col relative w-full ${isMobile ? "overflow-x-hidden" : ""}`}>
      <FloatingBubbles />
      <Header />
      <main className="flex-grow w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

