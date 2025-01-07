import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../config/contact";
import { GB, US, CA, AU, NZ, IE } from "country-flag-icons/react/3x2";

const Courses = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [selectedCountry]);

  const countries = [
    { id: "all", name: "All Countries" },
    { id: "uk", name: "United Kingdom", Flag: GB },
    { id: "usa", name: "United States", Flag: US },
    { id: "canada", name: "Canada", Flag: CA },
    { id: "australia", name: "Australia", Flag: AU },
    { id: "newzealand", name: "New Zealand", Flag: NZ },
    { id: "ireland", name: "Ireland", Flag: IE },
  ];

  const s = [
    // UK s with temporary CDN-hosted logos
    {
      id: 1,
      name: "Birmingham City University",
      country: "uk",
      ranking: "Top 100 UK s",
      location: "Birmingham, England",
      image:
        "https://lh3.googleusercontent.com/places/AJQcZqLCzMYoiQIwm82Ua4lrjlUe78SCwBkjxSBG7WuW-MlgbFPW-vWy3P0MUHa6nz_jJq1B6yZs71Vty0bRMwBuec9RAd7Du7_xPg=s1600-w480",
      programs: [
        "Business",
        "Computing and Technology",
        "Engineering",
        "Arts and Design",
        "Health Sciences",
      ],
      features: [
        "Modern city-center campus",
        "Industry partnerships",
        "Practice-based learning",
        "Strong employability focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 2,
      name: "Nottingham Trent University",
      country: "uk",
      ranking: "Top 50 UK s",
      location: "Nottingham, England",
      image:
        "https://www.ntu.ac.uk/__data/assets/image/0038/866873/240918_5126-1.jpg",
      programs: [
        "Business and Management",
        "Art and Design",
        "Engineering",
        "Computing and Technology",
        "Social Sciences",
      ],
      features: [
        "Award-winning teaching",
        "Modern facilities",
        "Strong industry connections",
        "Excellent student satisfaction",
      ],
      tuitionRange: "£15,000 - £17,000",
      intakeMonths: ["September", "January"],
    },
    {
      id: 3,
      name: "University of Greenwich",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://www.gre.ac.uk/__data/assets/image/0023/270428/varieties/v800.jpg",
      programs: [
        "Business",
        "Engineering",
        "Computing",
        "Architecture",
        "Health Sciences",
      ],
      features: [
        "Historic London campus",
        "Research excellence",
        "Industry partnerships",
        "International focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 4,
      name: "University of Sunderland",
      country: "uk",
      ranking: "Top Modern University",
      location: "Sunderland, England",
      image:
        "https://th.bing.com/th/id/R.1975b6dabc752f4dfbddf2129a9e56cf?rik=avEB42ZtaSebjw&riu=http%3a%2f%2f3.bp.blogspot.com%2f_JugX5DFw1so%2fTE-LGpMf4rI%2fAAAAAAAAACs%2fsyVPWdsBPYc%2fs1600%2fUniversity%2bOf%2bSunderland.jpg&ehk=gECcSVWUiubJsI8LdJJ%2fV6XdnX2o9FzZEpl3WCXyFFg%3d&risl=&pid=ImgRaw&r=0",
      programs: [
        "Business and Management",
        "Engineering",
        "Computing",
        "Health Sciences",
        "Education",
      ],
      features: [
        "Two modern campuses",
        "Strong industry links",
        "Excellent student support",
        "Research-led teaching",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 5,
      name: "London South Bank University",
      country: "uk",
      ranking: "Top London Modern University",
      location: "London, England",
      image:
        "https://bpprodstorage.blob.core.windows.net/bpprodcontainer/1965288/images/4690f0cd-baf3-476b-9687-90eaae021018LSBU-Crest_simple-Colour-text_Horizon_Colour.png",
      programs: [
        "Business",
        "Engineering",
        "Health and Social Care",
        "Built Environment",
        "Applied Sciences",
      ],
      features: [
        "Central London location",
        "Professional accreditations",
        "Industry partnerships",
        "Career-focused education",
      ],
      tuitionRange: "£14,500 - £16,800",
      intakeMonths: ["September", "January"],
    },
    {
      id: 6,
      name: "University of West London",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://i.guim.co.uk/img/media/9893ec569636ee030586f604e459138372da1f79/0_192_5472_3283/master/5472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b6186cd239af4698a9eb3721937d7a72",
      programs: [
        "Business",
        "Computing",
        "Engineering",
        "Healthcare",
        "Hospitality",
      ],
      features: [
        "West London location",
        "Modern facilities",
        "Industry connections",
        "Career support",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January", "May"],
    },
    // More UK s
    {
      id: 17,
      name: "University of Salford",
      country: "uk",
      ranking: "Top Modern University",
      location: "Manchester, England",
      image:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article21564378.ece/ALTERNATES/s810/0_University-of-Salford.png",
      programs: [
        "Engineering",
        "Business",
        "Health Sciences",
        "Media",
        "Built Environment",
      ],
      features: [
        "Industry partnerships",
        "MediaCityUK campus",
        "Modern facilities",
        "Professional focus",
      ],
      tuitionRange: "£14,500 - £16,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 18,
      name: "Sheffield Hallam University",
      country: "uk",
      ranking: "Top Modern University",
      location: "Sheffield, England",
      image:
        "https://c8.alamy.com/comp/E7YNB5/sheffield-hallam-university-campus-building-in-sheffield-south-yorkshire-E7YNB5.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health",
        "Art & Design",
        "Computing",
      ],
      features: [
        "Industry connections",
        "Modern campus",
        "Research excellence",
        "Career support",
      ],
      tuitionRange: "£13,500 - £15,500",
      intakeMonths: ["September", "January"],
    },
    {
      id: 19,
      name: "Plymouth University",
      country: "uk",
      ranking: "Top 50 Modern University",
      location: "Plymouth, England",
      image: "https://smapse.com/storage/2017/10/plymouth-university-12.jpg",
      programs: [
        "Marine Sciences",
        "Engineering",
        "Business",
        "Health",
        "Arts",
      ],
      features: [
        "Coastal location",
        "Research excellence",
        "Modern facilities",
        "Industry links",
      ],
      tuitionRange: "£13,000 - £15,000",
      intakeMonths: ["September", "January"],
    },
    // Additional UK s
    {
      id: 27,
      name: "University of Edinburgh",
      country: "uk",
      ranking: "Top Russell Group University",
      location: "Edinburgh, Scotland",
      image:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2020/03/old-college-university-of-edinburgh-wikipedia.jpg",
      programs: [
        "Medicine",
        "Engineering",
        "Business",
        "Arts & Humanities",
        "Sciences",
      ],
      features: [
        "World-renowned research",
        "Historic campus",
        "Global reputation",
        "Modern facilities",
      ],
      tuitionRange: "£22,000 - £32,000",
      intakeMonths: ["September"],
    },
    {
      id: 28,
      name: "Middlesex University",
      country: "uk",
      ranking: "Top Modern University",
      location: "London, England",
      image:
        "https://scontent-doh1-1.xx.fbcdn.net/v/t39.30808-6/320047292_1129983391023076_9201793394579130779_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=947md2pzUr0Q7kNvgEpvgu_&_nc_zt=23&_nc_ht=scontent-doh1-1.xx&_nc_gid=Ap9b5RLTCYxch_pZNJC-lsy&oh=00_AYCd8HhhS7OZ-ibSvC9qRmOoJL461iC_qxtcuNUtqebSQw&oe=677982C2",
      programs: ["Business", "Art & Design", "Health", "Computing", "Law"],
      features: [
        "London location",
        "Modern campus",
        "Industry links",
        "Global focus",
      ],
      tuitionRange: "£14,000 - £16,000",
      intakeMonths: ["September", "January"],
    },
    // USA s
    {
      id: 7,
      name: "Harvard University",
      country: "usa",
      ranking: "#1 World Ranking",
      location: "Cambridge, Massachusetts",
      image:
        "https://logos-world.net/wp-content/uploads/2020/12/Harvard-Emblem.png",
      programs: ["Business", "Law", "Medicine", "Arts & Sciences"],
      features: [
        "Ivy League institution",
        "World-class faculty",
        "Extensive research opportunities",
        "Strong alumni network",
      ],
      tuitionRange: "$49,000 - $55,000",
      intakeMonths: ["August"],
    },
    {
      id: 8,
      name: "Stanford University",
      country: "usa",
      ranking: "#4 World Ranking",
      location: "Stanford, California",
      image:
        "https://www.stanford.edu/wp-content/uploads/2023/10/Hero-3-2-1536x1022.jpg",
      programs: ["Computer Science", "Engineering", "Business", "Medicine"],
      features: [
        "Silicon Valley location",
        "Innovation hub",
        "Research excellence",
        "Entrepreneurial spirit",
      ],
      tuitionRange: "$52,000 - $57,000",
      intakeMonths: ["September"],
    },
    // Canadian s
    {
      id: 9,
      name: "George Brown College",
      country: "canada",
      ranking: "Top Ontario College",
      location: "Toronto, Ontario",
      image: "https://smapse.com/storage/2019/03/george-brown-college-28.jpg",
      programs: [
        "Business",
        "Technology",
        "Health Sciences",
        "Hospitality",
        "Construction Management",
      ],
      features: [
        "Downtown Toronto location",
        "Industry partnerships",
        "Co-op opportunities",
        "Career-focused programs",
      ],
      tuitionRange: "CAD 16,000 - 19,000",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 10,
      name: "Seneca College",
      country: "canada",
      ranking: "Leading Canadian College",
      location: "Toronto, Ontario",
      image:
        "https://polytechnicscanada.ca/wp-content/uploads/2021/02/Seneca-4.png",
      programs: [
        "Business",
        "Information Technology",
        "Engineering",
        "Aviation",
        "Creative Arts",
      ],
      features: [
        "Multiple campuses",
        "Industry connections",
        "Applied learning",
        "Career services",
      ],
      tuitionRange: "CAD 15,000 - 18,500",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 11,
      name: "Humber College",
      country: "canada",
      ranking: "Top GTA College",
      location: "Toronto, Ontario",
      image:
        "https://www.meridean.org/img/university/1659771458FKxF2qhWUAMELf4.jpg",
      programs: [
        "Business",
        "Media Studies",
        "Engineering",
        "Health Sciences",
        "Hospitality",
      ],
      features: [
        "Practical learning",
        "Industry partnerships",
        "Modern facilities",
        "Student support",
      ],
      tuitionRange: "CAD 16,500 - 19,500",
      intakeMonths: ["September", "January"],
    },
    // More Canadian s
    {
      id: 22,
      name: "Fanshawe College",
      country: "canada",
      ranking: "Top Ontario College",
      location: "London, Ontario",
      image:
        "https://2.bp.blogspot.com/-0dotmH6vhUo/VyxfwViDUqI/AAAAAAAAACw/Q2VYGYj5tHAmidDANQjTGIJyz2pX4m1HwCLcB/w1200-h630-p-k-no-nu/fanshawe-college-.jpg",
      programs: [
        "Business",
        "Technology",
        "Health Sciences",
        "Media",
        "Aviation",
      ],
      features: [
        "Industry partnerships",
        "Modern facilities",
        "Co-op programs",
        "Career support",
      ],
      tuitionRange: "CAD 15,000 - 18,000",
      intakeMonths: ["September", "January", "May"],
    },
    {
      id: 23,
      name: "Conestoga College",
      country: "canada",
      ranking: "Leading Ontario College",
      location: "Kitchener, Ontario",
      image:
        "https://www.easyuni.com/media/institution/photo/2019/10/16/conestoga-college-waterloo-campus.jpg",
      programs: ["Engineering", "Business", "Health", "IT", "Trades"],
      features: [
        "Industry connections",
        "Modern facilities",
        "Co-op opportunities",
        "Career services",
      ],
      tuitionRange: "CAD 14,500 - 17,500",
      intakeMonths: ["September", "January", "May"],
    },
    // Irish s
    {
      id: 13,
      name: "Dublin City University (DCU)",
      country: "ireland",
      ranking: "Top Young University",
      location: "Dublin, Ireland",
      image:
        "https://www.theworld100.com/wp-content/uploads/2015/01/university-college-dublin.jpg",
      programs: [
        "Business Studies",
        "Computing",
        "Engineering",
        "Communications",
        "Education",
      ],
      features: [
        "Industry focused",
        "Innovation hub",
        "Strong placement programs",
        "Modern facilities",
      ],
      tuitionRange: "€13,500 - €23,000",
      intakeMonths: ["September", "January"],
    },
    // More Irish s
    {
      id: 20,
      name: "University College Cork",
      country: "ireland",
      ranking: "Top Irish University",
      location: "Cork, Ireland",
      image:
        "https://2.bp.blogspot.com/-tSGrSdta6fQ/Tn0zr_Y7i6I/AAAAAAAAAuM/4sAB7BWW250/s1600/UniColCork+1.jpg",
      programs: ["Business", "Engineering", "Medicine", "Arts", "Law"],
      features: [
        "Historic campus",
        "Research excellence",
        "Student support",
        "Modern facilities",
      ],
      tuitionRange: "€14,000 - €23,000",
      intakeMonths: ["September"],
    },
    {
      id: 21,
      name: "University of Limerick",
      country: "ireland",
      ranking: "Top Modern University",
      location: "Limerick, Ireland",
      image:
        "https://www.irlandaegitimrehberi.com/wp-content/uploads/2022/03/LIMERICK.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health Sciences",
        "Education",
        "Science",
      ],
      features: [
        "Modern campus",
        "Industry links",
        "Co-op program",
        "Sports facilities",
      ],
      tuitionRange: "€13,500 - €22,000",
      intakeMonths: ["September", "January"],
    },
    // New Zealand s
    {
      id: 14,
      name: "Auckland University of Technology",
      country: "newzealand",
      ranking: "Top NZ University",
      location: "Auckland, New Zealand",
      image:
        "https://suneducationgroup.com/wp-content/uploads/2016/02/Institusi-AUT-paling-internasional-NZ-Kampus-0.jpg",
      programs: [
        "Business",
        "Engineering",
        "Health Sciences",
        "Creative Technologies",
        "Hospitality",
      ],
      features: [
        "Industry focused",
        "Research excellence",
        "Modern facilities",
        "City campus",
      ],
      tuitionRange: "NZD 28,000 - 38,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 15,
      name: "Unitec Institute of Technology",
      country: "newzealand",
      ranking: "Leading NZ Institute",
      location: "Auckland, New Zealand",
      image:
        "https://amarebe.com/wp-content/uploads/2021/01/unitec-institute-of-technology.png",
      programs: [
        "Construction",
        "Engineering",
        "Computing",
        "Healthcare",
        "Business",
      ],
      features: [
        "Practical learning",
        "Industry connections",
        "Modern campus",
        "Student support",
      ],
      tuitionRange: "NZD 22,000 - 32,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 16,
      name: "Manukau Institute of Technology",
      country: "newzealand",
      ranking: "Top Technical Institute",
      location: "Auckland, New Zealand",
      image:
        "https://greatnationnz.com/wp-content/uploads/2018/11/Manukau-Institute-of-Technology-New-Zealand-optimized-f.jpg",
      programs: [
        "Engineering",
        "Digital Technologies",
        "Business",
        "Health Studies",
        "Maritime Studies",
      ],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Career support",
      ],
      tuitionRange: "NZD 20,000 - 30,000",
      intakeMonths: ["February", "July"],
    },
    // More New Zealand s
    {
      id: 24,
      name: "Wellington Institute of Technology",
      country: "newzealand",
      ranking: "Leading Technical Institute",
      location: "Wellington, New Zealand",
      image:
        "https://www.chooseright.org/wp-content/uploads/2014/04/Wellington-Institute-of-Technology-500x367.jpg",
      programs: [
        "Engineering",
        "IT",
        "Business",
        "Creative Technologies",
        "Health",
      ],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Student support",
      ],
      tuitionRange: "NZD 21,000 - 31,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 25,
      name: "Ara Institute of Canterbury",
      country: "newzealand",
      ranking: "Top Technical Institute",
      location: "Christchurch, New Zealand",
      image:
        "https://media.studylink.com/provider/ara-institute-of-canterbury/profile.jpg",
      programs: [
        "Engineering",
        "Business",
        "Hospitality",
        "Creative Industries",
        "Health",
      ],
      features: [
        "Industry connections",
        "Modern facilities",
        "Practical learning",
        "Student support",
      ],
      tuitionRange: "NZD 20,000 - 30,000",
      intakeMonths: ["February", "July"],
    },
    {
      id: 26,
      name: "Whitireia",
      country: "newzealand",
      ranking: "Leading Institute",
      location: "Wellington, New Zealand",
      image:
        "https://www.jeduka.com/storage/school_image/2/whitireia-new-zealand.jpg",
      programs: ["Health", "IT", "Business", "Creative Arts", "Hospitality"],
      features: [
        "Industry focused",
        "Practical training",
        "Modern facilities",
        "Career support",
      ],
      tuitionRange: "NZD 19,000 - 29,000",
      intakeMonths: ["February", "July"],
    },
  ];

  const filtereds =
    selectedCountry === "all"
      ? s
      : s.filter((uni) => uni.country === selectedCountry);

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] min-h-screen text-gray-800 font-moderustic">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#3B82F6]/5 to-transparent -top-48 -right-48 blur-3xl animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#60A5FA]/5 to-transparent -bottom-48 -left-48 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <main className="relative px-4 pt-24 pb-16 md:py-24 max-w-7xl mx-auto">
        {/* Header with Filter */}
        <div className="text-center mb-8 md:mb-16 space-y-4 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
              Partner Universities
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Explore our network of prestigious universities across the globe.
              We partner with top-ranked institutions to provide you with the
              best educational opportunities.
            </p>
          </motion.div>
        </div>

        {/* Country Filter with Animations */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {countries.map((country) => (
              <motion.button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCountry === country.id
                    ? "bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-[#3B82F6]/30"
                }`}
              >
                {country.Flag && (
                  <span className="w-6 h-4">
                    <country.Flag className="w-full h-full object-cover rounded-sm" />
                  </span>
                )}
                {country.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Universities Grid with Loading State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading Skeleton
            [...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden animate-pulse"
              >
                <div className="h-52 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 bg-gray-200 rounded w-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : filtereds.length === 0 ? (
            // No Results State
            <div className="col-span-full text-center py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="text-6xl">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  No universities found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters
                </p>
              </motion.div>
            </div>
          ) : (
            // University Cards
            filtereds.map((university, idx) => (
              <motion.div
                key={university.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: Math.min(idx * 0.1, 0.3),
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-2xl overflow-hidden group hover:bg-gray-50 border border-gray-200 hover:border-[#3B82F6]/30 transition-all duration-200 hover:shadow-lg flex flex-col"
              >
                {/* University Image with Overlay */}
                <div className="relative h-52 shrink-0 overflow-hidden bg-gray-100">
                  <img
                    src={university.image}
                    alt={university.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-university.jpg"; // Add a placeholder image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <motion.span
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="absolute top-4 right-4 bg-[#2563EB] text-white text-xs font-medium px-4 py-2 rounded-full shadow-md"
                  >
                    {university.ranking}
                  </motion.span>
                </div>

                {/* University Content with Improved Layout */}
                <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2">
                        {university.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        {(() => {
                          const countryData = countries.find(
                            (c) => c.id === university.country
                          );
                          if (countryData?.Flag) {
                            const FlagComponent = countryData.Flag;
                            return (
                              <span className="w-6 h-4">
                                <FlagComponent className="w-full h-full object-cover rounded-sm" />
                              </span>
                            );
                          }
                          return null;
                        })()}
                        {university.location}
                      </p>
                    </div>

                    {/* Programs with Hover Effects */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Popular Programs
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {university.programs.map((program, index) => (
                          <motion.span
                            key={index}
                            whileHover={{
                              scale: 1.05,
                              transition: { duration: 0.2 },
                            }}
                            className="text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:text-[#2563EB] transition-colors cursor-pointer border border-gray-200"
                          >
                            {program}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features with Icons */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-3">
                        {university.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            className="flex items-center text-sm text-gray-600 hover:text-[#2563EB] transition-colors"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#3B82F6] mr-2"></span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Additional Info with Better Visual Hierarchy */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-700 mb-1">
                          Tuition Range
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          {university.tuitionRange}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-700 mb-1">
                          Intake Months
                        </h4>
                        <p className="text-sm text-gray-600">
                          {university.intakeMonths.join(", ")}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-medium py-2.5 rounded-lg hover:shadow-md transition-all"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 relative overflow-hidden group border border-gray-200 hover:border-[#3B82F6]/30 hover:shadow-lg transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6]">
                Start Your International Education Journey
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get expert guidance on university selection, application
                process, and visa requirements. Schedule a free consultation
                with our education advisors.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Book Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
        <WhatsAppButton
          phoneNumber={WHATSAPP_NUMBER}
          message="Hi, I'm interested in learning more about your courses!"
        />
      </main>
    </div>
  );
};

export default Courses;
