import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";
import Lottie from "lottie-react";
import travelAnimation from "../../assets/animations/Travel_Assistance.json";

const TravelAssistance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800 font-moderustic relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 md:pt-32">
        {/* Hero Section with Animation */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block p-2 px-6 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 text-sm md:text-base font-medium mb-6 backdrop-blur-sm border border-blue-100 shadow-sm"
            >
              Student Travel Support
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 leading-tight">
              Travel Assistance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
              Comprehensive travel support for students, making your journey smooth and hassle-free.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 max-w-lg"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
                <Lottie
                  animationData={travelAnimation}
                  loop={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 mt-12">
          {[
            {
              title: "Flight Booking",
              description: "Best deals on student flights with flexible options and 24/7 support",
              icon: "✈️",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: "Travel Insurance",
              description: "Comprehensive travel and health insurance coverage for peace of mind",
              icon: "🛡️",
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              title: "Airport Assistance",
              description: "Professional support at departure and arrival airports worldwide",
              icon: "🛃",
              gradient: "from-purple-500 to-pink-500",
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 transition-all duration-300"></div>
              <div className="relative p-8 flex flex-col items-center text-center z-10">
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className={`text-5xl bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 mt-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl transform -rotate-1 scale-105 blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Ready to Plan Your Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Let us help you plan your travel and ensure a smooth journey to your study destination.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Travel Support
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <WhatsAppButton
        phoneNumber={WHATSAPP_NUMBER}
        message="Hi, I need information about travel assistance services!"
      />
    </div>
  );
};

export default TravelAssistance;
