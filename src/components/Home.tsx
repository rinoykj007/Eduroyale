import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import Services from "./Services";
import CardSelection from "./CardSelection";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCarousel from "./TestimonialCarousel";
import ImageCarousel from "./ImageCarousel";

const Home = () => {
  // Make sure this testimonials array is defined
  const testimonials = [
    {
      text: " I’m incredibly grateful to the entire team at Eduroyale for their exceptional support and guidance throughout my journey to study abroad. From the very beginning, they made the process smooth, transparent, and stress-free. A special mention to Maya, Sanuja, Cerina, and Sumesh Sir – your constant support, prompt responses, and genuine care truly made a difference. Whether it was choosing the right course, handling documentation, or preparing for the visa process, your assistance was spot on at every stage. Thank you once again! 🌍✈📚",
      name: "ASHWIN GIRISH",
      university: "MAYNOOTH UNIVERSITY",
      image:
        "https://image2url.com/images/1760544000533-dcf45161-2e68-4a20-a827-fe6d45b74372.jpg",
    },
    {
      text: "It was a wonderful experience with the Eduroyale and the staffs were caring and very supportive due to which I got admission in TUS in Ireland. It's been 6 months now and I am very glad for the support and trust they had in me.",
      name: "NITESH LEENA",
      university: "TUS, IRELAND",
      image:
        "https://image2url.com/images/1760544259444-e571ff49-05bd-43c2-b8da-f7237c403198.jpg",
    },
    {
      text: "This agency is truly genuine and student-focused. They guided me to top-ranked universities with great reputations instead of just random options. Maya’s insights were spot on in finding the right fit, Celeena made the visa process smooth, and Sumesh sir was very supportive before my VFS day. I asked them countless questions, and they were always patient and helpful. A trustworthy team that really cares about students!",
      name: "SIDHARTH",
      university: "UNIVERSITY OF EXETER , UK",
      image:
        "https://image2url.com/images/1760544382932-5975d31e-89e1-43f9-ba06-972a6c5dfc22.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            background: [
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
              "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
              "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="relative z-10 h-full">
          <Carousel />
        </div>
      </section>

      <section className=" w-full">
        <Services />
      </section>

      <section className="w-full">
        <CardSelection />
      </section>

      {/* Testimonials Section */}
      <section className="bg-white w-full">
        <TestimonialCarousel testimonials={testimonials} />
      </section>
      <section className="bg-white w-full pb-2">
        <ImageCarousel />
      </section>
    </div>
  );
};

export default Home;
