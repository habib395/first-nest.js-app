
import Link from 'next/link';
import { headers } from "next/headers";
import DeleteBookingButton from './components/DeletebookingButton';
import { FaRegEdit } from "react-icons/fa";
import Image from 'next/image';

// const  fetchBlogs = async() =>{
//   const res = await fetch('http://localhost:3000/api/service', {
//     headers: headers(),
//   })
//   const data = await res.json();
//   return  data
// }

const fetchBlogs = async () => {
  const res = await fetch('http://localhost:3000/api/service', {
    headers: headers(),
  });

  if (!res.ok) {
    console.error('Failed to fetch blogs:', res.status, res.statusText);
    return [];
  }

  const data = await res.json();

  // Ensure it returns an array
  return Array.isArray(data) ? data : data?.data || [];
};


export default async function BlogPage() {
  const data = await fetchBlogs();

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        📚 Latest Blogs
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((blog) => (
          <div
            key={blog._id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
          >
            {/* Author Section */}
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={blog.userImage || '/default-avatar.png'}
                width={40}
                height={40}
                alt={blog.name}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">{blog.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Blog Image */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={blog.image || '/default-image.jpg'}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Title and Content */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
              {blog.content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-auto">
              <Link href={`/blogs/${blog._id}`}>
                <span className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                  Read More →
                </span>
              </Link>

              <div className="flex items-center gap-4">
                <Link href={`/my_blogs/${blog._id}`} className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition">
                  <FaRegEdit className="w-5 h-5" />
                </Link>

                <DeleteBookingButton id={blog._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}