import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <section className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Have questions or want to join? Reach out to us!
        </p>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;