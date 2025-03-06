"use client"

import AnimateOnScroll from "./AnimateOnScroll"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50/30 backdrop-blur-sm">
      <div className="container">
        <AnimateOnScroll animation="opacity-100 translate-y-0">
          <h2 className="section-title">About Me</h2>
        </AnimateOnScroll>

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
          <AnimateOnScroll
            animation="opacity-100 translate-x-0"
            className="w-full lg:w-2/5 relative -translate-x-10"
            delay={200}
          >
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Sowjanya"
                className="w-full max-w-md mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <div className="w-36 h-36 bg-primary/20 rounded-full absolute -top-8 -left-8"></div>
              <div className="w-24 h-24 bg-secondary/20 rounded-full absolute -bottom-4 right-1/4"></div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="opacity-100 translate-x-0" className="w-full lg:w-3/5 translate-x-10" delay={400}>
            <h3 className="text-2xl font-semibold mb-5 text-primary-dark">
              Hello! I'm Sowjanya, a passionate Data Engineer
            </h3>
            <p className="text-gray-600 mb-5">
              With a strong background in data engineering and analytics, I specialize in designing and implementing
              data pipelines, ETL processes, and data warehousing solutions. My goal is to help organizations leverage
              their data assets to drive informed decision-making.
            </p>
            <p className="text-gray-600 mb-8">
              I'm passionate about transforming complex data challenges into elegant solutions. My approach combines
              technical expertise with a deep understanding of business needs to deliver results that matter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="flex flex-col">
                <span className="font-semibold text-primary mb-1">Name:</span>
                <span className="text-gray-600">Sowjanya</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-primary mb-1">Email:</span>
                <span className="text-gray-600">sowjanya@example.com</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-primary mb-1">Location:</span>
                <span className="text-gray-600">Burnaby, BC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-primary mb-1">Availability:</span>
                <span className="text-gray-600">Open to opportunities</span>
              </div>
            </div>

            <div className="flex">
              <a
                href="#contact"
                className="py-3 px-7 bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 hover:bg-primary-dark/90 hover:shadow-lg hover:-translate-y-1 border-2 border-primary-dark"
              >
                Contact Me
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default About

