// "use client"

// import React, { useState } from "react";
// import { useSession } from "next-auth/react"
// import {
//   FaUserEdit,
//   FaImage,
//   FaHeading,
//   FaCalendarAlt,
//   FaPen,
//   FaTags,
// } from "react-icons/fa";
// import { useRouter } from "next/navigation"

// const AddBlogs = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [selectedTags, setSelectedTags] = useState([]);
//   const { data:session } = useSession()
//   const router = useRouter()


//   const availableTags = [
//     "Tutorial",
//     "Case Study",
//     "Opinion",
//     "News",
//     "Review",
//     "How-To Guide",
//     "Interview",
//     "Comparison",
//     "Project Showcase",
//     "Community Highlight",
//     "Event Recap",
//     "Product Update",
//     "Industry Trends",
//     "Developer Diary",
//     "Beginner's Guide",
//     "Advanced Concepts",
//     "Weekly Roundup",
//     "Tooling Tips",
//     "Productivity Hacks",
//     "Debugging Stories",
//   ];

//   const handleTagToggle = (tag) => {
//     if (selectedTags.includes(tag)) {
//       setSelectedTags(selectedTags.filter((t) => t !== tag));
//     } else if (selectedTags.length < 5) {
//       setSelectedTags([...selectedTags, tag]);
//     }
//   };

//   const handleAddBlog = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;
//     const author = form.author.value;
//     const image = form.photo.value;
//     const title = form.title.value;
//     const content = form.content.value;
//     const date = startDate;

//     const blogData = { name: session?.user?.name, email: session?.user?.email, userImage: session?.user?.image, image, title, content, date, tags: selectedTags };
//     console.log(blogData)
//     const res = await fetch("http://localhost:3000/api/service", {
//       method: "POST",
//       body: JSON.stringify(blogData),
//     })
//     const postedResponse = await res.json()
//     console.log(postedResponse)
//     router.push("/my_blogs")
//   };

//   return (

//       <div className="max-w-4xl mx-auto rounded-2xl p-8 shadow-md border border-[var(--text-color)]/20 bg-[var(--background)] space-y-10">
//         <div className="text-center">
//           <h2 className="text-4xl font-extrabold">
//             Create a New Blog
//           </h2>
//           <p className="text-[var(--text-color)]/70 mt-2">
//             Share your insights with the developer community
//           </p>
//           <div className="mt-4 w-24 h-1 mx-auto bg-[var(--button-bg)] rounded-full" />
//         </div>

//         <form onSubmit={handleAddBlog} className="space-y-6">
//           {/* Author */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaUserEdit className="text-[var(--button-bg)]" /> Author
//             </label>
//             <input
//             defaultValue={session?.user?.name}
//               type="text"
//               name="author"
//               readOnly
//               required
//               placeholder="Your name"
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             />
//           </div>

//           {/* Auther email */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaUserEdit className="text-[var(--button-bg)]" /> Author Email
//             </label>
//             <input
//             defaultValue={session?.user?.email}
//               type="text"
//               name="author"
//               readOnly
//               required
//               placeholder="Your name"
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             />
//           </div>


//         {/* Auther Image */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaUserEdit className="text-[var(--button-bg)]" /> Author
//             </label>
//             <input
//             defaultValue={session?.user?.image}
//               type="text"
//               name="author"
//               readOnly
//               required
//               placeholder="Your name"
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             />
//           </div>

//           {/* Image URL */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaImage className="text-[var(--button-bg)]" /> Cover Image URL
//             </label>
//             <input
//               type="url"
//               name="photo"
//               required
//               placeholder="https://example.com/image.jpg"
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             />
//           </div>

//           {/* Title */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaHeading className="text-[var(--button-bg)]" /> Blog Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               required
//               placeholder="Awesome Blog Title"
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             />
//           </div>

