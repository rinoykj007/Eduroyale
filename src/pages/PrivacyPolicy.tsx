import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] min-h-screen text-gray-800 font-moderustic">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#3B82F6]/5 to-transparent -top-48 -right-48 blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#60A5FA]/5 to-transparent -bottom-48 -left-48 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 pt-24 pb-16 md:py-24 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This privacy policy explains how
            EDUROYALE collects, uses, and protects your information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </motion.div>

        {/* Privacy Policy Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
        >
          {/* Section 1: Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-gray-600">
              <h3 className="text-lg font-semibold text-gray-700">
                Personal Information
              </h3>
              <p>
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Educational background and academic records</li>
                <li>Passport and visa information</li>
                <li>Financial information for loan assistance services</li>
                <li>
                  Any other information you choose to provide through our forms
                  or communications
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">
                Automatically Collected Information
              </h3>
              <p>
                When you visit our website, we may automatically collect certain
                information, including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </div>
          </section>

          {/* Section 2: How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  Provide educational consultation and counseling services
                </li>
                <li>Process university applications and visa documentation</li>
                <li>
                  Communicate with you about our services and your applications
                </li>
                <li>Assist with loan applications and financial planning</li>
                <li>Improve our website and services</li>
                <li>
                  Send you relevant updates about educational opportunities
                </li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              3. Information Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Educational Institutions:</strong> We share necessary
                  information with universities and colleges for application
                  processing
                </li>
                <li>
                  <strong>Government Agencies:</strong> For visa applications
                  and immigration processes
                </li>
                <li>
                  <strong>Financial Partners:</strong> With banks and financial
                  institutions for loan processing (with your consent)
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third parties
                  who assist us in operating our business
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                We do not sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              4. Data Security
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Unauthorized access, use, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or
                electronic storage is 100% secure. While we strive to protect
                your information, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 5: Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              5. Data Retention
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="mt-4">
                Generally, we retain student records for up to 7 years after the
                completion of services, or as required by applicable laws.
              </p>
            </div>
          </section>

          {/* Section 6: Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              6. Your Rights
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>
                  Request deletion of your information (subject to legal
                  requirements)
                </li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing (where applicable)</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </div>
          </section>

          {/* Section 7: Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              7. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We use cookies and similar tracking technologies to enhance your
                browsing experience and analyze website traffic. You can control
                cookie settings through your browser preferences.
              </p>
              <p>Types of cookies we use:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  visitors use our site
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant
                  advertisements
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              8. International Data Transfers
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                As an international education consultancy, your information may
                be transferred to and processed in countries other than India,
                including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Countries where your chosen universities are located</li>
                <li>Countries where our service providers operate</li>
              </ul>
              <p className="mt-4">
                We ensure appropriate safeguards are in place to protect your
                information during international transfers.
              </p>
            </div>
          </section>

          {/* Section 9: Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              9. Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may update this privacy policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of significant changes by:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>
                  Sending you an email notification (if you have provided your
                  email)
                </li>
                <li>Displaying a notice on our website</li>
              </ul>
            </div>
          </section>

          {/* Section 10: Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-100 pb-2">
              10. Contact Us
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                If you have questions about this privacy policy or our data
                practices, please contact us:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">
                  EDUROYALE Overseas Education Consultants
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong> contact@eduroyale.in
                  </p>
                  <p>
                    <strong>Phone:</strong> (+91) 808 660 6605
                  </p>
                  <p>
                    <strong>Kollam Office:</strong>
                  </p>
                  <p className="ml-4">
                    Building No: MIC VIII/1712/666A,
                    <br />
                    Opp: University of Kerala Information Centre,
                    <br />
                    SN College Junction, Kollam, Kerala - 691001
                  </p>
                  <p>
                    <strong>Trivandrum Office:</strong>
                  </p>
                  <p className="ml-4">
                    Building No: XI/1477, Krishna Towers,
                    <br />
                    Near Private Bus stand, Attingal,
                    <br />
                    Trivandrum, Kerala - 695101
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help clarify any concerns you may have about how
            we handle your personal information.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
