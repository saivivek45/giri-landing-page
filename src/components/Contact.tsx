import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Please fill in all fields!");
      return;
    }
    alert("Message sent successfully (mock)!");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <p className="text-sm text-gray-400 mb-6 text-center">
          Have questions about GiRi? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white/90 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded bg-white/90 text-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-sm font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
