import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const GET = async (req, { params }) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id : new ObjectId(p.id)}
    const singleBlog = await bookingCollection.findOne(query)

    return NextResponse.json(singleBlog)
}
export const PATCH = async(req, { params }) =>{
    const p = await params
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id : new ObjectId(p.id)}

    const body = await req.json()

    const filter = {
        $set: { ...body }
    }
    const option = {
        upsert: true
    }
    const updateResponse = await bookingCollection.updateOne(query, filter, option)
    revalidatePath("/my-booking")
    return NextResponse.json(updateResponse)
}