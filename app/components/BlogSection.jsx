
import Image from "next/image";
import moment from "moment";
import dbConnect, { collectionNameObj } from "../lib/dbConnect";

export default async function BlogSection() {
  const bCollection = dbConnect(collectionNameObj.bookingCollection);
  const data = await bCollection.find({}).toArray();

  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Author Info */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
            <Image
              src={item.userImage}
              width={40}
              height={40}
              className="rounded-full object-cover"
              alt={item.name}
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-800 dark:text-white">
                {item.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {moment(item.date).format("MMM D, YYYY")}
              </p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-4 space-y-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {item.content}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item?.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-orange-100 text-orange-700 dark:bg-orange-600 dark:text-white text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}