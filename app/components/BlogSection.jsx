import Image from 'next/image'
import React from 'react'
import dbConnect, { collectionNameObj } from '../lib/dbConnect'
import Link from 'next/link'

export default async function BlogSection() {

  const bCollection = dbConnect(collectionNameObj.blogCollection)
  const data = await bCollection.find({}).toArray()

  return (
    <div className='grid grid-cols-12 gap-4'>
        {
            data.map((item) => {
                return <div className='col-span-12 md:col-span-6 lg:col-span-4 p-4 border' key={item._id}>
                    <Image src={item.userPhoto} width={300} height={300} alt={item.title}/>
                    <h2 className='text-center py-3 font-bold'>{item.title}</h2>
                    <div>
                      <Link href={`/blog/${item._id}`}>View</Link>
                    </div>
                    </div>
            })
        }
    </div>
  )
}
