import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { FaCheckCircle, FaTimes } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const formRef = useScrollReveal({ origin: 'bottom', delay: 400 })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all required fields.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }
    
    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    setStatus('loading')

    try {
      const response = await fetch("https://formsubmit.co/ajax/tnethu466@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            subject: formData.subject || 'No subject',
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.fullName}`,
            _template: 'box'
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        
        // Auto hide success popup after 5 seconds
        setTimeout(() => {
          setStatus('idle')
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.')
      setStatus('error')
      
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    }
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

      {/* Success Popup Card */}
      {status === 'success' && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-[#0d0d0d] border border-[#00ff51]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,255,81,0.2)] max-w-md w-full relative animate-[fadeIn_0.3s_ease-out]">
            <button 
              onClick={() => setStatus('idle')}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#00ff51]/10 flex items-center justify-center mb-2">
                <FaCheckCircle className="text-4xl text-[#00ff51]" />
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400 text-sm">
                Thank you for reaching out. Your message has been successfully delivered to tnethu466@gmail.com, and I will get back to you soon.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 px-8 py-2.5 rounded-full bg-[#00ff51] text-black font-bold hover:bg-white hover:text-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {status === 'error' && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-red-500/10 border border-red-500/50 text-red-500 px-6 py-3 rounded-xl z-50 flex items-center gap-3 backdrop-blur-md animate-[slideDown_0.3s_ease-out]">
          <FaTimes className="text-xl cursor-pointer" onClick={() => setStatus('idle')} />
          <span>{errorMessage}</span>
        </div>
      )}

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
              type="tel"
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
            disabled={status === 'loading'}
            className={`glow-btn w-full lg:w-auto self-center lg:self-start ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
            id="contact-submit-btn"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  )
}
