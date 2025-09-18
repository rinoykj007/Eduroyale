import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";
import trainingAnimation from "../../assets/animations/Training.json";

const FreeIeltsTraining = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800 font-moderustic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6.5rem] sm:pt-16 pb-12 sm:pb-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Free IELTS Training
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Unlock your potential with our comprehensive IELTS preparation
                program. Expert guidance to achieve your target score.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Start Learning Now
              </a>
              <button className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg text-gray-700 bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-6 scale-95 opacity-30 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden h-full">
              <Lottie
                animationData={trainingAnimation}
                className="w-full h-full"
                loop={true}
                autoplay={true}
                rendererSettings={{
                  preserveAspectRatio: "xMidYMid slice",
                  progressiveLoad: true,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* IELTS Modules */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-24"
        >
          {[
            {
              title: "Listening",
              description:
                "Master listening strategies for different question types",
              icon: "🎧",
            },
            {
              title: "Reading",
              description: "Develop speed reading and comprehension skills",
              icon: "📚",
            },
            {
              title: "Writing",
              description: "Learn to write effective essays and reports",
              icon: "✍️",
            },
            {
              title: "Speaking",
              description: "Build confidence in English conversation",
              icon: "🗣️",
            },
          ].map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-white/95 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2B6CB0]">
                {module.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-16 sm:mt-24"
        >
          {[
            {
              title: "Expert Trainers",
              description:
                "Learn from experienced IELTS trainers with proven track record",
              icon: "👨‍🏫",
            },
            {
              title: "Practice Tests",
              description:
                "Regular mock tests with detailed feedback and analysis",
              icon: "📝",
            },
            {
              title: "Study Materials",
              description:
                "Comprehensive study materials and practice resources",
              icon: "📖",
            },
            {
              title: "Small Batches",
              description: "Personal attention in small group sessions",
              icon: "👥",
            },
            {
              title: "Flexible Schedule",
              description: "Choose from multiple batch timings",
              icon: "🕒",
            },
            {
              title: "Progress Tracking",
              description: "Regular assessment and progress monitoring",
              icon: "📊",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-white/95 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2B6CB0]">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Study Plan */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#2B6CB0] via-[#3182CE] to-[#4299E1] leading-tight">
            Training Schedule
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                week: "Week 1-2",
                focus: "Fundamentals",
                activities: [
                  "Basic strategies",
                  "Grammar review",
                  "Vocabulary building",
                ],
              },
              {
                week: "Week 3-4",
                focus: "Skills Development",
                activities: [
                  "Reading techniques",
                  "Listening practice",
                  "Writing structure",
                ],
              },
              {
                week: "Week 5-6",
                focus: "Advanced Practice",
                activities: [
                  "Mock tests",
                  "Speaking practice",
                  "Time management",
                ],
              },
              {
                week: "Week 7-8",
                focus: "Test Preparation",
                activities: [
                  "Full length tests",
                  "Error analysis",
                  "Final preparation",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-12 hover:bg-white/95 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2B6CB0] leading-tight">
                  {phase.week}
                </h3>
                <div className="text-[#3182CE] font-medium mb-4">
                  {phase.focus}
                </div>
                <ul className="space-y-3">
                  {phase.activities.map((activity, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 flex items-center leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-[#3182CE] rounded-full mr-2 flex-shrink-0"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#2B6CB0] via-[#3182CE] to-[#4299E1] leading-tight">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Sarah Johnson",
                score: "8.5",
                quote:
                  "The structured approach and regular practice tests helped me achieve my target score.",
              },
              {
                name: "Michael Chen",
                score: "8.0",
                quote:
                  "Expert guidance and personalized feedback made a huge difference in my preparation.",
              },
              {
                name: "Priya Patel",
                score: "7.5",
                quote:
                  "The speaking practice sessions boosted my confidence significantly.",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 hover:bg-white/95 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="text-2xl font-bold text-[#3182CE] mb-2">
                  Band {story.score}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#2B6CB0]">
                  {story.name}
                </h3>
                <p className="text-gray-600 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-24"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-xl p-4 sm:p-6 lg:p-12 hover:bg-white/95 transition-all duration-300 shadow-sm hover:shadow-md">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B6CB0] via-[#3182CE] to-[#4299E1] leading-tight">
              Start Your IELTS Preparation Today
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our free IELTS training program and take the first step
              towards achieving your target score.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3182CE] text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[#2B6CB0] transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Enroll Now
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <WhatsAppButton
          phoneNumber={WHATSAPP_NUMBER}
          message="📚 Hi, I'm interested in free IELTS training!"
        />
      </div>
    </div>
  );
};

export default FreeIeltsTraining;
