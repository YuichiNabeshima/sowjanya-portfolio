"use client"

import { useEffect, useRef, useState } from "react"
import AnimateOnScroll from "./AnimateOnScroll"

const Skills = () => {
  const technicalSkills = [
    { name: "SQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "Apache Spark", level: 80 },
    { name: "ETL/ELT", level: 90 },
    { name: "Data Modeling", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Airflow", level: 80 },
    { name: "Snowflake", level: 75 },
  ]

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Team Collaboration", level: 90 },
    { name: "Project Management", level: 80 },
  ]

  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section id="skills" className="py-20 bg-white/30 backdrop-blur-sm" ref={sectionRef}>
      <div className="container">
        <AnimateOnScroll animation="opacity-100 translate-y-0">
          <h2 className="section-title">My Skills</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16">
          <AnimateOnScroll animation="opacity-100 translate-x-0" className="-translate-x-10" delay={200}>
            <div className="bg-white/70 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-card">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary-dark relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-10px] after:left-0">
                Technical Skills
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {technicalSkills.map((skill, index) => (
                  <AnimateOnScroll
                    key={index}
                    animation="opacity-100 translate-y-0"
                    className="translate-y-10"
                    delay={300 + index * 100}
                  >
                    <div className="mb-4 w-full">
                      <div className="flex justify-between mb-2 items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold min-w-[40px] text-right">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden w-full">
                        <div
                          className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
                          style={{
                            width: isInView ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="opacity-100 translate-x-0" className="translate-x-10" delay={200}>
            <div className="bg-white/70 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-card">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary-dark relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-10px] after:left-0">
                Soft Skills
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {softSkills.map((skill, index) => (
                  <AnimateOnScroll
                    key={index}
                    animation="opacity-100 translate-y-0"
                    className="translate-y-10"
                    delay={300 + index * 100}
                  >
                    <div className="mb-4 w-full">
                      <div className="flex justify-between mb-2 items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-secondary font-semibold min-w-[40px] text-right">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden w-full">
                        <div
                          className="h-full rounded-full bg-secondary transition-[width] duration-1000 ease-out"
                          style={{
                            width: isInView ? `${skill.level}%` : "0%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Skills

