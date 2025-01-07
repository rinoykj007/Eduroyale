import React, { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-white/95 to-white/90 rounded-3xl shadow-2xl p-6 backdrop-blur-lg mt-12">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-3">
            Get in Touch
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100/80 text-orange-600 rounded-full text-sm font-medium shadow-sm">
              ✨ Quick Response
            </span>
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100/80 text-orange-600 rounded-full text-sm font-medium shadow-sm">
              🔒 Secure Contact
            </span>
            <span className="px-4 py-1.5 bg-gradient-to-r from-orange-50 to-orange-100/80 text-orange-600 rounded-full text-sm font-medium shadow-sm">
              💬 24/7 Support
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Lottie Animation Container */}
          <div className="w-full lg:w-1/2 relative p-3">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-50 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-50 rounded-full opacity-50 animate-pulse delay-150"></div>
            <DotLottieReact
              src="https://lottie.host/c9b6dd30-6b14-43fa-bca1-afeb6b5ab5df/5juXQ74G3B.lottie"
              loop
              autoplay
              className="w-full h-auto relative z-10 drop-shadow-xl"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 max-w-md relative">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm rounded-2xl p-5 relative z-10 shadow-xl"
            >
              <div className="space-y-3">
                <div className="relative group">
                  <span className="absolute left-3.5 top-3 text-lg group-hover:scale-110 transition-transform duration-300">
                    👤
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-11 py-2.5 bg-white/80 rounded-xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-200 transition-all duration-300 hover:shadow-lg shadow-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="relative group">
                  <span className="absolute left-3.5 top-3 text-lg group-hover:scale-110 transition-transform duration-300">
                    ✉️
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-11 py-2.5 bg-white/80 rounded-xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-200 transition-all duration-300 hover:shadow-lg shadow-sm"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="relative group">
                  <span className="absolute left-3.5 top-3 text-lg group-hover:scale-110 transition-transform duration-300">
                    📱
                  </span>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-11 py-2.5 bg-white/80 rounded-xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-200 transition-all duration-300 hover:shadow-lg shadow-sm"
                    placeholder="Your Mobile Number"
                    required
                  />
                </div>

                <div className="relative group">
                  <span className="absolute left-3.5 top-3 text-lg group-hover:scale-110 transition-transform duration-300">
                    💭
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-11 py-2.5 bg-white/80 rounded-xl border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-200 transition-all duration-300 hover:shadow-lg shadow-sm resize-none"
                    placeholder="Your Message"
                    rows={2}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-6 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white text-base font-bold rounded-xl transform hover:-translate-y-0.5 transition-all duration-300 group relative z-10"
              >
                Send Message
                <span className="ml-2 group-hover:animate-bounce">✨</span>
              </button>
              <p className="text-center text-xs text-gray-500 mt-3">
                We'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
