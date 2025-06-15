
import Link from 'next/link';
import { headers } from "next/headers";
import DeleteBookingButton from './components/DeletebookingButton';

const  fetchBlogs = async() =>{
  const res = await fetch('http://localhost:3000/api/service', {
    headers: headers(),
  })
  const data = await res.json();
  console.log(data)
  return  data
}

export default async function BlogPage() {
    const data = await fetchBlogs()

  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">Latest Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((blog) => (
          <div
            key={blog._id}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={blog.userImage}
                alt={blog.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800 dark:text-white">{blog.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(blog.date).toLocaleDateString()}</p>
              </div>
            </div>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">{blog.content}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link href={`/blogs/${blog._id}`}>
              <button className="mt-2 text-sm text-blue-600 hover:underline dark:text-blue-400">
                Read More →
              </button>
            </Link>

                <DeleteBookingButton id={blog._id} />
          </div>
        ))}
      </div>
    </div>
  );
}