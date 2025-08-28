import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogAdmin from "./pages/admin/BlogAdmin.jsx";
import Footer from "./components/Footer.jsx";
import Courses from "./pages/Courses.jsx";
import Expert_Counseling from "./pages/Services/Expert_Counseling.jsx";
import CourseSelection from "./pages/Services/CourseSelection.jsx";
import BankLoan from "./pages/Services/Bank_Loan.jsx";
import CountrySelection from "./pages/Services/CountrySelection.jsx";
import TravelAssistance from "./pages/Services/TravelAssistance.jsx";
import VisaGuidance from "./pages/Services/VisaGuidance.jsx";
import PostVisaAssistance from "./pages/Services/PostVisaAssistance.jsx";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin/blog" element={<BlogAdmin />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/services/expert-counseling"
              element={<Expert_Counseling />}
            />
            <Route
              path="/services/course-selection"
              element={<CourseSelection />}
            />
            <Route path="/services/bank-loan" element={<BankLoan />} />
            <Route
              path="/services/country-selection"
              element={<CountrySelection />}
            />
            <Route
              path="/services/travel-assistance"
              element={<TravelAssistance />}
            />
            <Route path="/services/visa-guidance" element={<VisaGuidance />} />
            <Route
              path="/services/post-visa-assistance"
              element={<PostVisaAssistance />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