//           {/* Tags */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaTags className="text-[var(--button-bg)]" /> Tags (2–5)
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {availableTags.map((tag) => (
//                 <button
//                   key={tag}
//                   type="button"
//                   onClick={() => handleTagToggle(tag)}
//                   disabled={
//                     selectedTags.length >= 5 && !selectedTags.includes(tag)
//                   }
//                   className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
//                     selectedTags.includes(tag)
//                       ? "bg-[var(--button-bg)] text-[var(--button-text)]"
//                       : "bg-[var(--background)] text-[var(--text-color)] border border-[var(--text-color)]/20 hover:scale-105"
//                   } ${
//                     selectedTags.length >= 5 && !selectedTags.includes(tag)
//                       ? "opacity-40 cursor-not-allowed"
//                       : ""
//                   }`}
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//             {selectedTags.length < 2 && (
//               <p className="text-xs text-red-500 mt-1">
//                 Please select at least 2 tags
//               </p>
//             )}
//           </div>

//           {/* Content */}
//           <div>
//             <label className="flex items-center gap-2 text-sm text-[var(--text-color)] font-medium mb-1">
//               <FaPen className="text-[var(--button-bg)]" /> Blog Content
//             </label>
//             <textarea
//               name="content"
//               rows="6"
//               required
//               placeholder="Write your blog here..."
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             ></textarea>
//           </div>

//           {/* Date Picker */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Date</span> 
//               Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               required
//               className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading || selectedTags.length < 2}
//               className={`btn w-full ${
//                 selectedTags.length < 2
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:scale-105 transition-transform"
//               }`}
//             >
//               {loading ? "Publishing..." : "Publish Blog"}
//             </button>
//           </div>

//           {/* Success Message */}
//           {success && (
//             <div
//               className="text-center py-2 rounded-lg mt-4"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               Blog published successfully!
//             </div>
//           )}
//         </form>
//       </div>
//   );
// };

// export default AddBlogs;


"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  FaUserEdit,
  FaImage,
  FaHeading,
  FaCalendarAlt,
  FaPen,
  FaTags,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const AddBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();

  const availableTags = [
    "Tutorial", "Case Study", "Opinion", "News", "Review",
    "How-To Guide", "Interview", "Comparison", "Project Showcase", "Community Highlight",
    "Event Recap", "Product Update", "Industry Trends", "Developer Diary", "Beginner's Guide",
    "Advanced Concepts", "Weekly Roundup", "Tooling Tips", "Productivity Hacks", "Debugging Stories",
  ];

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const author = form.author.value;
    const email = form.email.value;
    const userImage = form.userImage.value;
    const image = form.photo.value;
    const title = form.title.value;
    const content = form.content.value;
    const date = form.date.value;

    const blogData = {
      name: author,
      email,
      userImage,
      image,
      title,
      content,
      date,
      tags: selectedTags,
    };

    const res = await fetch("http://localhost:3000/api/service", {
      method: "POST",
      body: JSON.stringify(blogData),
    });

    const postedResponse = await res.json();
    setSuccess(true);
    router.push("/my_blogs");
  };

  return (
    <div className="max-w-4xl mx-auto rounded-2xl p-8 shadow-lg border border-[var(--text-color)]/20 bg-[var(--background)] space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-[var(--text-color)]">
          ✍️ Create a New Blog
        </h2>
        <p className="text-[var(--text-color)]/70 mt-2">
          Share your insights with the developer community
        </p>
        <div className="mt-4 w-24 h-1 mx-auto bg-[var(--button-bg)] rounded-full" />
      </div>

      <form onSubmit={handleAddBlog} className="space-y-6">
        {/* Author */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaUserEdit className="text-[var(--button-bg)]" /> Author Name
          </label>
          <input
            defaultValue={session?.user?.name}
            name="author"
            type="text"
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          />
        </div>

        {/* Author Email */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaEnvelope className="text-[var(--button-bg)]" /> Author Email
          </label>
          <input
            defaultValue={session?.user?.email}
            name="email"
            type="email"
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          />
        </div>

        {/* Author Image */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaUserCircle className="text-[var(--button-bg)]" /> Author Image URL
          </label>
          <input
            defaultValue={session?.user?.image}
            name="userImage"
            type="url"
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          />
        </div>

        {/* Blog Image */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaImage className="text-[var(--button-bg)]" /> Cover Image URL
          </label>
          <input
            name="photo"
            type="url"
            required
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          />
        </div>

        {/* Blog Title */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaHeading className="text-[var(--button-bg)]" /> Blog Title
          </label>
          <input
            name="title"
            type="text"
            required
            placeholder="An Engaging Blog Title"
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaTags className="text-[var(--button-bg)]" /> Tags (2–5)
          </label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagToggle(tag)}
                disabled={selectedTags.length >= 5 && !selectedTags.includes(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? "bg-[var(--button-bg)] text-[var(--button-text)]"
                    : "bg-[var(--background)] text-[var(--text-color)] border border-[var(--text-color)]/20 hover:scale-105"
                } ${
                  selectedTags.length >= 5 && !selectedTags.includes(tag)
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          {selectedTags.length < 2 && (
            <p className="text-xs text-red-500 mt-1">
              Please select at least 2 tags
            </p>
          )}
        </div>

        {/* Blog Content */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaPen className="text-[var(--button-bg)]" /> Blog Content
          </label>
          <textarea
            name="content"
            rows={6}
            required
            placeholder="Start writing your blog..."
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          ></textarea>
        </div>

        {/* Date Picker */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[var(--text-color)] mb-1">
            <FaCalendarAlt className="text-[var(--button-bg)]" /> Blog Date
          </label>
          <input
            name="date"
            type="date"
            required
            className="w-full px-4 py-3 rounded-xl border border-[var(--text-color)]/20 bg-[var(--background)] text-[var(--text-color)] placeholder-[var(--text-color)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)]"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading || selectedTags.length < 2}
            className={`w-full py-3 rounded-xl font-semibold transition-transform duration-300 ${
              selectedTags.length < 2 || loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[var(--button-bg)] text-[var(--button-text)] hover:scale-105"
            }`}
          >
            {loading ? "Publishing..." : "🚀 Publish Blog"}
          </button>
        </div>

        {success && (
          <div className="text-center text-green-600 font-medium mt-4">
            ✅ Blog published successfully!
          </div>
        )}
      </form>
    </div>
  );
};

export default AddBlogs;