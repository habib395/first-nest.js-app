import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb";
import Image from "next/image";
export default async function blogDetailsPage({ params }) {
    const p = await params
    const bCollection = dbConnect(collectionNameObj.blogCollection)
    const data = await bCollection.findOne({_id : new ObjectId(p.id)})
  return (
    <div>
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-10">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={data.userPhoto}
          alt={data.userName}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{data.userName}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{data.date}</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{data.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{data.body}</p>

      <div className="flex items-center justify-between mt-6">
        <span className="text-sm px-3 py-1 bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-white rounded-full">
          #{data.tag}
        </span>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Likes: {data.likes.length} | Votes: {data.votes}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Comments</h2>
        {data.comments.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No comments yet.</p>
        ) : (
          data.comments.map((comment, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <div className="flex items-center gap-3 mb-2">
                <Image src={comment.photoURL} alt={comment.userName} width={30} height={30} className="rounded-full" />
                <span className="font-medium text-gray-800 dark:text-gray-200">{comment.userName}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.text}</p>
              <p className="text-xs text-gray-400 mt-1">{new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
      
    </div>
  )
}
