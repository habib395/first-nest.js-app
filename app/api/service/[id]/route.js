import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect"
import { getServerSession } from "next-auth"
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"
import { authOptions } from "@/app/lib/authOptions";
import { revalidatePath } from "next/cache";

export const DELETE = async (req, { params }) => {
    const p = await params
    const bookingCollection = dbConnect(collectionNameObj.bookingCollection)
    const query = { _id: new ObjectId(p.id)}

    const session = await getServerSession(authOptions)
    const currentBooking = await bookingCollection.findOne(query)

    const isOwnerOk = session?.user?.email == currentBooking?.email
    if(isOwnerOk){
        const deleteResponse = await bookingCollection.deleteOne(query)
        revalidatePath("/my_blogs")
        return NextResponse.json(deleteResponse)
    }else{
        return NextResponse.json({ success:false, message:"Forbiden Action"}, {status: 401})
    }    
}