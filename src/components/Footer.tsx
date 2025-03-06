import AnimateOnScroll from "./AnimateOnScroll"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="pt-16 pb-6 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <AnimateOnScroll
            animation="opacity-100 translate-y-0"
            className="col-span-1 md:col-span-2 lg:col-span-1 translate-y-10"
            delay={100}
          >
            <a href="#" className="text-2xl font-bold text-primary mb-4 inline-block">
              Sowjanya<span className="text-accent">.</span>
            </a>
            <p className="text-gray-600 mb-6">Data Engineer | Data Analyst | Problem Solver</p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-10" delay={200}>
            <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-primary transition-colors hover:pl-1">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors hover:pl-1">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-600 hover:text-primary transition-colors hover:pl-1">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-600 hover:text-primary transition-colors hover:pl-1">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-primary transition-colors hover:pl-1">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors hover:pl-1">
                  Contact
                </a>
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-10" delay={300}>
            <h3 className="text-lg font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>sowjanya@example.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+81 90 1234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Burnaby, BC</span>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="opacity-100 translate-y-0" className="translate-y-10" delay={400}>
          <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center md:text-left">
              &copy; {currentYear} Sowjanya. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}

export default Footer

