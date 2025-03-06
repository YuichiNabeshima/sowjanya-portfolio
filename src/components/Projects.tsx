import AnimateOnScroll from "./AnimateOnScroll"

const Projects = () => {
  const projects = [
    {
      title: "Real-time Data Pipeline",
      category: "Data Engineering",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Designed and implemented a real-time data processing pipeline using Apache Kafka, Spark Streaming, and Elasticsearch to process and analyze streaming data from IoT devices.",
      technologies: ["Apache Kafka", "Spark Streaming", "Elasticsearch", "Python", "Docker"],
      link: "#",
    },
    {
      title: "Data Warehouse Migration",
      category: "Data Architecture",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Led the migration of an on-premise data warehouse to Snowflake, resulting in improved query performance and reduced maintenance costs.",
      technologies: ["Snowflake", "AWS", "Python", "Airflow", "dbt"],
      link: "#",
    },
    {
      title: "Customer Analytics Dashboard",
      category: "Data Visualization",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Created an interactive dashboard for customer analytics using Tableau, providing business stakeholders with insights into customer behavior and trends.",
      technologies: ["Tableau", "SQL", "Python", "R"],
      link: "#",
    },
    {
      title: "Automated ETL Framework",
      category: "Data Engineering",
      image: "/placeholder.svg?height=300&width=500",
      description:
        "Developed a reusable ETL framework using Apache Airflow to automate data extraction, transformation, and loading processes across multiple data sources.",
      technologies: ["Apache Airflow", "Python", "SQL", "AWS S3", "Redshift"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white/30 backdrop-blur-sm">
      <div className="container">
        <AnimateOnScroll animation="opacity-100 translate-y-0">
          <h2 className="section-title">My Projects</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={index}
              animation="opacity-100 scale-100"
              className="scale-95 opacity-0"
              delay={200 + index * 100}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover h-full">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="px-5 py-2 bg-white text-primary font-medium rounded-full hover:bg-primary-dark hover:text-white transition-colors duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs text-white bg-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs text-gray-600 bg-gray-100 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

