import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const formRef = useScrollReveal({ origin: 'bottom', delay: 400 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // sendEmail logic - can be connected to EmailJS or any email service
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-bg-primary px-[12%] py-24 pt-40"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-white text-center">
        <b>
          Contact <span className="text-main">Me</span>
        </b>
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-10 max-w-5xl mx-auto"
      >
        {/* Left Column - Input Fields */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="contact-input"
              id="contact-fullname"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              id="contact-email"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="contact-input"
              id="contact-phone"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact-input"
              id="contact-subject"
            />
          </div>
        </div>

        {/* Right Column - Textarea & Submit */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-input mt-0 lg:mt-4"
            id="contact-message"
            required
          ></textarea>
          <button
            type="submit"
            className="glow-btn w-full lg:w-auto self-center lg:self-start"
            id="contact-submit-btn"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  )
}
