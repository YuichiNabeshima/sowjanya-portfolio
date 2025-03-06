import AnimateOnScroll from "./AnimateOnScroll"

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      description: [
        "Designed and implemented scalable data pipelines using Apache Spark and Airflow",
        "Optimized ETL processes resulting in 40% reduction in processing time",
        "Led a team of 3 data engineers in developing a real-time analytics platform",
        "Collaborated with data science team to implement ML models in production",
      ],
    },
    {
      title: "Data Engineer",
      company: "Data Insights Co.",
      period: "Mar 2018 - Dec 2020",
      description: [
        "Developed and maintained ETL workflows for data warehouse solutions",
        "Implemented data quality checks and monitoring systems",
        "Created dashboards and reports using Tableau for business stakeholders",
        "Participated in data modeling and schema design for new projects",
      ],
    },
    {
      title: "Data Analyst",
      company: "Analytics Partners",
      period: "Jun 2016 - Feb 2018",
      description: [
        "Performed data analysis and created reports for business teams",
        "Developed SQL queries to extract and transform data from various sources",
        "Built interactive dashboards to visualize key business metrics",
        "Collaborated with product teams to define data requirements",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in data engineering and big data technologies. Completed thesis on optimizing data pipelines for real-time analytics.",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Focused on database systems and software engineering.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50/30 backdrop-blur-sm overflow-hidden">
      <div className="container">
        <AnimateOnScroll animation="opacity-100 translate-y-0">
          <h2 className="section-title">Experience & Education</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <AnimateOnScroll animation="opacity-100 translate-x-0" className="-translate-x-10" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-primary-dark relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-10px] after:left-0">
              Work Experience
            </h3>
            <div className="relative pl-8 border-l-2 border-primary-light">
              {experiences.map((exp, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="opacity-100 translate-y-0"
                  className={`relative mb-12 translate-y-10 ${index === experiences.length - 1 ? "mb-0" : ""}`}
                  delay={300 + index * 200}
                >
                  <div className="absolute w-5 h-5 bg-white border-4 border-primary rounded-full left-[-18px] top-0 z-10"></div>
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-card">
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <span className="font-medium text-gray-800">{exp.company}</span>
                    </div>
                    <div className="inline-block px-3 py-1 mb-4 text-sm bg-gray-100 rounded-full text-gray-600">
                      {exp.period}
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="pl-5 relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-primary-light before:rounded-full before:left-0 before:top-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="opacity-100 translate-x-0" className="translate-x-10" delay={200}>
            <h3 className="text-2xl font-semibold mb-8 text-primary-dark relative inline-block after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-10px] after:left-0">
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-primary-light">
              {education.map((edu, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="opacity-100 translate-y-0"
                  className={`relative mb-12 translate-y-10 ${index === education.length - 1 ? "mb-0" : ""}`}
                  delay={300 + index * 200}
                >
                  <div className="absolute w-5 h-5 bg-white border-4 border-primary rounded-full left-[-18px] top-0 z-10"></div>
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-card">
                    <div className="mb-2">
                      <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                      <span className="font-medium text-gray-800">{edu.institution}</span>
                    </div>
                    <div className="inline-block px-3 py-1 mb-4 text-sm bg-gray-100 rounded-full text-gray-600">
                      {edu.period}
                    </div>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Experience

