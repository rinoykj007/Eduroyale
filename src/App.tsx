import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactForm from "./components/pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ExpertCounseling from "./pages/services/ExpertCounseling";
import CourseSelection from "./pages/services/CourseSelection";
import CountrySelection from "./pages/services/CountrySelection";
import BankLoan from "./pages/services/BankLoan";
import VisaGuidance from "./pages/services/VisaGuidance";
import PostVisaAssistance from "./pages/services/PostVisaAssistance";
import TravelAssistance from "./pages/services/TravelAssistance";
import FreeIeltsTraining from "./pages/services/FreeIeltsTraining";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Placeholder components

const FAQ = () => <h1>FAQs</h1>;

const Services = () => (
  <div>
    <h1>Services</h1>
    <ul>
      <li>Counseling</li>
      <li>University Selection</li>
      <li>Application Assistance</li>
      <li>Visa Guidance</li>
    </ul>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route
              path="/services/expert-counseling"
              element={<ExpertCounseling />}
            />
            <Route
              path="/services/course-selection"
              element={<CourseSelection />}
            />
            <Route
              path="/services/country-selection"
              element={<CountrySelection />}
            />
            <Route path="/services/bank-loan" element={<BankLoan />} />
            <Route path="/services/visa-guidance" element={<VisaGuidance />} />
            <Route
              path="/services/post-visa-assistance"
              element={<PostVisaAssistance />}
            />
            <Route
              path="/services/travel-assistance"
              element={<TravelAssistance />}
            />
            <Route
              path="/services/free-ielts-training"
              element={<FreeIeltsTraining />}
            />
            <Route path="/services/*" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
