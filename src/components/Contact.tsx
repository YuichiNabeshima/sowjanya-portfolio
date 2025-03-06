"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import AnimateOnScroll from "./AnimateOnScroll"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setSubmitMessage("Thank you! Your message has been sent successfully.")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
        setSubmitStatus("")
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50/30 backdrop-blur-sm overflow-hidden">
      <div className="container">
        <AnimateOnScroll animation="opacity-100 translate-y-0">
          <h2 className="section-title">Get In Touch</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-16">
          <AnimateOnScroll animation="opacity-100 translate-x-0" className="lg:col-span-2 -translate-x-10" delay={200}>
            <div className="bg-white/70 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-card">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-primary-dark">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to me
                using the contact form or through my social media profiles.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-full flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">+81 90 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-full flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-600">sowjanya@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-light rounded-full flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-600">Burnaby, BC</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                >
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                >
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
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                >
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
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="opacity-100 translate-x-0" className="lg:col-span-3 translate-x-10" delay={400}>
            <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-sm p-5 sm:p-8 rounded-xl shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitMessage && (
                <div
                  className={`mt-4 p-3 rounded-lg text-center ${
                    submitStatus === "success" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Contact

