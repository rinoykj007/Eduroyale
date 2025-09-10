import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    variableWidth: false,
    swipeToSlide: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          speed: 7000,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          speed: 6000,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          speed: 5000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          speed: 4000,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          speed: 3500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          speed: 3000,
        },
      },
    ],
  };

  const universities = [
    {
      id: 1,
      name: "Trinity College Dublin",
      logo_url: "https://www.tcd.ie/media/tcd/site-assets/images/tcd-logo.png",
    },
    {
      id: 2,
      name: "University College Dublin",
      logo_url: "https://www.ucd.ie/t4cms/ucdmaincore_logo.png",
    },
    {
      id: 3,
      name: "University College Cork",
      logo_url:
        "https://www.ucc.ie/en/media/2017siteassets/images/ucc_logo_irish.svg",
    },
    {
      id: 4,
      name: "National University of Ireland Galway",
      logo_url: "https://www.universityofgalway.ie/cdn/images/2022/logo.png",
    },
    {
      id: 5,
      name: "University of Limerick",
      logo_url: "https://www.ul.ie/themes/custom/ul/logo.svg",
    },
    {
      id: 6,
      name: "Dublin City University",
      logo_url: "https://www.dcu.ie/sites/default/files/dcu_logo_web_0.png",
    },
    {
      id: 7,
      name: "National University of Ireland Maynooth",
      logo_url:
        "https://www.maynoothuniversity.ie/sites/all/themes/nuim_themes/nuim/logo_old_2.png",
    },
    {
      id: 8,
      name: "Royal College of Surgeons in Ireland",
      logo_url: "https://www.rcsi.com/assets/images/logos/logo-uni.svg",
    },
    {
      id: 9,
      name: "Technological University Dublin",
      logo_url: "https://www.tudublin.ie/media/images/tu-dublin-logo.png",
    },
    {
      id: 10,
      name: "Cork Institute of Technology",
      logo_url: "https://www.cit.ie/images/layout/logo.svg",
    },
    {
      id: 11,
      name: "Dundalk Institute of Technology",
      logo_url:
        "https://www.atu.ie/app/themes/atu-theme/assets/main/img/layout/logo-full-accent.svg",
    },
    {
      id: 12,
      name: "Limerick Institute of Technology",
      logo_url:
        "https://tus.ie/app/themes/app-theme/assets//main/img/layout/logo.svg",
    },
    {
      id: 13,
      name: "Waterford Institute of Technology",
      logo_url: "https://www.setu.ie/img/logos/setu-logo-dark.svg",
    },
    {
      id: 14,
      name: "Galway-Mayo Institute of Technology",
      logo_url:
        "https://www.atu.ie/app/themes/atu-theme/assets/main/img/layout/logo-full-accent.svg",
    },
    {
      id: 15,
      name: "Institute of Technology Sligo",
      logo_url:
        "https://www.atu.ie/app/themes/atu-theme/assets/main/img/layout/logo-full-accent.svg",
    },
    {
      id: 16,
      name: "Griffith College Dublin",
      logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Griffith_College_Ireland_logo.jpg",
    },
    {
      id: 17,
      name: "National College of Ireland",
      logo_url:
        "https://studentsurvey.ie/sites/default/files/2019-10/NCI%20logoresized.png",
    },
    {
      id: 18,
      name: "Dublin Institute of Technology",
      logo_url:
        "https://upload.wikimedia.org/wikipedia/commons/2/2e/DIT_University_Dehradun_Logo.jpg",
    },
    {
      id: 19,
      name: "National College of Art and Design",
      logo_url:
        "https://www.ncad.ie/images/gallery_event/NCAD_logos-02cropped.jpg",
    },
    {
      id: 20,
      name: "Technological University of the Shannon",
      logo_url:
        "https://tus.ie/app/themes/app-theme/assets//main/img/layout/logo.svg",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="w-full bg-white p-5 rounded-lg font-outfit tracking-tight text-3xl font-extrabold leading-snug text-center mb-8 shadow-md transition-all duration-300">
        <span className="bg-gradient-to-br from-amber-500 to-red-500 bg-clip-text text-transparent">
          Our Partner Universities
        </span>
      </div>
      <Slider {...settings} className="custom-slider w-full">
        {universities.map((university) => (
          <div key={university.id} className="px-3">
            <div className="flex items-center justify-center min-h-[150px] py-4">
              <img
                src={university.logo_url}
                alt={`${university.name} logo`}
                className="w-[120px] h-[120px] object-contain rounded-lg bg-white p-3 shadow-sm border border-gray-100"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
