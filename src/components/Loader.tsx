"use client"

import { useEffect } from "react"

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  // Create a visually appealing loader component
  return (
    <div className="fixed inset-0 bg-background flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          {/* Main logo circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-spin-slow"></div>

          {/* Inner white circle */}
          <div className="absolute inset-2 rounded-full bg-white"></div>

          {/* Center initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              S
            </span>
          </div>

          {/* Orbiting small circles */}
          <div className="absolute w-6 h-6 bg-primary rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce-slow"></div>
          <div
            className="absolute w-6 h-6 bg-secondary rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-bounce-slow"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-accent rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce-slow"
            style={{ animationDelay: "0.6s" }}
          ></div>
          <div
            className="absolute w-6 h-6 bg-primary-light rounded-full right-0 top-1/2 translate-x-1/2 -translate-y-1/2 animate-bounce-slow"
            style={{ animationDelay: "0.9s" }}
          ></div>
        </div>

        <div className="mt-8 relative">
          <div className="text-xl text-primary font-medium">Loading</div>
          <div className="flex mt-2 space-x-1 justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }}></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader

