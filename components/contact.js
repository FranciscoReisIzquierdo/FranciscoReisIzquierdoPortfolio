import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_taeegpg', 'template_22g1k0p', e.target, 'gcoi-i0M7TWPR0MU4')
      .then(() => {
        setStatusType('success');
        setStatusMessage('✅ Message sent successfully!');
        setFormData({ email: '', subject: '', message: '' });

        setTimeout(() => {
          setStatusMessage('');
          setStatusType('');
        }, 5000);
      })
      .catch(() => {
        setStatusType('error');
        setStatusMessage('❌ Failed to send message. Please try again later.');

        setTimeout(() => {
          setStatusMessage('');
          setStatusType('');
        }, 5000);
      });
  };

  return (
    <section id="contact" className="w-full px-4 sm:px-[10vw] py-8 lg:py-16 mt-24 mb-8 lg:mb-16 scroll-margin-top">
      
      {/* Title */ }
      <h2 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-blue-200 font-poppins text-center mb-12 sm:mb-16 lg:mb-20">
        Contact
      </h2>

      {/* Sub Title */ }
      <p className="mb-8 lg:mb-16 font-poppins text-center text-gray-100 text-base sm:text-lg mx-auto w-full max-w-2xl px-2">
        Got a question, suggestion, or just want to say hi? Drop me an email at
        <a
          href="mailto:franciaguia@hotmail.com"
          className="text-blue-200 hover:underline mx-1.5"
        >
          franciaguia@hotmail.com
        </a>
        or fill out the form — I’d love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="space-y-8 max-w-screen-md mx-auto">
        
        {/* Person Email */ }
        <div>
          <label htmlFor="email" className="block mb-2 text-md font-poppins text-gray-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block p-3 w-full text-sm font-poppins rounded-lg border
              bg-[#02001E]/5 backdrop-blur-lg dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
              focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="your@email.com"
            required
          />
        </div>
        
        {/* Subject */ }
        <div>
          <label htmlFor="subject" className="block mb-2 text-md font-poppins text-gray-100">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="block p-3 w-full text-sm font-poppins rounded-lg border
              bg-[#02001E]/5 backdrop-blur-lg dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
              focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Let me know how I can help you"
            required
          />
        </div>

        {/* Message */ }
        <div>
          <label htmlFor="message" className="block mb-2 text-md font-poppins text-gray-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="block p-3 w-full text-sm font-poppins rounded-lg border
              bg-[#02001E]/5 backdrop-blur-lg dark:border-gray-600
              dark:placeholder-gray-400 dark:text-white
              focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Leave a message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-3
            bg-[#eff4ff] backdrop-blur-lg text-[#41567e] rounded-lg shadow-md
            transform hover:scale-105 transition-all duration-300
            hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-200"
        >
          <span className="text-sm font-semibold font-poppins">Send message</span>
        </button>
      </form>

      {/* Status Message */}
      {statusMessage && (
        <div
          className={`mt-6 text-center font-poppins text-sm sm:text-base ${
            statusType === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {statusMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;