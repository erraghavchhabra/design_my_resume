// BlogSection.jsx
const blogs = [
  {
    id: 1,
    title: "How to Write a Resume That Lands Interviews",
    updated: "October 25, 2025",
    author: {
      name: "Sarah Johnson",
      image: "/assets/img/user2.png",
    },
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 2,
    title: "Top 10 Resume Mistakes and How to Avoid Them",
    updated: "October 30, 2025",
    author: {
      name: "James Carter",
      image: "/assets/img/user1.png",
    },
    image:
      "https://images.pexels.com/photos/5915198/pexels-photo-5915198.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    title: "Best Resume Formats for 2025: What Recruiters Love",
    updated: "November 2, 2025",
    author: {
      name: "Emily Davis",
      image: "/assets/img/user2.png",
    },
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: 4,
    title: "How AI Tools Can Help You Build a Perfect Resume",
    updated: "November 5, 2025",
    author: {
      name: "Michael Lee",
      image: "/assets/img/user1.png",
    },
    image:
      "https://images.pexels.com/photos/6476585/pexels-photo-6476585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const BlogSection = () => {
  return (
    <div className="w-full bg-gray-100">
      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl  m-auto mb-12">
          <h2 className="text-3xl  sm:text-4xl font-bold text-indigo-600 mb-3">
            Get Resume Help From Our Experts
          </h2>
          <p className="text-gray-600 text-lg">
            You’re never alone in your job search. Whether you’re writing a
            cover letter, preparing for the interview, or negotiating your
            salary, our resource center has articles that will help you take the
            next step in your career.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Wrapper with Hover Effect */}
              <div className="relative overflow-hidden group">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-400 mb-2">
                  Last Updated: {blog.updated}
                </p>
                <h3 className="text-lg font-semibold text-gray-800 leading-snug mb-4 hover:text-indigo-600 transition-colors">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={blog.author.image}
                    alt={blog.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-200"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {blog.author.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-center mt-14">
          <a
            href="#"
            className="px-8 py-3 text-lg font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Get More Career Advice
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
