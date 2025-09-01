import React, { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "../config/contact";
import { FaShare } from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  date: { month: string; day: string; year: string };
  image?: string;
  category: string;
  author: string;
  quote?: string;
  url?: string;
  excerpt?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "IELTS Preparation Tips",
    date: { month: "Jan", day: "05", year: "2024" },
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "IELTS",
    author: "Admin",
  },
  {
    id: 2,
    title: "Top Universities in UK 2024",
    date: { month: "Jan", day: "03", year: "2024" },
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=3552&q=80",
    category: "Study Abroad",
    author: "Admin",
  },
  {
    id: 3,
    title: "Scholarship Opportunities",
    date: { month: "Jan", day: "02", year: "2024" },
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Scholarships",
    author: "Admin",
  },
  {
    id: 4,
    title: "Student Life in Canada",
    date: { month: "Dec", day: "30", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=3431&q=80",
    category: "Student Life",
    author: "Admin",
  },
  {
    id: 5,
    title: "Study Visa Guide 2024",
    date: { month: "Dec", day: "28", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Visa Guide",
    author: "Admin",
  },
  {
    id: 6,
    title: "Quote of the Day",
    date: { month: "Jan", day: "07", year: "2024" },
    quote:
      "Education is not preparation for life; education is life itself. - John Dewey",
    url: "https://google.com",
    category: "Inspiration",
    author: "Admin",
  },
  {
    id: 7,
    title: "Campus Housing Guide",
    date: { month: "Dec", day: "26", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=3372&q=80",
    category: "Accommodation",
    author: "Admin",
  },
  {
    id: 8,
    title: "Part-time Work Guide",
    date: { month: "Dec", day: "24", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=3506&q=80",
    category: "Student Jobs",
    author: "Admin",
  },
  {
    id: 9,
    title: "Healthcare for Students",
    date: { month: "Dec", day: "22", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    category: "Health",
    author: "Admin",
  },
  {
    id: 10,
    title: "Cost of Living Guide",
    date: { month: "Dec", day: "20", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3264&q=80",
    category: "Finance",
    author: "Admin",
  },
  {
    id: 11,
    title: "Cultural Adaptation",
    date: { month: "Dec", day: "18", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Student Life",
    author: "Admin",
  },
  {
    id: 12,
    title: "Quote of the Day",
    date: { month: "Jan", day: "06", year: "2024" },
    quote:
      "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    url: "https://google.com",
    category: "Inspiration",
    author: "Admin",
  },
  {
    id: 13,
    title: "Language Learning Tips",
    date: { month: "Dec", day: "16", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3542&q=80",
    category: "Language",
    author: "Admin",
  },
  {
    id: 14,
    title: "Study in Australia",
    date: { month: "Dec", day: "14", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8219be?ixlib=rb-4.0.3&auto=format&fit=crop&w=3387&q=80",
    category: "Study Abroad",
    author: "Admin",
  },
  {
    id: 15,
    title: "Digital Learning Tools",
    date: { month: "Dec", day: "12", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Technology",
    author: "Admin",
  },
  {
    id: 16,
    title: "Student Banking Guide",
    date: { month: "Dec", day: "10", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=3264&q=80",
    category: "Finance",
    author: "Admin",
  },
  {
    id: 17,
    title: "Mental Health Support",
    date: { month: "Dec", day: "08", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Health",
    author: "Admin",
  },
  {
    id: 18,
    title: "Research Opportunities",
    date: { month: "Dec", day: "06", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3430&q=80",
    category: "Research",
    author: "Admin",
  },
  {
    id: 19,
    title: "Sports in Universities",
    date: { month: "Dec", day: "04", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Campus Life",
    author: "Admin",
  },
  {
    id: 20,
    title: "Internship Programs",
    date: { month: "Dec", day: "02", year: "2023" },
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80",
    category: "Career",
    author: "Admin",
  },
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePostClick = (post: BlogPost, event: React.MouseEvent) => {
    if (post.url) {
      window.open(post.url, "_blank");
      return;
    }
    setSelectedPost(post);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedPost(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 px-4 md:px-5 pt-20 md:pt-24 mb-8 md:mb-10 font-['Oswald']">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={(e) => handlePostClick(post, e)}
            className={`min-h-[300px] md:h-[40vh] bg-white relative
              ${post.id === 5 ? "sm:col-span-2" : ""}
              ${post.id === 7 ? "sm:row-span-2 sm:h-full" : ""}
              ${post.id === 11 ? "sm:col-span-2" : ""}
              ${post.id === 14 ? "sm:row-span-2 sm:h-full" : ""}`}
          >
            {post.quote ? (
              <blockquote
                className="h-full flex items-center justify-center text-lg md:text-2xl p-3 md:p-5 box-border hover:bg-[#ff5722] hover:text-white hover:cursor-pointer"
                data-url={post.url}
              >
                {post.quote}
              </blockquote>
            ) : (
              <figure className="relative h-full group cursor-pointer">
                <div className="absolute z-10 bg-[#f5f5f5] p-[8px_12px] md:p-[10px_16px] text-center group-hover:bg-[#ff5722]">
                  <span className="text-xs md:text-sm font-light">
                    {post.date.month}
                  </span>
                  <span className="text-xl md:text-2xl font-semibold block">
                    {post.date.day}
                  </span>
                  <span className="text-xs md:text-sm font-light text-[#ff5722] group-hover:text-white">
                    {post.date.year}
                  </span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover relative group-hover:brightness-[0.8] transition-[filter] duration-500"
                />
                <figcaption className="absolute bottom-0 bg-gradient-to-t from-black/40 to-transparent w-full p-3 md:p-5 h-[80px] md:h-[90px] box-border text-center text-lg md:text-2xl uppercase text-white shadow-[0px_1px_1px_rgb(0_0_0_/_50%)] transition-[height] duration-200 flex flex-col group-hover:h-[100px] md:group-hover:h-[110px]">
                  <span className="line-clamp-2">{post.title}</span>
                  <span className="text-xs md:text-sm normal-case font-light mt-1">
                    By {post.author} | {post.category}
                  </span>
                </figcaption>
              </figure>
            )}
          </article>
        ))}
      </div>

      {isPopupVisible && selectedPost && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-[999]"
            onClick={closePopup}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-4/5 max-w-[500px] p-4 md:p-5 bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.3)] z-[1000] transition-[top,left] duration-300 max-h-[90vh] overflow-y-auto rounded-lg">
            <button
              className="absolute -right-[5px] -top-[38px] text-white text-3xl"
              onClick={closePopup}
              aria-label="close"
            >
              ×
            </button>
            <div className="popup-content">
              {selectedPost.image && (
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="max-w-full h-[200px] md:h-[362px] mb-5 mx-auto flex object-cover"
                />
              )}

              <div className="text-xl md:text-2xl font-['Oswald'] inline-block">
                {selectedPost.title}
              </div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-4 gap-3">
                <div className="flex flex-col md:flex-row md:gap-2">
                  <div className="dt-popup text-sm md:text-base">{`${selectedPost.date.month} ${selectedPost.date.day} ${selectedPost.date.year}`}</div>
                  <div className="text-sm md:text-base">
                    By {selectedPost.author} | {selectedPost.category}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const message = `Hi, I'd like to know more about the article: "${selectedPost.title}"`;
                    const encodedMessage = encodeURIComponent(message);
                    window.open(
                      `https://api.whatsapp.com/send?text=${encodedMessage}`,
                      "_blank"
                    );
                  }}
                  className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-300 w-auto"
                >
                  <FaShare className="text-sm" />
                </button>
              </div>

              <p className="font-['Roboto'] font-light text-xs md:text-sm leading-[20px] md:leading-[22px] mt-[14px]">
                Lorem ipsum dolor sit amet, nam sale civibus conclusionemque et,
                ad qui omnes audire eloquentiam, at vis lucilius expetenda. Est
                ad meis putant suscipiantur, cu vix vidisse pertinax, in sea
                exerci mandamus.
              </p>
            </div>
          </div>
        </>
      )}

      <WhatsAppButton
        phoneNumber={WHATSAPP_NUMBER}
        message="Hi, I have a question about one of your blog posts. Can you help me?"
      />
    </>
  );
};

export default Blog;
