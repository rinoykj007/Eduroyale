import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import courseSelectionAnimation from "../../assets/animations/Course_Selection.json";
import WhatsAppButton from "../../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../../config/contact";

const CourseSelection = () => {
  const handleGetStarted = () => {
    const message =
      "Hi, I'm interested in getting guidance for Course Selection. Can you help me choose the right course?";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-b from-white via-[#F7FAFC] to-[#F5F7F4] min-h-screen text-[#2D3748] font-moderustic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 pt-16 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left w-full md:w-1/2 lg:w-5/12 relative z-10 md:pt-12"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium tracking-wide mb-4"
            >
              Expert Course Guidance
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight leading-tight">
              Course Selection
              <span className="block text-blue-600 mt-2">Guidance</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Find the perfect course that aligns with your career goals and
              academic interests with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold text-base border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 lg:w-6/12 relative md:pt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-white/20 to-purple-100/60 rounded-3xl blur-2xl"></div>
            <div className="relative w-full">
              <Lottie
                animationData={courseSelectionAnimation}
                loop={true}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
                className="drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 sm:mt-24">
          {[
            {
              title: "Course Analysis",
              description:
                "In-depth analysis of various courses and their career prospects.",
              icon: "📊",
              bgColor: "rgb(255, 240, 245)", // Lighter pink
            },
            {
              title: "Industry Insights",
              description:
                "Latest trends and demands in different industries globally.",
              icon: "🌐",
              bgColor: "rgb(240, 247, 255)", // Lighter blue
            },
            {
              title: "Curriculum Review",
              description:
                "Detailed review of course curriculum and specializations.",
              icon: "📚",
              bgColor: "rgb(240, 253, 244)", // Lighter green
            },
            {
              title: "Career Mapping",
              description:
                "Mapping courses to potential career paths and opportunities.",
              icon: "🗺️",
              bgColor: "rgb(255, 218, 185)", // Peach
            },
            {
              title: "ROI Assessment",
              description:
                "Evaluation of course value and return on investment.",
              icon: "💰",
              bgColor: "rgb(176, 224, 230)", // Powder Blue
            },
            {
              title: "Future Prospects",
              description:
                "Analysis of future growth opportunities in chosen field.",
              icon: "📈",
              bgColor: "rgb(255, 240, 245)", // Lavender Blush
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg backdrop-blur-sm hover:bg-white/95"
              style={{
                backgroundColor: feature.bgColor,
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <motion.div
                className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Popular Courses Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-24"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
            Popular Course Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Engineering & Technology",
                courses: [
                  "Computer Science",
                  "Data Science",
                  "AI & Machine Learning",
                  "Cybersecurity",
                ],
                bgColor: "rgb(255, 240, 245)", // Lighter pink
              },
              {
                title: "Business & Management",
                courses: [
                  "MBA",
                  "Finance",
                  "Marketing",
                  "International Business",
                ],
                bgColor: "rgb(240, 247, 255)", // Lighter blue
              },
              {
                title: "Health Sciences",
                courses: [
                  "Medicine",
                  "Nursing",
                  "Public Health",
                  "Biotechnology",
                ],
                bgColor: "rgb(240, 253, 244)", // Lighter green
              },
              {
                title: "Arts & Design",
                courses: [
                  "Digital Design",
                  "Animation",
                  "Fashion Design",
                  "Interior Design",
                ],
                bgColor: "rgb(255, 218, 185)", // Peach
              },
              {
                title: "Social Sciences",
                courses: [
                  "Psychology",
                  "International Relations",
                  "Media Studies",
                  "Education",
                ],
                bgColor: "rgb(176, 224, 230)", // Powder Blue
              },
              {
                title: "Natural Sciences",
                courses: [
                  "Environmental Science",
                  "Physics",
                  "Chemistry",
                  "Biology",
                ],
                bgColor: "rgb(255, 240, 245)", // Lavender Blush
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg backdrop-blur-sm hover:bg-white/95"
                style={{
                  backgroundColor: category.bgColor,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.courses.map((course, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 flex items-center text-base group-hover:text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2.5"></span>
                      {course}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-24"
        >
          <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-lg rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Need Help Choosing the Right Course?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get personalized course recommendations based on your interests,
              skills, and career goals.
            </p>
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Course Recommendations
            </button>
          </div>
        </motion.div>
      </div>
      <WhatsAppButton
        phoneNumber={WHATSAPP_NUMBER}
        message="📖 Hi, I need help with Course Selection. Can you guide me through the options available?"
      />
    </div>
  );
};

export default CourseSelection;
